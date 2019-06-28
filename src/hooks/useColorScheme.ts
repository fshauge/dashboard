import { useMedia } from "./useMedia";

export enum ColorScheme {
  light = "light",
  dark = "dark"
}

const useColorScheme = () =>
  useMedia(
    [
      "(prefers-color-scheme: no-preference)",
      "(prefers-color-scheme: light)",
      "(prefers-color-scheme: dark)"
    ],
    [ColorScheme.light, ColorScheme.light, ColorScheme.dark],
    ColorScheme.light
  );

export default useColorScheme;
