import React from "react";
import { shallow } from "enzyme";
import { AddCreatePage } from "../../components/AddCreatePage";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper;

beforeEach(() => {
   startAddExpense = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow(<AddCreatePage startAddExpense={startAddExpense} history={history}/>);
});

test("should render AddCreatePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});
