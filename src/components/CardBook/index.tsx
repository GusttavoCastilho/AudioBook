import React from "react";
import { ImageSourcePropType } from "react-native";

import { Wrapper, Content, Image, Title } from "./styles";

export type CardBookProps = {
  image: string | ImageSourcePropType;
  title: string;
};

export function CardBook({ image, title }: CardBookProps) {
  return (
    <Wrapper>
      <Content>
        <Image
          source={typeof image == "string" ? { uri: image } : image}
          resizeMode="contain"
        />
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}
