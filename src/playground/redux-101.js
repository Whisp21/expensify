import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const countReset = () => ({
  type: "RESET"
})

const store = createStore((state = {count: 0}, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      }
      case "RESET":
      return {
        count: state.count = 0
      }
      default:
        return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(countReset());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(decrementCount());
