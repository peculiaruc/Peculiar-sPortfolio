import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
const sample = [
    { id: '1', title: 'Community Platform', role: 'Lead', description: 'Built onboarding & mentorship workflows.' },
    { id: '2', title: 'Open Source Curriculum', role: 'PM', description: 'Designed modules and assessments.' },
];
export default function Projects() {
    return (_jsxs(motion.section, { id: "projects", className: "container section-py-20", initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-3xl font-bold", children: "Work & Projects" }), _jsx("div", { className: "mt-8 space-y-6", children: sample.map(p => (_jsxs("article", { className: "p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold", children: p.title }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: p.role })] }), _jsx("span", { className: "text-sm text-orange-500", children: "View" })] }), _jsx("p", { className: "mt-3 text-sm", children: p.description })] }, p.id))) })] }));
}
