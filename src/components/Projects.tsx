import React from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../types'


const sample: Project[] = [
{ id: '1', title: 'Community Platform', role: 'Lead', description: 'Built onboarding & mentorship workflows.' },
{ id: '2', title: 'Open Source Curriculum', role: 'PM', description: 'Designed modules and assessments.' },
]


export default function Projects() {
return (
<motion.section id="projects" className="container section-py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
<h2 className="text-3xl font-bold">Work & Projects</h2>
<div className="mt-8 space-y-6">
{sample.map(p => (
<article key={p.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold">{p.title}</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">{p.role}</p>
</div>
<span className="text-sm text-orange-500">View</span>
</div>
<p className="mt-3 text-sm">{p.description}</p>
</article>
))}
</div>
</motion.section>
)
}