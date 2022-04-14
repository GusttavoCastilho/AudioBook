import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

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

export const BookImage = styled.Image`
    width: 320px;
    height: 320px;
    border-radius: 12px;

    margin-top: 20px;
`;

export const TitleBook = styled.Text`
    font-size: 20px;
    margin-top: 30px;

    ${({ theme }) => css`
        font-family: ${theme.fonts.medium};
        color: ${theme.colors.black};
    `}
`;

export const AuthorBook = styled.Text`
    font-size: 16px;
    opacity: 0.5;
    margin-top: 4px;

    ${({ theme }) => css`
        font-family: ${theme.fonts.regular};
        color: ${theme.colors.black};
    `}
`;

export const Timeline = styled.View`
  width: 100%;

  margin-top: 32px;
`;

export const BoxTime = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-size: 10px;
  margin-top: 12px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_20};
  `}
`;

export const BoxButton = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
`;

export const ButtonSound = styled.TouchableOpacity``;

export const ButtonLastAndNext = styled.TouchableOpacity``;

export const ButtonPlay = styled.TouchableOpacity``;

export const ButtonUpload = styled.TouchableOpacity``;