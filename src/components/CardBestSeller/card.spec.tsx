import React from "react";
import { renderWithTheme } from "@utils/helper";

import { CardBestSeller } from ".";

import Silence from "@assets/one-step.png";

describe("<CardBestSeller />", () => {
  it("should render a title category", () => {
    const { getByText, getByLabelText } = renderWithTheme(
      <CardBestSeller image={Silence} title="myTitle" company="myCategory" />
      );
      
      expect(getByText('myTitle').props.children).toEqual('myTitle')
      expect(getByText('myCategory').props.children).toEqual('myCategory')
      expect(getByLabelText('myTitle').props.source).toBeTruthy()
  });
});
