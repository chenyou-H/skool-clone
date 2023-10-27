import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AffiliateCardContainer } from "@/components/EntryRelatedPages/AffiliateCard";

jest.mock("next/image", () => {
  const MockedImage = ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: any;
  }) => {
    return <img src={src} alt={alt} {...props} />;
  };
  MockedImage.displayName = "MockedImage"; // Assign a display name
  return MockedImage;
});

describe("AffiliateCardContainer Component", () => {
  it("renders the component without an image", () => {
    const title = "Sample Title";
    const description = "Sample Description";

    render(<AffiliateCardContainer title={title} description={description} />);

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    const imageElement = screen.queryByRole("img");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeNull();
  });

  it("renders the component with an image", () => {
    const title = "Sample Title";
    const description = "Sample Description";
    const imgUrl = "sample-image.jpg";

    render(
      <AffiliateCardContainer
        title={title}
        description={description}
        imgUrl={imgUrl}
      />
    );

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    const imageElement = screen.getByAltText(title);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imgUrl);
  });
});
