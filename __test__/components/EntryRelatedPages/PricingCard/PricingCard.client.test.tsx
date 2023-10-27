import React from "react";
import { render, screen } from "@testing-library/react";
// import PricingCard from "./PricingCard";
import "@testing-library/jest-dom";
import { PricingCard } from "@/components/EntryRelatedPages/PricingCard";

describe("PricingCard Component", () => {
  it("renders the pricing card with correct content", () => {
    render(<PricingCard />);

    // Assert that the price is rendered correctly
    const priceElement = screen.getByText("$99/month");
    expect(priceElement).toBeInTheDocument();

    // Assert that each feature is rendered correctly
    const features = ["group", "features", "courses", "members"];
    features.forEach((featureText) => {
      const featureElement = screen.getByText(featureText);
      expect(featureElement).toBeInTheDocument();
    });

    // Assert that the button is rendered with the correct text
    const buttonElement = screen.getByText("START 14-DAY FREE TRIAL");
    expect(buttonElement).toBeInTheDocument();
  });
});
