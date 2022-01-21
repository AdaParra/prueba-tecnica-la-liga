import React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Login from "./Login";

describe("Login.tsx", () => {
  let history;

  beforeAll(() => {
    history = createMemoryHistory();
  });

  test("shows the title correctly", () => {
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );

    const loginTitle = getByText(/Proyecto LaLiga/);
    expect(loginTitle).toBeInTheDocument();
  });

  test("shows the email input correctly", () => {
    const { getByLabelText } = render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );

    const emailInput = getByLabelText("email");
    expect(emailInput).toHaveAttribute("placeholder", "Email");
    expect(emailInput).toHaveAttribute("type", "email");
  });

  test("shows the password input correctly", () => {
    const { getByLabelText } = render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );

    const passwordInput = getByLabelText("password");
    expect(passwordInput).toHaveAttribute("placeholder", "Contraseña");
  });

  test("shows the submit button correctly", () => {
    const { getByRole } = render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>
    );

    const submitButton = getByRole("button");
    expect(submitButton).toHaveTextContent("Iniciar Sesión");
  });
});
