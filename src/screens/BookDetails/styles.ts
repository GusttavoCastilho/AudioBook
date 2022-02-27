import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Scrool = styled.ScrollView``;

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${getStatusBarHeight() + 34}px 36px 25px 36px;
`;

export const HeaderTitle = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Content = styled.View`
  width: 100%;

  padding: 0 32px;
`;

export const Image = styled.Image`
  width: 260px;
  height: 260px;

  align-self: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  padding-top: 28px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
  `}
`;

export const Author = styled.Text`
  font-size: 16px;
  padding-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_50};
  `}
`;

export const WrapperCategory = styled.View`
  width: 100%;

  flex-direction: row;

  margin-top: 10px;
`;

export const CardCategory = styled.View`
  height: 26px;

  border: 1px solid ${({ theme }) => theme.colors.neutral_60};
  border-radius: 24px;

  align-items: center;
  justify-content: center;

  margin-right: 8px;
`;

export const TitleCategory = styled.Text`
  font-size: 12px;
  padding: 0px 12px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.neutral_60};
  `}
`;

export const WrapperButton = styled.View`
  width: 100%;

  flex-direction: row;

  margin-top: 32px;
`;

export const TextSumary = styled.Text`
  font-size: 14px;
  padding-top: 32px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Sumary = styled.Text`
  font-size: 14px;
  padding-top: 12px;
  text-align: justify;

  ${({ theme }) => css`
    font-family: ${theme.fonts.light};
    color: ${theme.colors.neutral_60};
  `}
`;
