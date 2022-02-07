import React from "react";

import { Wrapper, Title } from "./styles";

type ButtonSettingsProps = {
  title: string;
};

export function ButtonSettings({ title }: ButtonSettingsProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}
