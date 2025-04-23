export default function OnePieceMember({ emoji, role, desc, name }) {
  const doubleClickHandle = function (evt) {
    if (window.confirm(name + " 을/를 삭제하시겠습니까?")) {
    } else {
      window.alert("취소되었습니다.");
    }
  };

  return (
    <div className="crew-card" onDoubleClick={doubleClickHandle}>
      <div className="img-placeholder">{emoji}</div>
      <div className="info">
        <h2>
          {name} {role === "선장" && <small>리더</small>}
        </h2>
        <p>
          <strong>{role}</strong> – {desc}
        </p>
      </div>
    </div>
  );
}
