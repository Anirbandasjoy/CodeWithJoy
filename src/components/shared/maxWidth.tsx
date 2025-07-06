import React from "react";

const MaxWidth = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`max-w-5xl mx-auto ${className}`}>{children}</div>;
};

export default MaxWidth;
