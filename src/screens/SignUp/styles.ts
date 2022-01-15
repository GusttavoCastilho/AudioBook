import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;

  align-items: center;

  margin-top: ${getStatusBarHeight() + 30}px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 24px 40px;
`;

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Info = styled.Text`
  font-size: 14px;
  line-height: 21px;

  padding: 16px 0px 0px 10px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;
