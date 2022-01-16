import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Wrapper, Label } from "./styles";

export type ButtonProps = {
  fullWidth?: boolean;
  minimal?: boolean;
  border?: boolean;
  label: string;
} & TouchableOpacityProps;

export function Button({
  fullWidth = false,
  minimal = false,
  border = false,
  label,
  ...rest
}: ButtonProps) {
  return (
    <Wrapper minimal={minimal} fullWidth={fullWidth} border={border} {...rest}>
      <Label minimal={minimal} border={border}>
        {label}
      </Label>
    </Wrapper>
  );
}
