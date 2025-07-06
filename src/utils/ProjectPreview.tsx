/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type PreviewData = {
  title: string;
  description: string;
  image: string;
  siteName: string;
  url: string;
};

type ProjectPreviewProps = {
  url: string;
};

const PLACEHOLDER_IMAGE =
  "https://placehold.co/600x320/1e293b/ffffff?text=No+Image&font=roboto";

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ url }) => {
  const [data, setData] = useState<PreviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPreview() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/link-preview?url=${encodeURIComponent(url)}`
        );
        if (!res.ok) throw new Error("Failed to fetch preview");
        const previewData: PreviewData = await res.json();
        setData(previewData);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchPreview();
  }, [url]);

  if (loading)
    return (
      <div className="max-w-md w-full border border-gray-200 rounded-md overflow-hidden bg-white animate-pulse">
        <div className="w-full h-48 bg-gray-200" />
        <div className="p-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
          <div className="h-3 bg-gray-100 rounded w-1/4 mt-3" />
        </div>
      </div>
    );

  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!data) return null;

  return (
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-md  border border-gray-200 rounded-md overflow-hidden  transition-shadow duration-300 bg-white"
    >
      <div className="relative w-full h-48">
        <Image
          src={data.image || PLACEHOLDER_IMAGE}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
          {data.title}
        </h3>
        <p className="text-gray-700 text-sm line-clamp-3">{data.description}</p>
        {data.siteName && (
          <p className="text-xs text-gray-400 mt-2 italic">{data.siteName}</p>
        )}
      </div>
    </a>
  );
};

export default ProjectPreview;
