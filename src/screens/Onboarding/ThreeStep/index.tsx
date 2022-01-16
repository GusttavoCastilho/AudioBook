import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Dots } from "@components/Dots";
import { Button } from "@components/Button";

import HeaderBg from "@assets/header-bg.svg";
import ThreeStepImg from "@assets/three-step.png";

import {
  Wrapper,
  Header,
  Image,
  Title,
  Subtitle,
  Carousel,
  WrapperButton,
} from "./styles";

export function ThreeStep() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Header>
        <HeaderBg width="100%" />
      </Header>

      <Image source={ThreeStepImg} />

      <Title>Title Three</Title>

      <Subtitle>
        Lorem ipsum dolor sit amet la maryame dor sut colondeum.
      </Subtitle>

      <Carousel>
        <Dots />
        <Dots />
        <Dots active />
      </Carousel>

      <WrapperButton>
        <Button
          label="Lets Get Started"
          fullWidth
          onPress={() => navigation.navigate("SignIn")}
        />
      </WrapperButton>
    </Wrapper>
  );
}
