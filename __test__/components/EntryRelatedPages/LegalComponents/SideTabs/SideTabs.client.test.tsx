import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SideTabs } from "@/components/EntryRelatedPages/LegalComponents/SideTabs";

describe("SideTabs Component", () => {
  it("should render the component with tab items", () => {
    const { getByText } = render(
      <SideTabs btnSelected={0} handleClickButton={() => {}} />
    );

    // Check if all tab items are rendered
    expect(getByText("Skool rules")).toBeInTheDocument();
    expect(getByText("Privacy policy")).toBeInTheDocument();
    expect(getByText("Terms and conditions")).toBeInTheDocument();
    expect(getByText("Cookie policy")).toBeInTheDocument();
    expect(getByText("Transaction terms")).toBeInTheDocument();
    expect(getByText("Acceptable use")).toBeInTheDocument();
  });

  it("should call the handleClickButton function when a tab is clicked", () => {
    const handleClickButtonMock = jest.fn();
    const { getByText } = render(
      <SideTabs btnSelected={0} handleClickButton={handleClickButtonMock} />
    );

    // Click a tab
    fireEvent.click(getByText("Privacy policy"));

    // Check if the handleClickButton function was called with the correct index
    expect(handleClickButtonMock).toHaveBeenCalledWith(1);
  });

  it("should apply selected styles to the selected tab", () => {
    const { container } = render(
      <SideTabs btnSelected={2} handleClickButton={() => {}} />
    );

    // Find the selected tab's button element
    const selectedTabButton = container.querySelector(".selected");

    // Check if the selected tab has the "selected" class
    expect(selectedTabButton).toBeInTheDocument();
  });
});
