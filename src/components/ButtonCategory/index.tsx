import React from "react";

import { SvgProps } from "react-native-svg";

import { useTheme } from "styled-components/native";

import { Wrapper, Text } from "./styles";

export type ButtonCategoryProps = {
  icon: React.FC<SvgProps> | undefined;
  title: string;
};

export function ButtonCategory({ title, icon: Icon }: ButtonCategoryProps) {
  const theme = useTheme();
  return (
    <Wrapper>
      {Icon && <Icon width={24} height={24} fill={theme.colors.neutral_100} />}
      <Text>{title}</Text>
    </Wrapper>
  );
}
