import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//REDUX
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducer/rootReducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
