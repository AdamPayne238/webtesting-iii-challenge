// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

// Test away!

import React from "react";

import {render, fireEvent } from "@testing-library/react";

import Display from "../display/Display";

test("Display renders correctly", () => {
    expect(render(<Display />)).toMatchSnapshot();
});