import { useState } from "react";

export function RenderingTipAmount({
  billAmount,
  numberPeople,
  tipPercentage,
}) {
  // console.log("billAmount : " + billAmount);
  // console.log("numberPeople : " + numberPeople);
  // console.log("tipPercentage : " + tipPercentage);
  // console.log("--------------------------------");

  const tipPerPerson = (
    (Number(billAmount) * Number(tipPercentage.replace("%", ""))) /
    100 /
    Number(numberPeople)
  ).toFixed(2);

  const billPerPerson = (
    Number(billAmount) / Number(numberPeople) +
    Number(tipPerPerson)
  ).toFixed(2);

  return (
    <div className="render-tips-box">
      <div className="container-amounts">
        <TipAmount amountTip={tipPerPerson}>Tip Amount</TipAmount>
        <BillAmount billPerPerson={billPerPerson}>Total</BillAmount>
      </div>
      <button className="btn-reset" onClick={() => window.location.reload()}>
        RESET
      </button>
    </div>
  );
}

function TipAmount({ amountTip, children }) {
  // console.log("amountTip : " + amountTip);
  // // console.log(!!amountTip);
  // console.log(amountTip === "NaN");
  // console.log("type : " + typeof amountTip);

  // console.log("amountTip : " + amountTip);
  // console.log(!!amountBill);
  // console.log(amountTip === "Infinity");
  return (
    <div className="box-info-amount">
      <div>
        <div className="title-amount">{children}</div>
        <div className="person">/ person</div>
      </div>
      <div id="amount-person">
        {amountTip >= 0 && amountTip !== "Infinity" ? "$" + amountTip : ""}
      </div>
    </div>
  );
}

function BillAmount({ billPerPerson, children }) {
  // console.log("billPerPerson : " + billPerPerson);
  // // console.log(!!amountBill);
  // console.log(billPerPerson === "Infinity");
  // console.log("type : " + typeof billPerPerson);
  return (
    <div className="box-info-amount">
      <div>
        <div className="title-amount">{children}</div>
        <div className="person">/ person</div>
      </div>
      <div id="amount-person">
        {billPerPerson >= 0 && billPerPerson !== "Infinity"
          ? "$" + billPerPerson
          : ""}
      </div>
    </div>
  );
}
