export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      {...props}
    />
  );
}