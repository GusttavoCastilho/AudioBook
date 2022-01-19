import styled, { css } from "styled-components/native";

type Props = {
  active?: boolean;
};

export const Wrapper = styled.TouchableOpacity<Props>`
  height: 40px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary_20 : theme.colors.neutral_5};

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  margin: 16px 0px 0px 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  padding: 8px 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;
