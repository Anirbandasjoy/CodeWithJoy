import { NextResponse } from "next/server";
import ogs from "open-graph-scraper";

type OgImage = { url?: string };
type OgResult = {
  ogTitle?: string;
  twitterTitle?: string;
  ogDescription?: string;
  twitterDescription?: string;
  ogImage?: OgImage | OgImage[];
  twitterImage?: OgImage | OgImage[];
  ogSiteName?: string;
  requestUrl?: string;
};

function toAbsoluteUrl(imgUrl: string, baseUrl: string): string {
  try {
    new URL(imgUrl);
    return imgUrl; // already absolute
  } catch {
    try {
      const base = new URL(baseUrl);
      return new URL(imgUrl, base).href;
    } catch {
      return imgUrl;
    }
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      { error: "Missing url query parameter" },
      { status: 400 }
    );
  }

  try {
    const { error, result } = (await ogs({ url })) as {
      error: boolean;
      result: OgResult;
    };

    if (error) {
      return NextResponse.json(
        { error: "Failed to fetch metadata" },
        { status: 500 }
      );
    }

    let imageUrl =
      (Array.isArray(result.ogImage)
        ? result.ogImage[0]?.url
        : result.ogImage?.url) ||
      (Array.isArray(result.twitterImage)
        ? result.twitterImage[0]?.url
        : result.twitterImage?.url) ||
      "";

    if (imageUrl) {
      imageUrl = toAbsoluteUrl(imageUrl, result.requestUrl || url);
    }

    return NextResponse.json({
      title: result.ogTitle || result.twitterTitle || "",
      description: result.ogDescription || result.twitterDescription || "",
      image: imageUrl,
      siteName: result.ogSiteName || "",
      url: result.requestUrl || url,
    });
  } catch (e) {
    console.error("OpenGraph fetch error:", e);
    return NextResponse.json(
      { error: "Server error while fetching metadata" },
      { status: 500 }
    );
  }
}
