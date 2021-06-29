import React from "react";
import { Provider } from "react-redux";
import Routes from "./routers";
import { GlobalStyle } from "./global-style";
import { store } from "./store";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <GlobalStyle />
        <Routes />
      </HelmetProvider>
    </Provider>
  );
};

export default App;
