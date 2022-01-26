import styled from "styled-components/native";
import theme from "../../theme";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const NextButton = styled.View`
  width: 140px;
  height: 56px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary_50};

  align-items: center;
  justify-content: center;
`;

export const LabelNextButton = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;

export const PrevButton = styled.View`
  width: 140px;
  height: 56px;

  border-radius: 8px;
  background-color: transparent;

  align-items: center;
  justify-content: center;
`;

export const LabelPrevButton = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_50};
`;

export const DotStyle = {
  backgroundColor: theme.colors.primary_40,
  marginBottom: 120,
};

export const ActiveDotStyle = {
  backgroundColor: theme.colors.accent_50,
  marginBottom: 120,
};
