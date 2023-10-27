import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Navigator } from "@/components/EntryRelatedPages/LegalComponents";

describe("Navigator Component", () => {
  it("should render the component", () => {
    const { container } = render(<Navigator />);
    expect(container).toBeInTheDocument();
  });

  it("should render the logo link", () => {
    const { getByTestId } = render(<Navigator />);
    const logoLink = getByTestId("logo");
    expect(logoLink).toBeInTheDocument();
  });

  it("should render the Sign up and Log in links with buttons", () => {
    const { getByTestId } = render(<Navigator />);
    const signupLink = getByTestId("link-signup");
    const loginLink = getByTestId("link-login");

    expect(signupLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(signupLink).toHaveTextContent("Sign up");
    expect(loginLink).toHaveTextContent("Log in");
  });
});
