import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";

test("renders login page", () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  const input_username = screen.getByTestId('username');
  fireEvent.change(input_username, {target: {value: 'user12'}})
  expect(input_username.value).toBe('user12');

  const input_password = screen.getByTestId('password');
  fireEvent.change(input_password, {target: {value: 'password12'}})
  expect(input_password.value).toBe('password12');

  const submit = screen.getByTestId('submit-login');
  fireEvent.click(submit);
  

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
