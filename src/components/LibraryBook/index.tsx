import React from "react";
import { ImageSourcePropType } from "react-native";

import { Wrapper, Content, Image, Title, Author } from "./styles";

export type LibraryBookProps = {
  image: ImageSourcePropType;
  title: string;
  author: string;
};

export function LibraryBook({ image, title, author }: LibraryBookProps) {
  return (
    <Wrapper>
      <Image source={image} resizeMode="contain" />
      <Content>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Content>
    </Wrapper>
  );
}
