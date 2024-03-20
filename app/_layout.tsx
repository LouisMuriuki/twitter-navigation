import "../global.css";
import { Provider } from "react-redux";
import store from "../store/store";
import Main from "./main";

const _layout = () => {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  );
};

export default _layout;
