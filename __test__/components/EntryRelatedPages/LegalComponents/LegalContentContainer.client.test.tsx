import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { LegalContentContainer } from "@/components/EntryRelatedPages/LegalComponents";

describe("LegalContentContainer Component", () => {
  it("should render the component", () => {
    const { container } = render(<LegalContentContainer />);
    expect(container).toBeInTheDocument();
  });
});
