import { DefaultTheme } from "styled-components";

enum PrimaryColors {
  primary1 = "primary1",
  primary2 = "primary2",
  primary3 = "primary3"
}

enum SecondaryColors {
  secondary1 = "secondary1",
  secondary2 = "secondary2",
  secondary3 = "secondary3"
}

enum MainColors {
  red1 = "red1",
  red2 = "red2",

  blue1 = "blue1",
  blue2 = "blue2",

  green1 = "green1",
  green2 = "green2",

  yellow1 = "yellow1",
  yellow2 = "yellow2",

  black = "black",
  white = "white"
}

type ColorsType = PrimaryColors | SecondaryColors | MainColors;

interface Theme extends DefaultTheme {
  color: Record<ColorsType, string>;
}

const theme: Theme = {
  color: {
    primary1: "#1677ff",
    primary2: "#1677ffeb",
    primary3: "#",

    secondary1: "#73828c3b",
    secondary2: "#97a7b2",
    secondary3: "#ccdde8",

    red1: "#ff0000",
    red2: "#dc5959",

    green1: "#04931b",
    green2: "#036a13",

    blue1: "#1677ff",
    blue2: "#1677ffeb",

    yellow1: "#f0f10e",
    yellow2: "#adae05",

    white: "#fff",
    black: "#000"
  }
};

export default theme;
