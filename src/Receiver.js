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
      // evt.preventDefault();
    }
  };

  return (
    <div className="receiver-container">
      {address.map((elm, idx) => {
        return (
          <ReceiverItem
            value={elm}
            key={idx}
            address={address}
            setAddress={setAddress}
          />
        );
      })}
      <input className="receiver-input" onKeyDown={keyDownHandle} />
    </div>
  );
}

export default Receiver;
