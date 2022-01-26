import React from "react";

import { useNavigation } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";

import { Onboarding as OnboardingComponent } from "@components/Onboarding";
import { Button } from "@components/Button";

import OneStepImg from "@assets/one-step.png";
import TwoStepImg from "@assets/two-step.png";
import ThreeStepImg from "@assets/three-step.png";

import {
  Wrapper,
  LabelNextButton,
  NextButton,
  PrevButton,
  LabelPrevButton,
  DotStyle,
  ActiveDotStyle,
} from "./styles";

type OnboardingProps = {
  handleDone: () => boolean;
};

export function Onboarding({ handleDone }: OnboardingProps) {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: "Title One",
      description: "Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
      image: OneStepImg,
    },
    {
      id: 2,
      title: "Title Two",
      description: "Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
      image: TwoStepImg,
    },
    {
      id: 3,
      title: "Title Three",
      description: "Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
      image: ThreeStepImg,
    },
  ];
  const renderNextButton = () => {
    return (
      <NextButton>
        <LabelNextButton>Next</LabelNextButton>
      </NextButton>
    );
  };

  const renderDoneButton = () => {
    return (
      <Button
        label="Lets Get Started"
        fullWidth
        onPress={() => navigation.navigate("SignIn")}
        style={{ minWidth: "100%", marginBottom: 50 }}
      />
    );
  };

  const renderSkipButton = () => {
    return (
      <PrevButton>
        <LabelPrevButton>Skip</LabelPrevButton>
      </PrevButton>
    );
  };

  return (
    <Wrapper>
      <AppIntroSlider
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <OnboardingComponent
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
        data={data}
        dotStyle={DotStyle}
        activeDotStyle={ActiveDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        showSkipButton={true}
        onDone={handleDone}
        renderSkipButton={renderSkipButton}
      />
    </Wrapper>
  );
}
