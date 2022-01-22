import React from "react";
import { renderWithTheme } from "@utils/helper";

import { CardBestSeller } from ".";

import Silence from "@assets/books/silence.png";

jest.mock(Silence);

describe("<CardBestSeller />", () => {
  it("should render a title category", () => {
    const { getByText } = renderWithTheme(
      <CardBestSeller image={Silence} title="ssd" company="sds" />
    );
  });
});
