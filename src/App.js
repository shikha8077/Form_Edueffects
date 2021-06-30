import React from "react";
import "./App.css";
import BasicForm from "./Formcomponents_1/Formcomponents";
import FromDisp from "./FormComponent_2/Formdisplay";
import Product from "./Productcomponnets/MainComponents";
import MainCom from "./StudentForm/MainCom";
import MailComponents from "./RadioCheckBoxForm/MailComponents";

function App() {
  return (
    <div className="App">
      <h2> hello Shikha</h2>
      {/* <BasicForm /> */}
      {/* <FromDisp /> */}
      {/* <Product /> */}
      {/* <MainCom /> */}
      <MailComponents />
    </div>
  );
}

export default App;
