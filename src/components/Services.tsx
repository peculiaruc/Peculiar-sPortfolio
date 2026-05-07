import React from 'react'


export default function Services() {
const items = [
{ title: 'Consulting', desc: 'I offer consulting services to help you achieve your goals.' },
{ title: 'Project Management', desc: 'Cross-functional delivery, sprints, stakeholder communication.' },
{ title: 'Community Management', desc: 'Grow & engage developer communities.' },
{ title: 'Open Source Programs', desc: 'Cohort management & curriculum.' },
{ title: 'Tech Education', desc: 'Workshops, learning pathways, mentorship.' },
]


return (
<section id="services" className="container section-py-16">
<h2 className="text-2xl font-bold">What I do</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{items.map(i => (
<div key={i.title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
<h3 className="font-semibold">{i.title}</h3>
<p className="mt-2 text-sm">{i.desc}</p>
</div>
))}
</div>
</section>
)
}