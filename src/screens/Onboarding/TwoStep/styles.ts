import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};

  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 300px;
`;

export const Image = styled.Image`
  width: 260px;
  height: 260px;
`;

export const Title = styled.Text`
  font-size: 16px;

  margin-top: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.semi_bold};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  line-height: 21px;

  margin-top: 12px;
  padding: 0 45px;

  text-align: center;

  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.neutral_80};
  `}
`;

export const Carousel = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;

export const WrapperButton = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: 40px;
`;
