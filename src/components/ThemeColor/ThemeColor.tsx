import React from "react";
import Helmet from "react-helmet";
import useMedia from "use-media";

const ThemeColor = () => {
  useMedia("(prefers-color-scheme: light)");
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue("--background")
    .trim();

  return (
    <Helmet>
      <meta name="theme-color" content={value} />
    </Helmet>
  );
};

export default ThemeColor;
