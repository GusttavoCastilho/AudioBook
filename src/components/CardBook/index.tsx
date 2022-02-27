import React from "react";
import {
  ImageSourcePropType,
  TouchableWithoutFeedbackProps,
} from "react-native";

import { Wrapper, Content, Image, Title } from "./styles";

export type CardBookProps = {
  image: string | ImageSourcePropType;
  title: string;
} & TouchableWithoutFeedbackProps;

export function CardBook({ image, title, ...rest }: CardBookProps) {
  return (
    <Wrapper {...rest}>
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
