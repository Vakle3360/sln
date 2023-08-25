import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createHashRouter, HashRouter, RouterProvider, Routes, Route } from "react-router-dom";
import Apollo from "./pages/apollo";
import NoPage from "./pages/pageNotExist";

const router = createHashRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/apollo05",
    element: <Apollo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
          <Route index element={<App/>}/>
          <Route path="/home" element={<App/>}/>
          <Route path="/apollo05" element={<Apollo/>}/>
          <Route path="*" element={<NoPage/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
