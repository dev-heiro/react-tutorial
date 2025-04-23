export default function OnePieceMember({ emoji, role, desc, name }) {
    return (
        <div className="crew-card">
            <div className="img-placeholder">{emoji}</div>
            <div className="info">

                <h2>{name}</h2>
                <p><strong>{role}</strong> – {desc}</p>

            </div>
        </div>
    );
}