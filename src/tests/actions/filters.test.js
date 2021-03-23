import moment from "moment";
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters";

test("should generate start date from set start date action object", () => {
  const setStart = setStartDate(moment(0));
  expect(setStart).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should generate end date from set end date action object", () => {
  const setEnd = setEndDate(moment(0));
  expect(setEnd).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});

test("should generate text from set text filter action object", () => {
  const text = "something";
  const setText = setTextFilter(text);
  expect(setText).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate text from set text filter object with default", () => {
  const setDefault = setTextFilter();
  expect(setDefault).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate action object for sort by amount", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" })
})

test("should generate action object for sort by date", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE"});
});
