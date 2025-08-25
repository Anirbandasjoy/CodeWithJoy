import React from "react";

const Header = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-[32px] font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl">{subtitle}</p>
    </div>
  );
};

export default Header;
