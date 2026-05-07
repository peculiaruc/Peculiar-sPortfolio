import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const testimonials = [
    { id: 't1', name: 'Alice', quote: 'Peculiar managed our community with excellence.' },
    { id: 't2', name: 'John', quote: 'Great at delivering educational programs.' },
];
export default function Testimonials() {
    return (_jsxs("section", { id: "testimonials", className: "container section-py-16", children: [_jsx("h2", { className: "text-2xl font-bold", children: "Testimonials" }), _jsx("div", { className: "mt-6 grid md:grid-cols-2 gap-6", children: testimonials.map(t => (_jsxs("div", { className: "p-6 bg-white dark:bg-gray-800 rounded-lg shadow", children: [_jsxs("p", { className: "italic", children: ["\u201C", t.quote, "\u201D"] }), _jsxs("p", { className: "mt-3 font-semibold", children: ["\u2014 ", t.name] })] }, t.id))) })] }));
}
