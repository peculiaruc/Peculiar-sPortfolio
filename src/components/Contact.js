import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
    const form = useRef(null);
    const [status, setStatus] = useState('idle');
    const sendEmail = (e) => {
        e.preventDefault();
        if (!form.current)
            return;
        setStatus('sending');
        const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
        const USER_ID = 'YOUR_EMAILJS_PUBLIC_KEY';
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then(() => setStatus('sent'))
            .catch(() => setStatus('error'));
    };
    return (_jsxs("section", { id: "contact", className: "container-4xl section-py-20", children: [_jsx("h2", { className: "text-3xl font-bold", children: "Contact" }), _jsx("p", { className: "mt-3", children: "Get in touch for speaking, consulting or collaboration." }), _jsxs("form", { ref: form, onSubmit: sendEmail, className: "mt-6 grid grid-cols-1 gap-4", children: [_jsx("input", { name: "from_name", required: true, placeholder: "Your name", className: "p-3 rounded border bg-white dark:bg-gray-800" }), _jsx("input", { name: "reply_to", type: "email", required: true, placeholder: "Email", className: "p-3 rounded border bg-white dark:bg-gray-800" }), _jsx("textarea", { name: "message", required: true, placeholder: "Message", className: "p-3 rounded border bg-white dark:bg-gray-800 h-32" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { className: "px-5 py-2 bg-orange-500 text-white rounded", children: "Send message" }), status === 'sending' && _jsx("span", { children: "Sending\u2026" }), status === 'sent' && _jsx("span", { className: "text-green-500", children: "Sent \u2014 thank you!" }), status === 'error' && _jsx("span", { className: "text-red-500", children: "Error sending" })] })] })] }));
}
