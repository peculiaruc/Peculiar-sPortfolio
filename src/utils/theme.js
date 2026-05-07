export const getInitialTheme = () => {
    if (typeof window === 'undefined')
        return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light')
        return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
