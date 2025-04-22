import DemoItem from "./DemoItem";

export default function DemoMain() {

    const language = {
        "title": "C",
        "description": "시스템 프로그래밍의 기초. 운영체제와 임베디드 시스템에 활용"
    };

    const datas = [
        { title: "R", description: "통계, 데이터분석, 시각화 특화 언어. 연구 분야에서 자주 쓰임" },
        { title: "Swift", description: "Apple 생태계(IOS/macOS) 개발용 언어. " }
    ];

    const demoItems = [];
    for (let obj of datas) {
        demoItems.push(<DemoItem title={obj.title} description={obj.description} />);
    };

    const demoItems3 = [];
    datas.forEach(function (obj) {
        demoItems3.push(<DemoItem title={obj.title} description={obj.description} />);
    });

    const demoItems2 = datas.map(function (obj) {
        return <DemoItem title={obj.title} description={obj.description} />;
    });

    const GO = 'Kotlin'
    return (
        <main className="container">
            <h2>대표적인 언어와 그 특징</h2>
            <div className="card-list">
                <DemoItem title={datas[0].title} description={datas[0].description} />
                {demoItems}
                {demoItems2}
                {demoItems3}
                <DemoItem title="javascript" description="웹 프론트엔드의 표준 언어. 동적 UI와 브라우저 제어에 강함." />
                <DemoItem title="python" />
                <DemoItem description="안정성과 확장성에 강한 객체지향 언어. 백엔드, 안드로이드 등에서 활약." />
                <DemoItem title="language.title" description="language.description" />
                <DemoItem title="{language.title}" description="{language.description}" />
                <DemoItem title={language.title} description={language.description} />
                <DemoItem title={'GO'} />
                <DemoItem title={GO} />
            </div>
        </main>
    );
}