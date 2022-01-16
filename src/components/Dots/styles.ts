import styled from "styled-components/native";

type WrapperProps = {
  active: boolean;
};

export const Wrapper = styled.View<WrapperProps>`
  width: 12px;
  height: 12px;
  border-radius: 6px;

  margin-left: 12px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.accent_50 : theme.colors.primary_40};
`;
