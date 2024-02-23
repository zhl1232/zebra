import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ButtonList from "./ButtonList";
import { scienceArray } from "../../zebrAPI.js";
import { animalListItem } from "../../../declarations/animalListItem.js";

// Mock the Link component from react-router-dom
jest.mock("react-router-dom", () => ({
  Link: jest.fn(({ to, children }) => <a href={to}>{children}</a>),
  useNavigate: jest.fn(),
}));

describe("ButtonList Component", () => {
  const mockList: animalListItem[] = [...scienceArray];

  it("renders the ButtonList component with the provided list and category", () => {
    render(
      <MemoryRouter>
        <ButtonList category="science" list={mockList} />
      </MemoryRouter>
    );

    // Check if the Header is rendered with the correct category
    expect(screen.getByText("science")).toBeInTheDocument();

    // Check if buttons (Links) are rendered for each item in the list
    mockList.forEach((animal) => {
      const link = screen.getByText(animal.name.en.text);
      expect(link).toBeInTheDocument();
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", `/path-to/${animal.id}`); // Replace with your actual route structure
    });
  });
});
