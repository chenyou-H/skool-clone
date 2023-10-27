import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { TermsContent } from "@/components/EntryRelatedPages/LegalComponents/contents";

test('renders the "Skool Terms and Conditions" heading', () => {
  render(<TermsContent />);
  const heading = screen.getByText("Skool Terms and Conditions");
  expect(heading).toBeInTheDocument();
});
