import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 100%;
  height: 53px;

  justify-content: center;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.neutral_5};
`;

export const Title = styled.Text`
  font-size: 14px;

  padding-left: 32px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;
