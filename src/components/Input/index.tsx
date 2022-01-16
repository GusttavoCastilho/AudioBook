import React from "react";
import { TextInputProps } from "react-native";

import { Wrapper } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return <Wrapper {...rest} />;
}
