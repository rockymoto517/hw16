import carReducer from "../slices/CarSlice";
import { useState } from "react";

const store = myCreateStore(carReducer);

function myCreateStore(reducer, preloadedState /*, enhancer */) {
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

// Return the dispatch function
export function myUseDispatch() {
  return store.dispatch;
}

export function myUseSelector(selector /*, options */) {
  // Force a render by updating an unused ref
  // Pretty hacky solution
  //
  // Also will cause multiple renders if selector
  // is created multiple times in same component
  //
  // There's definitely a better way...
  const [, render] = useState();
  store.subscribe(() => {
    render({});
  });

  return selector(store.state);
}

export default store;
