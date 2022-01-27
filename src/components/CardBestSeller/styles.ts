import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 315px;
  height: 144px;
  background-color: ${({ theme }) => theme.colors.neutral_5};
  border-radius: 12px;

  flex-direction: row;
  margin-left: 20px;
  margin-top: 16px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 4px;

  margin: 12px 0px 12px 12px;
`;

export const Content = styled.View`
  padding: 16px 12px 16px 16px;
`;

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.black};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 12px;

  padding-top: 4px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_60};
  `}
`;

export const WrapperRating = styled.View`
  margin-top: 20px;
`;
