import React from "react";
import { ImageSourcePropType } from "react-native";
import { Wrapper, Image, Content, Title, Subtitle } from "./styles";

type CardBestSellerProps = {
  image: ImageSourcePropType;
  title: string;
  company: string;
};

export function CardBestSeller({ image, title, company }: CardBestSellerProps) {
  return (
    <Wrapper>
      <Image source={image} accessibilityLabel={title} resizeMode="contain" />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{company}</Subtitle>
      </Content>
    </Wrapper>
  );
}
