'use client'

import { AboutSection } from '../components/AboutSection'
import { Navbar } from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import RetroCharacter from '../components/RetroCharacter'

const SPA = () => {
    return (
        <>



            <main className="flex flex-col">
                <section id="home" className="min-h-screen font-16bit">
                    <div className="w-full max-w-screen-xl mx-auto ">
                        <RetroCharacter />
                    </div>
                </section>
                <Navbar />

                <section id="about" className="min-h-screen  ">
                    <div className="w-full max-w-screen-xl mx-auto ">
                        <AboutSection/>
                    </div>
                </section>

                <section id="projects" className="  ">
                    <div className="w-full max-w-screen-xl mx-auto ">
                        <ProjectsSection/>
                    </div>
                </section>

                {/* Add similar wrappers to other sections */}
            </main>
        </>
    )
}

export default SPA
