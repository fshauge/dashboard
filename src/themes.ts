import { ColorScheme } from "./hooks/useColorScheme";

export type ThemeMap = { [key in ColorScheme]: Theme };

export type Theme = {
  background: string;

  text: {
    primary: string;
    secondary: string;
  };

  statusBarHighlight: {
    start: number;
    end: number;
  };

  box: {
    background: string;
    shadow: string;
  };

  filterToggle: {
    background: string;
    backgroundActive: string;
  };
};

const themes: ThemeMap = {
  light: {
    background: "#eee",

    text: {
      primary: "#000",
      secondary: "#444"
    },

    statusBarHighlight: {
      start: 0.25,
      end: 0.5
    },

    box: {
      background: "#f8f8f8",
      shadow: "0 0 0.5rem hsla(0, 0%, 0%, 0.05)"
    },

    filterToggle: {
      background: "#eee",
      backgroundActive: "#e0e0e0"
    }
  },

  dark: {
    background: "#111",

    text: {
      primary: "#fff",
      secondary: "#aaa"
    },

    statusBarHighlight: {
      start: 0,
      end: 0.75
    },

    box: {
      background: "#222",
      shadow: "0 0 0.5rem hsla(0, 0%, 0%, 0.25)"
    },

    filterToggle: {
      background: "#191919",
      backgroundActive: "#121212"
    }
  }
};

export default themes;
