import { useState } from "react";

function ReceiverItem({ value, address, setAddress }) {
  const clickHandle = function (evt) {
    console.log(evt.target.value);
    const newAddress = [];
    for (let i = 0; i < address.length; i++) {
      if (address[i] !== evt.target.value) {
        newAddress.push(address[i]);
      }
    }
    setAddress(newAddress);
  };

  return (
    <div className="receiver-item">
      <span>{value}</span>
      <button onClick={clickHandle} value={value}>
        X
      </button>
    </div>
  );
}

export default ReceiverItem;
