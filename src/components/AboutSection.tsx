import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function AboutSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Tech skills organized by categories
    const techSkills = {
        Languages:['TypeScript', 'JavaScipt', 'GO'],
        Frontend: ['React', 'Next.js', 'Tailwind', 'CSS', 'SASS'],
        Backend: ['Node.js', 'Express', 'Go (FIBER)'],
        Database: ['PostgreSQL', 'MongoDB','Redis'],
        Cloud: ['AWS', 'Docker'],
        Tools: ['Git', 'GitHub', 'VS Code',]
    };

    return (
        <section
            id="about"
            className="relative w-full min-h-screen py-20 px-4 sm:px-8 bg-[#0a0a14] font-8bit overflow-hidden"
            ref={ref}
        >
            {/* Retro grid background */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
                    {[...Array(400)].map((_, i) => (
                        <div
                            key={i}
                            className="border border-[#00ffff]/20"
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl text-cyan-400 mb-2 pixel-text-outline">
                        ABOUT_ME
                    </h2>
                    <div className="h-1 bg-cyan-400 w-24 mx-auto"></div>
                </motion.div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Your image with 8-bit frame */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            {/* Main image */}
                            <img
                                src="/me.png" 
                                alt="Your Name"
                                className="w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-cyan-400 pixel-image"
                            />

                            {/* 8-bit corner decorations */}
                            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-cyan-400"></div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-cyan-400"></div>
                            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-cyan-400"></div>
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-cyan-400"></div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-cyan-400/20 group-hover:opacity-40 opacity-0 transition-opacity duration-300"></div>
                        </div>
                    </motion.div>

                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-white"
                    >
                        <div className="bg-[#1e1e2f]/90 border-2 border-cyan-400 p-6 retro-terminal">
                            <h3 className="text-2xl text-cyan-400 mb-4 pixel-text-outline">
                                FULL_STACK_DEVELOPER
                            </h3>

                            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                                <p className="flex">
                                    <span className="text-cyan-400 mr-2">&gt;</span>
                                    Hello! I'm Saurabh, a passionate developer specializing in modern web technologies.
                                </p>
                                <p className="flex">
                                    <span className="text-cyan-400 mr-2">&gt;</span>
                                    My approach combines clean code architecture with creative design solutions.
                                </p>
                                <p className="flex">
                                    <span className="text-cyan-400 mr-2">&gt;</span>
                                    When I'm not coding, you can find me exploring new tech or playing games.
                                </p>
                            </div>

                            {/* Categorized Skills list */}
                            <div className="mt-8">
                                <h4 className="text-cyan-400 mb-3 text-lg pixel-text-outline">
                                    TECH_SKILLS:
                                </h4>
                                <div className="space-y-4">
                                    {Object.entries(techSkills).map(([category, skills]) => (
                                        <div key={category} className="mb-2">
                                            <h5 className="text-sm text-cyan-200 mb-2">{category.toUpperCase()}</h5>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                                {skills.map((skill) => (
                                                    <div
                                                        key={skill}
                                                        className="px-3 py-1 bg-cyan-400/10 border border-cyan-400 text-cyan-400 text-xs sm:text-sm text-center pixel-chip"
                                                    >
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-cyan-400 opacity-20"></div>
            <div className="absolute top-12 right-8 w-16 h-16 border-2 border-cyan-400 opacity-20"></div>
        </section>
    );
}