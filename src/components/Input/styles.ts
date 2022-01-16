import styled from "styled-components/native";

export const Wrapper = styled.TextInput`
  width: 100%;
  height: 53px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.neutral_5};
  color: ${({ theme }) => theme.colors.neutral_40};

  padding-left: 24px;
  margin-top: 16px;
`;
