import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AffiliateBenefits } from "@/components/EntryRelatedPages/AffiliateCard";

describe("AffiliateBenefits Component", () => {
  it("should render the component", () => {
    const { container } = render(<AffiliateBenefits />);
    expect(container).toBeInTheDocument();
  });

  it("should render the benefits", () => {
    const { getByText } = render(<AffiliateBenefits />);
    const benefit1 = getByText("💰 Your group earns money automatically");

    expect(benefit1).toBeInTheDocument();
  });
});
