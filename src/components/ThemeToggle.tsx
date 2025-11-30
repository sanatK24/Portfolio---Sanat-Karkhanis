import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: '0.5rem',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--text-color)',
                color: 'var(--text-color)',
                transition: 'all 0.3s ease'
            }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? '☀' : '☾'}
        </button>
    );
}
