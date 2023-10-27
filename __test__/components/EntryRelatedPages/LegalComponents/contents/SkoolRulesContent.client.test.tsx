import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SkoolRulesContent } from "@/components/EntryRelatedPages/LegalComponents/contents";

test('renders the "Skool rules" heading', () => {
  render(<SkoolRulesContent />);
  const heading = screen.getByText("Skool rules");
  expect(heading).toBeInTheDocument();
});
