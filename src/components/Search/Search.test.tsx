// test('Invalid entry in input results in serach error' ()=>{render(<Search parentSearchTerm="" setParentSearchTerm={()=>{}})}
// const input= screen.getByLabelText("Order Id")

import { render, screen } from "@testing-library/react";
import Search from "./Search";
import "@testing-library/jest-dom";

// )
test("check search initially has no class applied to id", () => {
  //given
  render(<Search parentSearchTerm="" setParentSearchTerm={() => {}} />);
  //when
  const input = screen.getByLabelText("Order Id:");
  //screen.debug
  //then
  expect(input).not.toHaveClass("searchBoxError");
});

//test("search data is correctly sent tp pare")
