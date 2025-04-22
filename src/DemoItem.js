export default function DemoItem({ title, description }) {
    // console.log(props);
    return (
        <div class="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}