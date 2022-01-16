import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonProps } from ".";

type Props = Pick<ButtonProps, "minimal" | "fullWidth" | "border">;

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
    margin-top: 16px;
  `,
  minimal: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.primary_50};
  `,
  border: (theme: DefaultTheme) => css`
    background-color: transparent;
    border: 1px solid ${theme.colors.primary_50};
  `,
};

export const Wrapper = styled.TouchableOpacity<Props>`
  width: 140px;
  height: 56px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary_50};

  align-items: center;
  justify-content: center;

  ${({ theme, minimal, fullWidth, border }) => css`
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!border && wrapperModifiers.border(theme)};
  `}
`;

export const Label = styled.Text<Props>`
  font-size: 16px;
  padding: 16px 32px;

  ${({ theme, minimal, border }) => css`
    font-family: ${theme.fonts.medium};
    color: ${minimal || border ? theme.colors.primary_50 : theme.colors.white};
  `}
`;
