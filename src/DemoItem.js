export default function DemoItem({ title, description }) {
  // console.log(props);
  return (
    <div class="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
