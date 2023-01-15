import "./Box.css";
export default function Box({ value, show, onClick }) {
  return (
    <button className="box" onClick={onClick}>
      {show ? <img src={value.image} alt={value.name} /> : ""}
    </button>
  );
}
