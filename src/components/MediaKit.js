import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import chaoss_25 from '../assets/chaoss_25.png';
import chaosscon_25 from '../assets/chaosscon_25.jpg';
import oscn2025 from '../assets/oscn_2025.jpg';
import hangout_22 from '../assets/hangout_22.png';
import onydust from '../assets/onydust.jpg';
import x_2025 from '../assets/x_2025.jpg';
const mediaAssets = [
    { image: chaoss_25, title: 'CHAOSSCon 2025 #1', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
    { image: x_2025, title: 'CHAOSSCon 2025 #2', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
    { image: oscn2025, title: 'OSCN 2025 Keynote', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
    { image: onydust, title: 'DevRel Summit', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
    { image: oscn2025, title: 'TechConf Africa', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
    { image: chaosscon_25, title: 'Open Source Fest', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
    { image: oscn2025, title: 'Forbes Feature', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'mention' },
    { image: chaoss_25, title: 'TechCrunch Mention', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'mention' },
    { image: x_2025, title: 'Local Press', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'mention' },
    { image: hangout_22, title: 'Community Award', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'award' },
    { image: chaosscon_25, title: 'Leadership Award', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'award' },
    { image: oscn2025, title: 'Innovation Award', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'award' },
];
export default function MediaKit() {
    const [active, setActive] = useState('speaking');
    const filtered = useMemo(() => mediaAssets.filter(a => a.category === active), [active]);
    return (_jsxs("section", { id: "mediakit", className: "container section-py-20", children: [_jsxs("header", { className: "max-w-3xl", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold" }), _jsx("p", { className: "mt-4 text-lg text-gray-600 dark:text-gray-300", children: "Press-ready resources for interviews, speaking engagements, collaborations, and media features." })] }), _jsxs("div", { className: "mt-8 flex items-center gap-6", children: [_jsx("button", { onClick: () => setActive('speaking'), className: `px-6 py-3 rounded-lg text-sm font-medium transition ${active === 'speaking'
                            ? 'bg-amber-400 text-black'
                            : 'bg-amber-50 text-black hover:bg-amber-100'}`, children: "Speaking Engagements" }), _jsx("button", { onClick: () => setActive('mention'), className: `px-6 py-3 rounded-lg text-sm font-medium transition ${active === 'mention'
                            ? 'bg-amber-400 text-black'
                            : 'bg-amber-50 text-black hover:bg-amber-100'}`, children: "Press mentions" }), _jsx("button", { onClick: () => setActive('award'), className: `px-6 py-3 rounded-lg text-sm font-medium transition ${active === 'award'
                            ? 'bg-amber-400 text-black'
                            : 'bg-amber-50 text-black hover:bg-amber-100'}`, children: "Awards" })] }), _jsx("div", { className: "mt-10 grid grid-cols-1 md:grid-cols-3 gap-6", children: filtered.map((asset) => (_jsx("div", { className: "flex flex-col justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition", children: _jsxs("div", { children: [_jsx("div", { className: "w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700", children: _jsx("img", { src: asset.image, alt: asset.title, className: "w-full h-full object-cover" }) }), _jsx("h3", { className: "text-xl font-semibold", children: asset.title }), _jsx("p", { className: "mt-3 text-sm text-gray-600 dark:text-gray-300" }), _jsx("p", { className: "mt-2 text-sm", children: _jsx("a", { href: asset.href, className: "text-orange-600 hover:text-orange-700 underline", children: asset.href }) })] }) }, asset.title))) }), _jsxs("div", { className: "mt-12 text-sm text-gray-500 dark:text-gray-400 max-w-2xl", children: [_jsxs("p", { children: ["All assets are provided for editorial and promotional use. Please credit ", _jsx("strong", { children: "Peculiar C. Umeh" }), " where applicable."] }), _jsxs("p", { className: "mt-2", children: ["For press or speaking inquiries, visit the", ' ', _jsx("a", { href: "#contact", className: "underline", children: "contact section" }), "."] })] })] }));
}
