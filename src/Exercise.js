function LogonStatusBar() {
  return (
    <>
      <span>로그인중</span>
      <button>로그아웃</button>
    </>
  );
}

function LogoffStatusBar() {
  return (
    <>
      <button>회원가입</button>
      <button>로그인</button>
    </>
  );
}

function Exercise() {
  let logon = true;
  let numbers = [1, 2, 3, 4, 5];
  let components = [<h3 key="a">출력</h3>, <p key="b">테스트트</p>];
  let options = [];
  for (let i = 1; i <= 12; i++) {
    options.push(<option key={i}>{i}</option>);
  }

  let years = Array.from({ length: 75 }, function (_, idx) {
    return 1950 + idx;
  });

  years.map(function (elm) {
    return <option key={elm}>{elm}</option>;
  });

  return (
    <>
      <div>{logon ? <LogonStatusBar /> : <LogoffStatusBar />}</div>
      <h1>
        {true} {false} {null} {undefined}
      </h1>
      <hr />

      <div>{components}</div>
      <div>
        <select>
          {years.map(function (elm) {
            return <option key={elm}>{elm}</option>;
          })}
        </select>
      </div>
      <div>
        <select>{options}</select>
      </div>
    </>
  );
}

export default Exercise;
