import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { EntryRelatedPageDescription } from "@/components/EntryRelatedPages/shared";

describe("EntryRelatedPageDescription Component", () => {
  it("renders children as content", () => {
    const descriptionText = "This is the description text";

    render(
      <EntryRelatedPageDescription>
        {descriptionText}
      </EntryRelatedPageDescription>
    );

    // Assert that the description text is rendered
    const descriptionElement = screen.getByText(descriptionText);
    expect(descriptionElement).toBeInTheDocument();
  });
});
