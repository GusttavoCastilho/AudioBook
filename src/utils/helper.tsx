import { render, RenderAPI } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../theme";

export function renderWithTheme(component: React.ReactElement): RenderAPI {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}
