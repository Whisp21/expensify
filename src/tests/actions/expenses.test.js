import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { addExpense, startAddExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "testuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test("should setup remove expense action object", () => {
  const remove = removeExpense({ id: "123abc" });
  expect(remove).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const edit = editExpense("asdf", { Note: "New note" });
  expect(edit).toEqual({
    type: "EDIT_EXPENSE",
    id: "asdf",
    updates: {
      Note: "New note"
    }
  });
});

test("should setup add expense with provided values", () => {
  const expenseData = (expenses[2]);
  const addData = addExpense(expenseData);
  expect(addData).toEqual({
    type: "ADD_EXPENSE",
    expense: (expenses[2])
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "Necklace",
    amount: 70,
    note: "Chain necklace",
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test("should add expense with defaults to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
  const defaultData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...defaultData
      }
    });
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultData);
    done();
  });
});

test("should setup set expenses action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
  });
  done();
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once("value");
  }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
  });
});

test("should update expense on firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates = { amount: 800 };
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done();
  });
});
