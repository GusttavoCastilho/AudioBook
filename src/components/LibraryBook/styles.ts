import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  flex-direction: row;

  margin-top: 16px;
`;

export const Content = styled.View`
  margin-left: 16px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Title = styled.Text`
  font-size: 16px;

  padding-top: 17px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Author = styled.Text`
  font-size: 12px;

  padding-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.primary_50};
  `}
`;
