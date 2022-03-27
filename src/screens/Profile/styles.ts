import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;

  padding: 0px 36px 20px;

  margin-top: ${getStatusBarHeight() + 30}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_5};
`;

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;

export const TitleButtonSave = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary_50};
  `}
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const ImageUser = styled.Image`
  width: 160px;
  height: 160px;

  border-radius: 20px;
  align-self: center;
  margin-bottom: 40px;
`;

export const BoxInfo = styled.View`
  width: 100%;
  height: 52px;

  flex-direction: row;
  align-items: center;

  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.neutral_5};
`;

export const TitleInfo = styled.Text`
  width: 45%;
  font-size: 14px;
  padding-left: 32px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;

export const DescriptionInfo = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;
