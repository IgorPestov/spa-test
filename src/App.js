import React from "react";
import MainPage from "./component/mainPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Provider store={store}>
        <MainPage />
    </Provider>

  );
}

export default App;
