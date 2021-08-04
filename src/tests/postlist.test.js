import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostList from "../components/postfile";
import { rest } from "msw";
import { setupServer } from "msw/node";
import axios from "axios";

//Urvashi
const server = setupServer(
  rest.get("https://fakestoreapi.com/products", async (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: "product 1", description: 'product 1 description"' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("67902700", () => {
  test("loads and displays greeting", async () => {
    let { container } = render(<PostList />);
    // await screen.findByText("asas");
    await waitForElementToBeRemoved(() =>
      container.querySelector("div.loading")
    );
    // screen.debug();
    console.log(container.querySelectorAll(".card")[0].textContent);
    expect(container.querySelectorAll(".card").length).toBe(1);
  });
});

test("test postlist using msw mock", async () => {
  const { getByTestId, container, debug } = render(<PostList />);
  // expect(container.querySelectorAll(".card").length).toBe(2);
  await waitFor(() => {
    expect(container.querySelectorAll(".card").length).toBe(1);
  });
});

//mock axios
test("render postlst", async () => {
  axios.get = jest.fn();
  axios.get.mockResolvedValue({
    data: [{ id: "post1", title: "My First Post", description: "Description" }],
  });
  const { container, debug } = render(<PostList />);
  // console.log(debug());

  await waitFor(() => {
    expect(container.querySelectorAll(".card").length).toBe(1);
  });
});

// test("render postlst", async () => {
//   // const server = setupServer(
//   //   rest.get("https://fakestoreapi.com/products", async (req, res, ctx) => {
//   //     return res(ctx.json([{ id: 1, title: "asas", description: 'asasa"' }]));
//   //   })
//   // );

//   // server.listen();

//   const { container, debug } = render(<PostList />);

//   await screen.findByText("asas");

//   // server.close();
// });
