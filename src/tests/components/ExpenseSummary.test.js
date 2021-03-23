import React from "react";
import { shallow } from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test("should render ExpenseSummary with one expense", () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={100}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expenses", () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={150} expensesTotal={2350} />);
  expect(wrapper).toMatchSnapshot();
});
