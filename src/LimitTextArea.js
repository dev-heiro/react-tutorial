import { useState } from "react";

function LimitTextArea({ limit }) {
  let [len, setLen] = useState(0); // [상태를 저장 할 공간, 상태값을 바꿀 때 사용할 함수]
  let [text, setText] = useState("");
  console.log("LimitTextArea", len);

  const lengthCheck = function (evt) {
    // changeNum(evt.target.value.length);
    setText(evt.target.value);
    setLen(evt.target.value.length);

    if (evt.target.value.length >= limit) {
      window.alert(limit + "글자 이상은 입력불가!");
    }
  };

  return (
    <div>
      <h3>{limit}글자 제한 텍스트에어리어</h3>
      <textarea onInput={lengthCheck}></textarea>
      <hr />
      <span>
        {len} / {limit}
      </span>
      <span>{text}</span>
    </div>
  );
}

export default LimitTextArea;
