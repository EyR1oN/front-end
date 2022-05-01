import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {createMemoryHistory} from 'history';
import User from "../User";

test("renders register page", () => {
  render(<BrowserRouter><User /></BrowserRouter>);
  const input_username = screen.getByTestId('input-username');
  fireEvent.change(input_username, {target: {value: 'user12'}})
  expect(input_username.value).toBe('user12');

  const input_password = screen.getByTestId('input-password');
  fireEvent.change(input_password, {target: {value: 'password12'}})
  expect(input_password.value).toBe('password12');

  const input_first_name = screen.getByTestId('input-first-name');
  fireEvent.change(input_first_name, {target: {value: 'user12FirstName'}})
  expect(input_first_name.value).toBe('user12FirstName');

  const input_last_name = screen.getByTestId('input-last-name');
  fireEvent.change(input_last_name, {target: {value: 'user12LastName'}})
  expect(input_last_name.value).toBe('user12LastName');

//   const submit = screen.getByTestId('submit-register');
//   fireEvent.click(submit);
  

});

// test("renders input password", () => {
//   const history = createMemoryHistory();
//   render(<Router history={history}><Register /></Router>);
//   const submit = screen.getByText('/Log/');
//   userEvent.click(submit)
//   expect(history.location.pathname).toEqual('/login');
  
// });

// test("renders input confirm password", () => {
//   render(<BrowserRouter><Register /></BrowserRouter>);
//   const input_confirm_password = screen.getByTestId('confirm-password');
  
//   fireEvent.change(input_confirm_password, {target: {value: 'password12'}})

//   expect(input_confirm_password.value).toBe('password12');
  
// });

// test("register user with data", () => {
//   render(<BrowserRouter><Register /></BrowserRouter>);
//   const input_username = screen.getByTestId('submit-register');
  
//   fireEvent.click(input_username)

//   expect(input_username).toBeChecked();
  
// });
