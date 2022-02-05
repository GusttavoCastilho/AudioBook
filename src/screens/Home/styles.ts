import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
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
  margin-top: 40px;
`;

export const BoxText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 28px 0px 24px;
`;

export const Text = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
  `}
`;

export const TextSeeMore = styled.Text`
  font-size: 14px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.primary_50};
  `}
`;

export const CategoriesList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-left: 8px;
  margin-bottom: 32px;
`;

export const BannerList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 16px 0px 32px 24px;
`;

export const BannerBook = styled.Image`
  width: 200px;
  height: 300px;

  margin-right: 16px;
`;
