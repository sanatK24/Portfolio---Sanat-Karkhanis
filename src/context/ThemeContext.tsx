import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        if (saved === 'dark' || saved === 'light') return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Update CSS variables based on theme
        if (theme === 'dark') {
            document.documentElement.style.setProperty('--bg-color', '#0a0a0a');
            document.documentElement.style.setProperty('--text-color', '#ededed');
            document.documentElement.style.setProperty('--secondary-text', '#a1a1a1');
        } else {
            document.documentElement.style.setProperty('--bg-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#1a1a1a');
            document.documentElement.style.setProperty('--secondary-text', '#666666');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
