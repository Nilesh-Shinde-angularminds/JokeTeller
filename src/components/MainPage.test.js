import React from "react";
import { shallow, mount } from "enzyme";
import MainPage from './MainPage'
// import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";

import {
  render,
  screen,
  cleanup,
  fireEvent, 
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

//default selected category(Any) check:
test("should checked checkbox onclick", () => {
  render(< MainPage/>);

  const category = screen.getByTestId("Any");
  const radioBtnCustom = screen.getByTestId("Custom");
  expect(category).toBeChecked();
  expect(category).toBeInTheDocument();
  expect(radioBtnCustom).not.toBeChecked();

});

// testing for checkbox testing after clicking custom radio
test('should checked checkbox onclick', () => {
  render(<MainPage />);
  const radioBtnCustom = screen.getByTestId('Custom')

  //click on custom jokes
  userEvent.click(radioBtnCustom)
  const checkboxProgramming = screen.getByTestId('Programming')

  //click on programming jokes
  userEvent.click(checkboxProgramming)

  //check if programming selected
  expect(checkboxProgramming).toBeChecked();

})


test("should disable checkboxes before selecting custom joke type", () => {
  render(<MainPage />);
  const radioBtnCustom = screen.getByTestId("Custom");
  const checkboxProgramming = screen.getByTestId("Programming");
  const misc = screen.getByTestId("Misc");
  const dark = screen.getByTestId("Dark");
  const pun = screen.getByTestId("Pun");
  const spooky = screen.getByTestId("Spok");
  const Christmas = screen.getByTestId("Chrismas");

  //check for disablity
  expect(checkboxProgramming).toBeDisabled();
  expect(misc).toBeDisabled();
  expect(dark).toBeDisabled();
  expect(pun).toBeDisabled();
  expect(spooky).toBeDisabled();
  expect(Christmas).toBeDisabled();

  //click on custom jokes
  userEvent.click(radioBtnCustom);

  //check for not disable
  expect(checkboxProgramming).not.toBeDisabled();
  expect(misc).not.toBeDisabled();
  expect(dark).not.toBeDisabled();
  expect(pun).not.toBeDisabled();
  expect(spooky).not.toBeDisabled();
  expect(Christmas).not.toBeDisabled();
});


test('default language should be english ', () => {
  render(<MainPage />)
  const languageDropdown = screen.getByTestId('Language')

  let options = screen.getAllByTestId('select-option')
  expect(options[0].selected).toBeTruthy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();
  expect(options[3].selected).toBeFalsy(); 
  expect(options[4].selected).toBeFalsy();
  expect(options[5].selected).toBeFalsy();
})

test('should language changed onclick', () => {
  render(<MainPage />)
  const languageDropdown = screen.getByTestId('Language')
//   const toNumber = screen.getByTestId('toNumber')
  //changeLanguage
  fireEvent.change(languageDropdown, { target: { value: 'fr' } })
  
  //check for language change
  let options = screen.getAllByTestId('select-option')
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeFalsy();
  expect(options[3].selected).toBeFalsy();
  expect(options[4].selected).toBeTruthy();
  expect(options[5].selected).toBeFalsy();

})


test("should toNumber change onchange of language", () => {
  render(<MainPage />);
  const languageDropdown = screen.getByTestId("Language");
  //changeLanguage
  fireEvent.change(languageDropdown, { target: { value: "fr" } });

  //check for language change
  let options = screen.getAllByTestId("select-option");

  expect(options[4].selected).toBeTruthy();

  const toNumber = screen.getByTestId("toNumber");

  waitFor(() => expect(toNumber.value).toBe("999"));
});





test("should text change", () => {
  render(<MainPage />);

  //joke amount
  const amountofJoke = screen.getByTestId("AmountofJoke");

  //change value of textField
  fireEvent.change(amountofJoke, { target: { value: "23" } });
  expect(amountofJoke.value).toBe("23");
});




test("joke type should work or not ", () => {
  render(<MainPage/>);

  //jokeType selector
  const jokeTypeDiv = screen.getByTestId("jokeTypeDiv");

  const single = screen.getByTestId("single");
  const twopart = screen.getByTestId("twopart");

  //click on selectors

  expect(single).toBeChecked()
  expect(twopart).toBeChecked()

  userEvent.click(single);
  userEvent.click(twopart);
  expect(single).not.toBeChecked();
  expect(twopart).not.toBeChecked();
    //   const style = window.getComputedStyle(jokeTypeDiv);
// console.log(style.border);
//   expect(style.borderColor).toBe("2px solid white");


});



//---------------------------url test-----------------
test('should url update',() => {
  render(<MainPage/>)
  const url = screen.getByTestId('url')
  expect(url.textContent).toBe("https://v2.jokeapi.dev/joke/Any")

//   //click on custom radio button
  const radioBtnCustom = screen.getByTestId('Custom')
  userEvent.click(radioBtnCustom)
  
  waitFor(()=>expect(url.textContent).toBe("https://v2.jokeapi.dev/joke/Custom")
  )
})






