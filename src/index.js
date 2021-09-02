import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/hookChange";

ReactDOM.render(
  // 두번씩 호출하면서 엄격히 검사함
  // 실제 배포할때는 두번씩 안됨
  <React.StrictMode>
    <App />
    {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
