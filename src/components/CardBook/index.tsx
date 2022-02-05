import React from "react";
import { ImageSourcePropType } from "react-native";

import { Wrapper, Content, Image, Title } from "./styles";

export type CardBookProps = {
  image: ImageSourcePropType;
  title: string;
};

export function CardBook({ image, title }: CardBookProps) {
  return (
    <Wrapper>
      <Content>
        <Image source={image} resizeMode="contain" />
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}
