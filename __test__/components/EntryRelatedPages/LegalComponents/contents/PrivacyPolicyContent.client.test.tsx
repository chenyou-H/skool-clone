import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PrivacyPolicyContent } from "@/components/EntryRelatedPages/LegalComponents/contents";

test("renders Privacy Policy heading", () => {
  const { getByText } = render(<PrivacyPolicyContent />);
  const heading = getByText("Skool Privacy Policy");
  expect(heading).toBeInTheDocument();
});
