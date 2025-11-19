export default function FormStatusMessage({ type, message }) {
  if (!message) return null;

  const styles = {
    success: 'bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200',
    error: 'bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200',
  };

  return (
    <div className={`p-4 rounded-lg border ${styles[type]}`}>
      {message}
    </div>
  );
}
