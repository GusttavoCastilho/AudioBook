import { render, RenderAPI } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../theme";

export function renderWithTheme(component: React.ReactElement): RenderAPI {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export const convertTime = (minutes: number) => {
  if (minutes) {
    const hrs = minutes / 60;
    const minute = hrs.toString().split(".")[0];
    const percent = parseInt(hrs.toString().split(".")[1].slice(0, 2));
    const sec = Math.ceil((60 * percent) / 100);
    if (parseInt(minute) < 10 && sec < 10) {
      return `0${minute}:0${sec}`;
    }

    if (sec == 60) {
      return `${minute + 1}:00`;
    }

    if (parseInt(minute) < 10) {
      return `0${minute}:${sec}`;
    }

    if (sec < 10) {
      return `${minute}:0${sec}`;
    }

    return `${minute}:${sec}`;
  }
};

export function getMMSSFromMillis(millis: number) {
  const totalSeconds = millis / 1000;
  const seconds = Math.floor(totalSeconds % 60);
  const minutes = Math.floor(totalSeconds / 60);

  const padWithZero = (number: number) => {
    const string = number.toString();
    if (number < 10) {
      return "0" + string;
    }
    return string;
  };
  return padWithZero(minutes) + ":" + padWithZero(seconds);
}
