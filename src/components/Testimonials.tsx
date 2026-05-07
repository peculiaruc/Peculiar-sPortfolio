import React from 'react'
import type { Testimonial } from '../types'


const testimonials: Testimonial[] = [
{ id: 't1', name: 'Alice', quote: 'Peculiar managed our community with excellence.' },
{ id: 't2', name: 'John', quote: 'Great at delivering educational programs.' },
]


export default function Testimonials() {
return (
<section id="testimonials" className="container section-py-16">
<h2 className="text-2xl font-bold">Testimonials</h2>
<div className="mt-6 grid md:grid-cols-2 gap-6">
{testimonials.map(t => (
<div key={t.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
<p className="italic">“{t.quote}”</p>
<p className="mt-3 font-semibold">— {t.name}</p>
</div>
))}
</div>
</section>
)
}