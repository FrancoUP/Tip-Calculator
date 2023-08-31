import { useState } from "react";
import { SettingTipSide } from "./SettingTipSide";
import { RenderingTipAmount } from "./RenderingTipAmount";

export default function App() {
  return (
    <main className="main-box">
      <Title />
      <ApplicationWindow />
    </main>
  );
}

function Title() {
  return (
    <div className="title">
      <object
        className="icon-logo"
        title="logo"
        type="image/svg+xml"
        data="images/logo.svg"
      ></object>
    </div>
  );
}

function ApplicationWindow() {
  const [billAmount, setBillAmount] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  return (
    <div className="main-functionality-box">
      <SettingTipSide
        billAmount={billAmount}
        numberPeople={numberPeople}
        tipPercentage={tipPercentage}
        onBillAmountChange={setBillAmount}
        onNumberPeopleChange={setNumberPeople}
        onPercentageChange={setTipPercentage}
      />
      <RenderingTipAmount
        billAmount={billAmount}
        numberPeople={numberPeople}
        tipPercentage={tipPercentage}
        onBillAmountChange={setBillAmount}
        onNumberPeopleChange={setNumberPeople}
      />
    </div>
  );
}
