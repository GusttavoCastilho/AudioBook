import React from "react";
import { renderWithTheme } from "@utils/helper";

import { Category } from ".";

describe("<Category />", () => {
  it("should render a title category", () => {
    const { getByText } = renderWithTheme(<Category category="myCategory" />);
    const element = getByText("myCategory");
    expect(element.props.children).toBeTruthy();
  });

  it("should render a active props if passed", () => {
    const { getByTestId } = renderWithTheme(
      <Category category="myCategory" active testID="category" />
    );
    const element = getByTestId("category");
    expect(element.props.style).toHaveProperty("backgroundColor", "#BBB1FA");
  });
});
