import { useState } from "react";

export function SettingTipSide({
  billAmount,
  numberPeople,
  tipPercentage,
  onBillAmountChange,
  onNumberPeopleChange,
  onPercentageChange,
}) {
  const imgFormBill = "images/icon-dollar.svg";
  const imgFormNpeople = "images/icon-person.svg";

  return (
    <div className="set-tips-box">
      <BillAmount
        imgLink={imgFormBill}
        billAmount={billAmount}
        onBillAmountChange={onBillAmountChange}
      >
        Bill
      </BillAmount>
      <TipsPercentage
        tipPercentage={tipPercentage}
        onPercentageChange={onPercentageChange}
      />
      <PeopleNumber
        imgLink={imgFormNpeople}
        numberPeople={numberPeople}
        onNumberPeopleChange={onNumberPeopleChange}
      >
        Number of People
      </PeopleNumber>
    </div>
  );
}

function BillAmount({ imgLink, children, billAmount, onBillAmountChange }) {
  function handleBillAmountChange(amount) {
    const amountFiltered = amount.replace(/[^\d.]/g, "");
    onBillAmountChange(amountFiltered);
  }

  return (
    <form className="form">
      <label id="field-name" htmlFor="amount">
        {children}
      </label>
      <div className="box-input-field">
        <object
          className="icon-dollar"
          title="icon-dollar"
          type="image/svg+xml"
          data={imgLink}
        ></object>
        <input
          id="amount"
          type="text"
          name="amount"
          autoComplete="off"
          value={billAmount}
          onChange={(e) => handleBillAmountChange(e.target.value)}
        ></input>
      </div>
    </form>
  );
}

function PeopleNumber({
  imgLink,
  children,
  numberPeople,
  onNumberPeopleChange,
}) {
  function handleNumberPeopleChange(amount) {
    const amountFiltered = amount.replace(/[^\d]/g, "");
    onNumberPeopleChange(amountFiltered);
  }

  return (
    <form className="form">
      <label id="field-name" htmlFor="amount">
        {children}
      </label>
      <div className="box-input-field">
        <object
          className="icon-dollar"
          title="icon-dollar"
          type="image/svg+xml"
          data={imgLink}
        ></object>
        <input
          id="amount"
          type="text"
          name="amount"
          autoComplete="off"
          value={numberPeople}
          onChange={(e) => handleNumberPeopleChange(e.target.value)}
        ></input>
      </div>
    </form>
  );
}

function TipsPercentage({ tipPercentage, onPercentageChange }) {
  const [customPercentage, setCustomPercentage] = useState("");
  const [chiaveGiu, setChiaveGiu] = useState("");
  const [chiave5, setChiave5] = useState(false);
  const [chiave10, setChiave10] = useState(false);
  const [chiave15, setChiave15] = useState(false);
  const [chiave25, setChiave25] = useState(false);
  const [chiave50, setChiave50] = useState(false);
  const [chiaveCustom, setChiaveCustom] = useState(false);

  function handleClear(e) {
    setChiave5(false);
    setChiave10(false);
    setChiave15(false);
    setChiave25(false);
    setChiave50(false);
    setChiaveCustom(false);
    if (!(e.target === document.querySelector(".box-tip-custom"))) {
      handleCustomPercentageOnChange("");
      setCustomPercentage("");
    }
  }

  function handleCustomPercentageOnChange(value) {
    if (chiaveGiu !== "Backspace") {
      setCustomPercentage(() => value.replace(/[^\d.]/g, "") + "%");
      onPercentageChange(() => value.replace("%", ""));
    } else {
      setCustomPercentage(value);
      onPercentageChange(() => value.replace(/[^\d.]/g, ""));
    }
  }

  function handleCustomPercentageKeyDown(chiave) {
    setChiaveGiu(chiave);
  }

  return (
    <div className="tips-containers">
      <div className="box-tip-title">Select Tip %</div>
      <PercentageChoice
        onPercentageChange={onPercentageChange}
        onChiaveToggled={setChiave5}
        chiaveClass={chiave5}
        sendKey={handleClear}
      >
        5%
      </PercentageChoice>
      <PercentageChoice
        onPercentageChange={onPercentageChange}
        onChiaveToggled={setChiave10}
        chiaveClass={chiave10}
        sendKey={handleClear}
      >
        10%
      </PercentageChoice>
      <PercentageChoice
        onPercentageChange={onPercentageChange}
        onChiaveToggled={setChiave15}
        chiaveClass={chiave15}
        sendKey={handleClear}
      >
        15%
      </PercentageChoice>
      <PercentageChoice
        onPercentageChange={onPercentageChange}
        onChiaveToggled={setChiave25}
        chiaveClass={chiave25}
        sendKey={handleClear}
      >
        25%
      </PercentageChoice>
      <PercentageChoice
        onPercentageChange={onPercentageChange}
        onChiaveToggled={setChiave50}
        chiaveClass={chiave50}
        sendKey={handleClear}
      >
        50%
      </PercentageChoice>
      <input
        type="text"
        name="amount"
        autoComplete="off"
        className={`box-tip-custom ${chiaveCustom ? "active" : ""}`}
        placeholder="Custom"
        readOnly={!chiaveCustom}
        value={customPercentage}
        onChange={(e) => handleCustomPercentageOnChange(e.target.value)}
        onKeyDown={(e) => handleCustomPercentageKeyDown(e.key)}
        onClick={(e) => {
          handleCustomPercentageOnChange(e.target.value);
          handleClear(e);
          if (!chiaveCustom) setChiaveCustom(true);
          else {
            setChiaveCustom(false);
            onPercentageChange("");
            if (customPercentage === "%") {
              handleCustomPercentageOnChange("");
              setCustomPercentage("");
            }
          }
        }}
      ></input>
    </div>
  );
}

function PercentageChoice({
  children,
  chiaveClass,
  onPercentageChange,
  onChiaveToggled,
  sendKey,
}) {
  return (
    <div
      className={`box-tip-general ${chiaveClass ? "active" : ""}`}
      onClick={(e) => {
        sendKey(e);
        onPercentageChange([...children].join("").replace("%", ""));
        if (!chiaveClass) onChiaveToggled(true);
        else {
          onChiaveToggled(false);
          onPercentageChange("");
        }
      }}
    >
      {children}
    </div>
  );
}
