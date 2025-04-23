function randomTitle() {
  const titles = ["프로그래밍 언어 소개", "프로그래밍 언어 종류"];
  const pick = titles[Math.floor(Math.random() * 2)];
  return pick;
}

export default function DemoHeader() {
  const title = randomTitle();

  return (
    <header class="site-header">
      <div class="inner">
        <h1>🌐 {title}</h1>
      </div>
    </header>
  );
}
