import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SingleTab from "@/components/EntryRelatedPages/LegalComponents/SideTabs/SingleTab";

describe("SingleTab Component", () => {
  it("should render the component with the provided tab text", () => {
    const { getByText } = render(
      <SingleTab
        url="/example-url"
        tab="Example Tab"
        btnSelected={0}
        index={0}
        handleClickButton={() => {}}
      />
    );

    const tabElement = getByText("Example Tab");
    expect(tabElement).toBeInTheDocument();
  });

  it("should apply selected styles when btnSelected matches the index", () => {
    const { container } = render(
      <SingleTab
        url="/example-url"
        tab="Example Tab"
        btnSelected={1}
        index={1}
        handleClickButton={() => {}}
      />
    );

    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveClass("selected");
  });

  it("should call the handleClickButton function when the button is clicked", () => {
    const handleClickButtonMock = jest.fn();
    const { getByText } = render(
      <SingleTab
        url="/example-url"
        tab="Example Tab"
        btnSelected={0}
        index={0}
        handleClickButton={handleClickButtonMock}
      />
    );

    const tabElement = getByText("Example Tab");
    fireEvent.click(tabElement);

    expect(handleClickButtonMock).toHaveBeenCalledWith(0);
  });
});
