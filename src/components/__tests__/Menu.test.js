import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import RestaurantDetail from "../RestaurantDetail";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Update Cart on add items to cart", async () => {
  //Load header
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantDetail />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const search = body.getByTestId("cart");
  expect(search.innerHTML).toBe("Cart - 2")


});
