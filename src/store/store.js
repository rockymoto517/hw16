// import { createStore } from "redux";
import carReducer from "../slices/CarSlice";

// Deprecated; only used for demonstration purposes
const store = myCreateStore(carReducer);
console.log(store);

// So how does this work?
function myCreateStore(reducer, preloadedState, enhancer) {
  const clbkList = [];

  const store = {
    state: preloadedState,
  };

  store.getState = () => {
    return store.state;
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);
    clbkList.forEach((clbk) => clbk());
  };

  store.subscribe = (clbk) => {
    clbkList.push(clbk);

    // cleanup function (unsubscribe)
    return () => {
      clbkList = clbkList.filter((c) => c !== clbk);
    };
  };

  store.dispatch({ type: "@none@" });

  return store;
}

export default store;
