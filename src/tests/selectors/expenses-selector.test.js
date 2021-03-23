import selectTotalExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should retirn 0 if no expenses", () => {
  const result = selectTotalExpenses([]);
  expect(result).toBe(0);
});

test("should correctly add up a single expense", () => {
  const result = selectTotalExpenses([expenses[0]]);
  expect(result).toEqual(195);
});

test("should correctly add up multiple expenses", () => {
  const result = selectTotalExpenses(expenses);
  expect(result).toEqual(114195);
});
