import React from "react";
import { ImageSourcePropType } from "react-native";

import HeaderBg from "@assets/header-bg.svg";

import {
  Wrapper,
  Header,
  Image,
  Title,
  Subtitle,
  WrapperButton,
} from "./styles";

type OnboardingProps = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

export function Onboarding({ image, title, description }: OnboardingProps) {
  return (
    <Wrapper>
      <Header>
        <HeaderBg width="100%" />
      </Header>

      <Image source={image} />

      <Title>{title}</Title>

      <Subtitle>{description}</Subtitle>
    </Wrapper>
  );
}
