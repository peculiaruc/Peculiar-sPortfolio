import React from 'react'
import { motion } from 'framer-motion'
import headshot from '../assets/peculiar.jpg'


export default function Hero() {
return (
<section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
<div className="container section-py-24 flex flex-col md:flex-row items-center gap-8">
<motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1">
<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Peculiar C. Umeh</h1>
<p className="mt-4 text-lg md:text-xl max-w-xl">Project Manager • Community Builder • Open Source & Tech Education • </p>
<div className="mt-6 flex gap-4">
<a href="#contact" className="px-5 py-3 bg-orange-500 text-white rounded-md shadow">Hire me</a>
<a href="/Peculiar-Umeh-CV.pdf" className="px-5 py-3 border rounded-md">Download CV</a>
</div>
</motion.div>


<motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="w-56 h-56 rounded-xl overflow-hidden shadow-lg border">
<img src={headshot} alt="headshot" className="w-full h-full object-cover" />
</motion.div>
</div>
</section>
)
}