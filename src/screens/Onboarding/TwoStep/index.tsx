import React from "react";

import { useNavigation } from "@react-navigation/native";

import { Dots } from "@components/Dots";
import { Button } from "@components/Button";

import HeaderBg from "@assets/header-bg.svg";
import TwoStepImg from "@assets/two-step.png";

import {
  Wrapper,
  Header,
  Image,
  Title,
  Subtitle,
  Carousel,
  WrapperButton,
} from "./styles";

export function TwoStep() {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Header>
        <HeaderBg width="100%" />
      </Header>

      <Image source={TwoStepImg} />

      <Title>Title Two</Title>

      <Subtitle>
        Lorem ipsum dolor sit amet la maryame dor sut colondeum.
      </Subtitle>

      <Carousel>
        <Dots />
        <Dots active />
        <Dots />
      </Carousel>

      <WrapperButton>
        <Button
          label="Skip"
          minimal
          onPress={() => navigation.navigate("SignIn")}
        />
        <Button label="Next" onPress={() => navigation.navigate("ThreeStep")} />
      </WrapperButton>
    </Wrapper>
  );
}
