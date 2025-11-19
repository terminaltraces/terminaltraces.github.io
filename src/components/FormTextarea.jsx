export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder = '',
  rows = 5,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-galaxy-500 focus:border-transparent resize-none"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}
