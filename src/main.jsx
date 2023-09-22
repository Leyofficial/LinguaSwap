
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/rootReduce";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/*<React.StrictMode>*/}
        <App />
      {/*</React.StrictMode>*/}
    </BrowserRouter>
  </Provider>
);
