import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { EntryRelatedPageTitle } from "@/components/EntryRelatedPages/shared";

describe("EntryRelatedPageTitle Component", () => {
  it("renders children as title", () => {
    const titleText = "This is the title text";

    render(<EntryRelatedPageTitle>{titleText}</EntryRelatedPageTitle>);

    // Assert that the title text is rendered
    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });

  it("applies 'subtitle' variant styles", () => {
    const subtitleText = "Subtitle Text";

    render(
      <EntryRelatedPageTitle variant="subtitle">
        {subtitleText}
      </EntryRelatedPageTitle>
    );

    // Assert that the subtitle text is rendered
    const subtitleElement = screen.getByText(subtitleText);

    // Assert that the 'subtitle' variant style is applied
    expect(subtitleElement).toHaveStyle("font-size: 35px");
  });
});
