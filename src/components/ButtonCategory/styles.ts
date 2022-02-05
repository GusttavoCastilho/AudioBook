import styled, { css } from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  width: 160px;
  height: 48px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.neutral_5};

  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 15px;
  margin-bottom: 16px;
`;

export const Text = styled.Text`
  font-size: 16px;
  padding-left: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;
