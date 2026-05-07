import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


type Props = { theme: 'light' | 'dark'; setTheme: (t: 'light' | 'dark') => void }


export default function Nav({ theme, setTheme }: Props) {
return (
<motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.35 }}
className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
<div className="container section-py-4 flex items-center justify-between">
<Link to="/" className="font-bold text-lg">PECULIAR C UMEH</Link>
<div className="flex items-center gap-4">
<Link to="/" className="hidden md:inline">Home</Link>
<Link to="/about" className="hidden md:inline">About</Link>
<Link to="/projects" className="hidden md:inline">Work</Link>
<Link to="/mediakit" className="hidden md:inline">Media Kit</Link>
<Link to="/contact" className="hidden md:inline">Contact</Link>


<button aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
className="p-2 rounded-md ring-1 ring-gray-200 dark:ring-gray-700">
{theme === 'dark' ? '🌙' : '☀️'}
</button>
</div>
</div>
</motion.nav>
)
}