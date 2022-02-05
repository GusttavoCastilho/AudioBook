import { FlatList } from "react-native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";
import { CategoryProps } from ".";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${getStatusBarHeight() + 30}px 28px 0 28px;
`;

export const Content = styled.View`
  padding: 40px 20px 0px 20px;
`;

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.black};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 16px;

  padding-top: 32px;
  padding-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
  `}
`;

export const Category = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ListBook = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;
