import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;

  align-items: center;

  margin-top: ${getStatusBarHeight() + 30}px;
`;

export const Form = styled.View`
  width: 100%;
  padding: 24px 40px;
`;

export const Title = styled.Text`
  font-size: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.neutral_80};
  `}
`;

export const ForgetPassword = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;
`;

export const ForgetPasswordText = styled.Text`
  font-size: 14px;
  align-self: flex-end;

  padding-bottom: 8px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.accent_50};
  `}
`;

export const Text = styled.Text`
  font-size: 16px;
  padding-top: 24px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;

export const WrapperSocialButton = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const SocialButton = styled.TouchableOpacity`
  width: 87px;
  height: 56px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary_50};

  align-items: center;
  justify-content: center;

  margin-top: 20px;
  margin-left: 16px;
`;

export const WrapperButtonRegister = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

export const ButtonRegisterLabel = styled.Text`
  font-size: 14px;
  padding-top: 20px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.accent_50};
  `}
`;
