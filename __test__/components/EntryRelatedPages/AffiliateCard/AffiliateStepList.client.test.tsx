import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AffiliateStepList } from "@/components/EntryRelatedPages/AffiliateCard";

describe("AffiliateStepList Component", () => {
  it("should render the component", () => {
    const { container } = render(<AffiliateStepList />);
    expect(container).toBeInTheDocument();
  });

  it("should render all steps", () => {
    const { getAllByTestId, getByText } = render(<AffiliateStepList />);

    const step1 = getByText("1. Share your link");

    expect(step1).toBeInTheDocument();
  });

  it("should have images for all steps", () => {
    const { getAllByRole } = render(<AffiliateStepList />);
    const stepImages = getAllByRole("img");

    // Check if the correct number of step images is rendered
    expect(stepImages).toHaveLength(3);
  });
});
