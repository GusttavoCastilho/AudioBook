import React from "react";

import { renderWithTheme } from "@utils/helper";

import { Button } from ".";

describe("<Button />", () => {
  it("should render a label", () => {
    const { getByText } = renderWithTheme(<Button label="myButton" />);
    const buttonElement = getByText("myButton");
    expect(buttonElement.props.children).toEqual("myButton");
  });

  it("should render a fullWidth props if passed", () => {
    const { getByA11yRole } = renderWithTheme(
      <Button label="myButton" fullWidth accessibilityRole="button" />
    );
    const element = getByA11yRole("button");
    expect(element.props.style).toHaveProperty("width", "100%");
  });

  it("should render a version minimal props if passed", () => {
    const { getByA11yRole } = renderWithTheme(
      <Button label="myButton" minimal accessibilityRole="button" />
    );
    const element = getByA11yRole("button");
    expect(element.props.style).toHaveProperty(
      "backgroundColor",
      "transparent"
    );
    expect(element.props.style).toHaveProperty("color", "#4838D1");
  });

  it("should render a version border props if passed", () => {
    const { getByA11yRole } = renderWithTheme(
      <Button label="myButton" border accessibilityRole="button" />
    );
    const element = getByA11yRole("button");
    expect(element.props.style).toHaveProperty(
      "backgroundColor",
      "transparent"
    );
    expect(element.props.style).toHaveProperty("borderWidth", 1);
    expect(element.props.style).toHaveProperty("borderStyle", "solid");
    expect(element.props.style).toHaveProperty("borderColor", "#4838D1");
  });
});
