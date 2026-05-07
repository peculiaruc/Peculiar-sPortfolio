import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import MediaKit from './components/MediaKit';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { getInitialTheme } from './utils/theme';
import Home from './components/Home';
export default function App() {
    const [theme, setTheme] = useState(getInitialTheme);
    useEffect(() => {
        document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (_jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsxs("main", { children: [_jsx(Home, {}), _jsx(Hero, {}), _jsx(About, {}), _jsx(Services, {}), _jsx(Projects, {}), _jsx(Testimonials, {}), _jsx(MediaKit, {}), _jsx(Articles, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/about", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(About, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/services", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(Services, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/projects", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(Projects, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/testimonials", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(Testimonials, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/mediakit", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(MediaKit, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/articles", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(Articles, {}), _jsx(Footer, {})] }) }), _jsx(Route, { path: "/contact", element: _jsxs(_Fragment, { children: [_jsx(Nav, { theme: theme, setTheme: setTheme }), _jsx(Contact, {}), _jsx(Footer, {})] }) })] }) }));
}
