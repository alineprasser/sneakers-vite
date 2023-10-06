import "./styles.scss";

export default function Input({ label }) {
  return (
    <div className="default-input">
      <label>{label}</label>
      <input type="text" />
    </div>
  );
}
