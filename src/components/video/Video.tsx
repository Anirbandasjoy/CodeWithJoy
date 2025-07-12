import MaxWidth from "@/components/shared/maxWidth";
import React from "react";

const videoLinks = [
  "https://youtu.be/RMEh74ub4vc",
  "https://youtu.be/C38Sh7cK1a8",
  "https://youtu.be/8k8TDlK0Gs0",
];

const Video = () => {
  return (
    <MaxWidth>
      <h2 className="text-[23px] font-bold text-slate-700 mb-2">
        My YouTube Content
      </h2>
      <p className="text-slate-600 text-[10px] md:text-base max-w-2xl">
        I love making videos about what I do, what I learn, and what inspires
        me.
      </p>

      <div className="grid gap-10 my-10">
        {videoLinks.map((link, index) => {
          const videoId = link.split("/").pop();

          return (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </MaxWidth>
  );
};

export default Video;
