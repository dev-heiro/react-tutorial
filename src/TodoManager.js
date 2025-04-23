import { useState } from "react";

function TodoManager() {
  const [todos, setTodos] = useState([]);

  setTimeout(function () {
    // setTodos(["체력 비축을 위해 휴식하기"]);
  }, 3000);

  function keyDownHandle(evt) {
    if (evt.key === "Enter") {
      // window.alert(evt.target.value);
      console.log(todos);
      todos.push(evt.target.value);
      console.log(todos);

      evt.target.value = "";

      setTodos([...todos]);
    }
  }

  return (
    <>
      <div>
        해야할일 <input type="text" onKeyDown={keyDownHandle} />
      </div>
      <ul>
        {todos.map(function (elm, idx) {
          return <li key={idx}>{elm}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoManager;
