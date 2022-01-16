import React from "react";

import { Wrapper } from "./styles";

type DotsProps = {
  active?: boolean;
};

export function Dots({ active = false }: DotsProps) {
  return <Wrapper active={active} />;
}
