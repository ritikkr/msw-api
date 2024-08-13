import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect }from "vitest";
import App from "./App"
import userEvent from "@testing-library/user-event";
import handleOtherMethod from "./utils/helper";

test("test handling", () => {
    render(<App />)
    const ele = screen.getByRole("heading");
    expect(ele).toBeInTheDocument()
})

test("mock api testing", async () => {
    render(<App />)
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2)
})
