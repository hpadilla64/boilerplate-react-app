import React from "react";
import ReactDOM from "react-dom";
import esEs from "antd/lib/locale-provider/es_ES";
import { LocaleProvider } from "antd";
import { Provider } from "react-redux";
import "moment/locale/es";
import store from "./stores";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={esEs}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </LocaleProvider>
  </Provider>,
  document.getElementById("app-container")
);

registerServiceWorker();
