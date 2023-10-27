import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CookieContent } from "@/components/EntryRelatedPages/LegalComponents/contents";

describe("CookieContent Component", () => {
  it("should render the component with content", () => {
    const { getByText } = render(<CookieContent />);

    // Check if key elements and content are present in the component
    expect(getByText("SKOOL.COM, INC COOKIE POLICY")).toBeInTheDocument();
  });

  it("should render links with correct hrefs", () => {
    const { getByText } = render(<CookieContent />);

    // Check if links are present with the correct hrefs
    expect(getByText("Skool.com")).toHaveAttribute("href", "/");
    expect(getByText("Amazon Web Services")).toHaveAttribute(
      "href",
      "https://aws.amazon.com/legal/cookies/"
    );
    expect(getByText("Vimeo")).toHaveAttribute(
      "href",
      "https://vimeo.com/cookie_policy"
    );
    expect(getByText("YouTube (Google)")).toHaveAttribute(
      "href",
      "https://policies.google.com/technologies/cookies?hl=en"
    );
    expect(getByText("Loom")).toHaveAttribute(
      "href",
      "https://www.loom.com/privacy-policy"
    );
    expect(getByText("Wistia")).toHaveAttribute(
      "href",
      "https://wistia.com/privacy#b-information-collected-automatically"
    );
    expect(getByText("aboutads.info")).toHaveAttribute(
      "href",
      "https://optout.aboutads.info/?c=2&lang=EN"
    );
    expect(getByText("Your Online Choices.")).toHaveAttribute(
      "href",
      "https://www.youronlinechoices.com/uk/your-ad-choices"
    );
  });
});
