import "./styles.scss";

export default function Input({
  label,
  onChange = () => {},
  onBlur = () => {},
  value,
}) {
  return (
    <div className="default-input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
