import useMedia from "use-media";

const useThemeProperty = (property: string) => {
  useMedia("(prefers-color-scheme: light)");
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${property}`)
    .trim();
};

export default useThemeProperty;
