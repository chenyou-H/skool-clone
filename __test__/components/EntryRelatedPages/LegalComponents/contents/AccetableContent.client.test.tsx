import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AcceptableContent } from "@/components/EntryRelatedPages/LegalComponents/contents";

describe("AcceptableContent Component", () => {
  it("should render the component with content", () => {
    const { getByText } = render(<AcceptableContent />);

    // Check if key elements and content are present in the component
    expect(getByText("Acceptable use policy")).toBeInTheDocument();
  });

  it("should render email link", () => {
    const { getByText } = render(<AcceptableContent />);

    // Check if the email link is present with the correct href
    const emailLink = getByText("help@skoolclone.com");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:help@skoolclone.com");
  });
});
