import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { TransactionContent } from "@/components/EntryRelatedPages/LegalComponents/contents";

test('renders the "Skool Transaction Terms" heading', () => {
  render(<TransactionContent />);
  const heading = screen.getByText("Skool Transaction Terms");
  expect(heading).toBeInTheDocument();
});
