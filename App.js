import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";

const App = () => {
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
};

export default App;
