'use client'

import { Navbar } from '../components/Navbar'
import ParticleCanvas from './ParticleCanvas'

const SPA = () => {
    return (
        <>
            {/* 1) draw your canvas first */}
            <section id="home" className="relative w-full h-screen overflow-hidden">
                <ParticleCanvas />
                {/* optional hero content */}
            </section>

            {/* 2) then render the navbar (and rest of page) */}
            <Navbar />

            <main className="flex flex-col">
                <section id="about" className="min-h-screen">{/*...*/}</section>
                {/* etc. */}
            </main>
        </>
    )
}

export default SPA
