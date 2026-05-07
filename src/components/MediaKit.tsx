import React, { useState, useMemo } from 'react'
import chaoss_25 from '../assets/chaoss_25.png'
import chaosscon_25 from '../assets/chaosscon_25.jpg'
import oscn2025 from '../assets/oscn_2025.jpg'
import hangout_22 from '../assets/hangout_22.png'
import onydust from '../assets/onydust.jpg'
import x_2025 from '../assets/x_2025.jpg'

type MediaAsset = {
  image: string
  title: string
  href: string
  category: 'speaking' | 'mention' | 'award'
  // label: string
}

const mediaAssets: MediaAsset[] = [
  { image: chaoss_25, title: 'CHAOSSCon 2025 #1', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
  { image: x_2025, title: 'CHAOSSCon 2025 #2', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
  { image: oscn2025, title: 'OSCN 2025 Keynote', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
  { image: onydust, title: 'DevRel Summit', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
  { image: oscn2025, title: 'TechConf Africa', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
  { image: chaosscon_25, title: 'Open Source Fest', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'speaking' },
  { image: oscn2025, title: 'Forbes Feature', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'mention' },
  { image: chaoss_25, title: 'TechCrunch Mention', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'mention' },
  { image: x_2025, title: 'Local Press', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'mention' },
  { image: hangout_22, title: 'Community Award', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'award' },
  { image: chaosscon_25, title: 'Leadership Award', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'award' },
  { image: oscn2025, title: 'Innovation Award', href: '/Peculiar-Umeh-MediaKit.pdf', category: 'award' },
]


export default function MediaKit() {
  const [active, setActive] = useState<'speaking' | 'mention' | 'award'>('speaking')

  const filtered = useMemo(
    () => mediaAssets.filter(a => a.category === active),
    [active]
  )

  return (
    <section
      id="mediakit"
      className="container section-py-20"
    >
      {/* Header */}
      <header className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          {/* Media Kit */}
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Press-ready resources for interviews, speaking engagements,
          collaborations, and media features.
        </p>
      </header>

      {/* Tabs */}
      <div className="mt-8 flex items-center gap-6">
        <button
          onClick={() => setActive('speaking')}
          className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
            active === 'speaking'
              ? 'bg-amber-400 text-black'
              : 'bg-amber-50 text-black hover:bg-amber-100'
          }`}
        >
          Speaking Engagements
        </button>
        <button
          onClick={() => setActive('mention')}
          className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
            active === 'mention'
              ? 'bg-amber-400 text-black'
              : 'bg-amber-50 text-black hover:bg-amber-100'
          }`}
        >
          Press mentions
        </button>
        <button
          onClick={() => setActive('award')}
          className={`px-6 py-3 rounded-lg text-sm font-medium transition ${
            active === 'award'
              ? 'bg-amber-400 text-black'
              : 'bg-amber-50 text-black hover:bg-amber-100'
          }`}
        >
          Awards
        </button>
      </div>

      {/* Assets */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((asset) => (
          <div
            key={asset.title}
            className="flex flex-col justify-between p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div>
              <div className="w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                <img src={asset.image} alt={asset.title} className="w-full h-full object-cover" />
              </div>
              {/* <p className="mt-3 text-sm font-medium text-center">{asset.name}</p> */}
              <h3 className="text-xl font-semibold">
                {asset.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              </p>
              <p className="mt-2 text-sm">
                <a href={asset.href} className="text-orange-600 hover:text-orange-700 underline">
                  {asset.href}
                </a>
              </p>
            </div>

            {/* <a
              href={asset.href}
              className="mt-6 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition"
            >
              {asset.text}
            </a> */}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
        <p>
          All assets are provided for editorial and promotional use.
          Please credit <strong>Peculiar C. Umeh</strong> where applicable.
        </p>
        <p className="mt-2">
          For press or speaking inquiries, visit the{' '}
          <a href="#contact" className="underline">
            contact section
          </a>
          .
        </p>
      </div>
    </section>
  )
}

//https://women-in-tech-conference.vfairs.com/
//https://x.com/gdgcloudph/status/1722550785542651974?t=cMkzku5p-5kda6chzfAcXg&s=08
//https://x.com/SCA_Asaba/status/1484825373963603969?t=Y22rkNgJANr6tc9cSmbjlw&s=08
