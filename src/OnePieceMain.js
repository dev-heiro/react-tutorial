import OnePieceMember from "./OnePieceMember";


export default function OnePieceMain() {
    const members = [
        {
            "name": "몽키 D. 루피",
            "role": "선장",
            "emoji": "🧢",
            "desc": "해적왕을 꿈꾸는 고무고무 열매 능력자."
        },
        {
            "name": "로로노아 조로",
            "role": "검사",
            "emoji": "⚔️",
            "desc": "삼도류 사용자. 최고의 검사가 목표."
        },
        {
            "name": "나미",
            "role": "항해사",
            "emoji": "🧭",
            "desc": "뛰어난 항해 실력과 날씨 조작 능력."
        },
        {
            "name": "우솝",
            "role": "저격수",
            "emoji": "🎯",
            "desc": "거짓말쟁이지만 용감한 저격왕을 꿈꿈."
        },
        {
            "name": "상디",
            "role": "요리사",
            "emoji": "🍳",
            "desc": "발차기 고수. 올블루를 찾는 요리사."
        },
        {
            "name": "토니토니 쵸파",
            "role": "의사",
            "emoji": "🦌",
            "desc": "사람사람 열매를 먹은 루미너리 사슴."
        },
        {
            "name": "니코 로빈",
            "role": "고고학자",
            "emoji": "📜",
            "desc": "고대 문자를 해독하고 역사를 밝히는 학자."
        },
        {
            "name": "프랑키",
            "role": "조선공",
            "emoji": "🔧",
            "desc": "사이보그. 서니호를 만든 천재 설계자."
        },
        {
            "name": "브룩",
            "role": "음악가",
            "emoji": "🎸",
            "desc": "영혼이 돌아온 해골. 소울 킹."
        },
        {
            "name": "징베",
            "role": "조타수",
            "emoji": "🌊",
            "desc": "어인족 전사. 해류를 읽는 항해 전문가."
        }
    ];

    return (<main className="container">
        {
            members.map(function (one) {
                return (
                    <OnePieceMember name={one.name}
                        emoji={one.emoji} role={one.role}
                        desc={one.desc}
                    />
                );
            })
        }
    </main>);

}