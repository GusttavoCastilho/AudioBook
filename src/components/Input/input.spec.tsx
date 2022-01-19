import React from "react";

import { renderWithTheme } from "@utils/helper";

import { Input } from ".";

describe("<Input />", () => {
  it("should render a placeholder text if passed", () => {
    const { getByPlaceholderText } = renderWithTheme(
      <Input placeholder="myInput" />
    );
    const element = getByPlaceholderText("myInput");
    expect(element.props.placeholder).toEqual("myInput");
  });
});
