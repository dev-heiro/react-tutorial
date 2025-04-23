import { useState } from "react";

function PriceCalculator({ perPrice }) {
  let [count, setCount] = useState(1);
  // let count = 1;
  return (
    <div>
      <h3>개당 가격 : {perPrice}</h3>
      <hr />
      주문수량 :{" "}
      <input
        type="number"
        defaultValue="1"
        step="1"
        min="1"
        onInput={function (evt) {
          if (evt.target.value > 10) {
            window.alert("선택 가능한 수량은 최대 10개입니다.");
            evt.target.value = 10;
          }
          setCount(evt.target.value);
        }}
      />
      <hr />
      결제금액 : {count * perPrice}
    </div>
  );
}

export default PriceCalculator;
