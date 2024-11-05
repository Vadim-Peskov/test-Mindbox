import { render, screen } from "@testing-library/react";
import { TodosTitle } from ".";

it('TodosTitle renders', () => {
  render(<TodosTitle text="test"/>)
  expect(screen.getByRole('heading')).toBeInTheDocument()
  expect(screen.getByText('test')).toBeInTheDocument()
})