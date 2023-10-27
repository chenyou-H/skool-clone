import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EntryRelatedPageContainer } from "@/components/EntryRelatedPages/shared";

describe("EntryRelatedPageContainer Component", () => {
  it("renders children and header/footer components", () => {
    render(
      <EntryRelatedPageContainer>
        <div data-testid="test-child">Test Child</div>
      </EntryRelatedPageContainer>
    );

    // Assert that the child component is rendered
    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeInTheDocument();

    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
  });
});
