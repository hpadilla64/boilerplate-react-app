import React from "react";
import ReactDOM from "react-dom";
import App from "../src/App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  global.document.getElementById = id => id === "app-container" && div;
  expect(ReactDOM.render).toMatchSnapshot();
});
