import React from "react";
import useMedia from "use-media";

const ThemeColor = () => {
  useMedia("(prefers-color-scheme: light)");
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--background")
    .trim();

  return <meta name="theme-color" content={value} />;
};

export default ThemeColor;
