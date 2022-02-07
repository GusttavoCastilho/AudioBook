import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 30}px;
  margin-left: 36px;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 16px;
  text-align: center;
  padding-right: 100px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Profile = styled.View`
  width: 100%;
  height: 104px;

  flex-direction: row;
  align-items: center;

  margin-top: 20px;
  padding-left: 32px;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.neutral_5};
`;

export const ImageProfile = styled.Image`
  width: 72px;
  height: 72px;

  border-radius: 36px;
`;

export const Content = styled.View`
  margin-left: 28px;
`;

export const Username = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;

export const TextButton = styled.Text`
  font-size: 12px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_50};
  `}
`;

export const Diviser = styled.View`
  width: 100%;
  height: 28px;

  background-color: ${({ theme }) => theme.colors.neutral_5};
`;

export const ButtonWrapper = styled.View`
  margin: 28px 28px 0px 28px;
`;
