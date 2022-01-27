import React from "react";
import { ImageSourcePropType } from "react-native";

import Rating from "@assets/rating.svg";

import {
  Wrapper,
  Image,
  Content,
  Title,
  Subtitle,
  WrapperRating,
} from "./styles";

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

        <WrapperRating>
          <Rating />
        </WrapperRating>

        <Subtitle>1,000+ Listeners</Subtitle>
      </Content>
    </Wrapper>
  );
}
