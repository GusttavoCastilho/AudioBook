import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Dots } from "@components/Dots";
import { Button } from "@components/Button";

import HeaderBg from "@assets/header-bg.svg";
import OneStepImg from "@assets/one-step.png";

import {
  Wrapper,
  Header,
  Image,
  Title,
  Subtitle,
  Carousel,
  WrapperButton,
} from "./styles";

export function OneStep() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Header>
        <HeaderBg width="100%" />
      </Header>

      <Image source={OneStepImg} />

      <Title>Title One</Title>

      <Subtitle>
        Lorem ipsum dolor sit amet la maryame dor sut colondeum.
      </Subtitle>

      <Carousel>
        <Dots active />
        <Dots />
        <Dots />
      </Carousel>

      <WrapperButton>
        <Button
          label="Skip"
          minimal
          onPress={() => navigation.navigate("SignIn")}
        />
        <Button label="Next" onPress={() => navigation.navigate("TwoStep")} />
      </WrapperButton>
    </Wrapper>
  );
}
