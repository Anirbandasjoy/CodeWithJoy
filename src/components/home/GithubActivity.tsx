"use client";

import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  return (
    <div className="mt-10 bg-white p-5 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        GitHub Contributions
      </h2>
      <GitHubCalendar
        username="Anirbandasjoy"
        blockSize={15}
        blockMargin={5}
        // color="#4c1d95"
        fontSize={14}
      />
    </div>
  );
};

export default GithubActivity;
