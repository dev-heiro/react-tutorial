function EventHandle() {
  const clickHandle = function (evt) {
    console.log(evt);
    window.alert("클릭버튼2");
  };

  return (
    <>
      <div>
        <button
          onClick={function (evt) {
            console.log(evt);
            window.alert("클릭");
          }}
        >
          버튼1
        </button>
        <button onClick={clickHandle}>버튼2</button>
      </div>
    </>
  );
}

export default EventHandle;
