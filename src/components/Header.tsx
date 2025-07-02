import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
        onClick={toggleTheme}
      >
        Toggle Theme ({theme})
      </button>
    </header>
  );
}