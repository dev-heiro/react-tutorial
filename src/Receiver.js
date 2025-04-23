import { useState } from "react";
import "./Receiver.css";
import ReceiverItem from "./ReceiverItem";

function Receiver() {
  const [address, setAddress] = useState(["master"]);

  const keyDownHandle = function (evt) {
    if (evt.key === "Enter" || evt.key === " " || evt.key === "Tab") {
      if (!evt.target.value) {
        return;
      }
      if (address.includes(evt.target.value)) {
        return;
      }
      setAddress([...address, evt.target.value]);
      evt.target.value = "";
      evt.preventDefault();
    }
  };

  const clickHandle = function (evt) {
    // console.log(evt.target.value);
    const newAddress = [];
    for (let i = 0; i < address.length; i++) {
      if (address[i] !== evt.target.value) {
        newAddress.push(address[i]);
      }
    }
    console.log(newAddress);
    setAddress(newAddress);
  };

  return (
    <div className="receiver-container">
      {address.map((elm, idx) => {
        return <ReceiverItem />;
      })}
      <input className="receiver-input" onKeyDown={keyDownHandle} />
    </div>
  );
}

export default Receiver;
