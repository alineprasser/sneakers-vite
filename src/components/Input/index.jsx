import "./styles.scss";

export default function Input({
  label,
  onChange = () => {},
  onBlur = () => {},
  value,
  type = "text",
}) {
  return (
    <div className="default-input">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
