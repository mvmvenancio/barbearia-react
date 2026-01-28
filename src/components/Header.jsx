export default function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <h1>Barbearia da Hora</h1>

      <button
        className="theme-btn"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  )
}
