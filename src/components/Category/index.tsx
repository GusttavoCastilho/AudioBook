import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Wrapper, Title } from "./styles";

type CategoryProps = {
  category: string;
  active?: boolean;
} & TouchableOpacityProps;

export function Category({ category, active = false, ...rest }: CategoryProps) {
  return (
    <Wrapper active={active} {...rest}>
      <Title>{category}</Title>
    </Wrapper>
  );
}
