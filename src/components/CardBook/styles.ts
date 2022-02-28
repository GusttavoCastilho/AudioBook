import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableWithoutFeedback`
  width: 160px;
  height: 196px;
`;

export const Content = styled.View`
  margin-right: 12px;
  max-width: 160px;
`;

export const Image = styled.Image`
  width: 160px;
  height: 160px;
`;

export const Title = styled.Text`
  font-size: 16px;

  padding-top: 12px;
  padding-bottom: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.neutral_80};
  `}
`;
