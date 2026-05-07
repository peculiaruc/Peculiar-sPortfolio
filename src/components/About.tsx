import React from 'react'
import { motion } from 'framer-motion'


export default function About() {
return (
<motion.section id="about" className="container section-py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
<h2 className="text-3xl font-bold">About</h2>
<p className="mt-4 text-lg max-w-3xl">I’m a software developer,techincal project manager, and a community manager with 7+ years experience leading teams, managing products, and building scalable learning experiences. I am passionate about open source education, mentorship, and community building.</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
<h3 className="font-semibold">Core Skills</h3>
<ul className="mt-3 space-y-2 text-sm">
<li>Project Management · Communities · Open Source Programs</li>
<li>Curriculum Design · Mentorship · Remote Team Leadership</li>
</ul>
</div>
<div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
<h3 className="font-semibold">Highlights</h3>
<ul className="mt-3 space-y-2 text-sm">
<li>Managed 5,000+ learners across cohorts</li>
<li>Led CHAOSS Education Project</li>
</ul>
</div>
</div>
</motion.section>
)
}