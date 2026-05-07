import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Services() {
    const items = [
        { title: 'Consulting', desc: 'I offer consulting services to help you achieve your goals.' },
        { title: 'Project Management', desc: 'Cross-functional delivery, sprints, stakeholder communication.' },
        { title: 'Community Management', desc: 'Grow & engage developer communities.' },
        { title: 'Open Source Programs', desc: 'Cohort management & curriculum.' },
        { title: 'Tech Education', desc: 'Workshops, learning pathways, mentorship.' },
    ];
    return (_jsxs("section", { id: "services", className: "container section-py-16", children: [_jsx("h2", { className: "text-2xl font-bold", children: "What I do" }), _jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map(i => (_jsxs("div", { className: "p-6 bg-white dark:bg-gray-800 rounded-lg shadow", children: [_jsx("h3", { className: "font-semibold", children: i.title }), _jsx("p", { className: "mt-2 text-sm", children: i.desc })] }, i.title))) })] }));
}
