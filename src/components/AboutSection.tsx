import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function AboutSection() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);
    const [bgImage, setBgImage] = useState("");
    
    // Check if element is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        
        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);
    
    // Select a random background image on component mount
    useEffect(() => {
        const bgOptions = ["/bg_about0.webp", "/bg_about1.webp", "/bg_about2.webp", "/bg_about3.webp"];
        const randomIndex = Math.floor(Math.random() * bgOptions.length);
        setBgImage(bgOptions[randomIndex]);
    }, []);

    // Tech skills organized by categories
    const techSkills = {
        Languages: ['TypeScript', 'JavaScipt', 'GO'],
        Frontend: ['React', 'Next.js', 'Tailwind', 'CSS', 'SASS'],
        Backend: ['Node.js', 'Express', 'Go (FIBER)'],
        Database: ['PostgreSQL', 'MongoDB', 'Redis'],
        Cloud: ['AWS', 'Docker'],
        Tools: ['Git', 'GitHub', 'VS Code']
    };
    
    // Animated border lights
    const BorderLights = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none font-8bit">
            {/* Top Light */}
            <motion.div 
                className="absolute top-0 h-1 bg-purple-500 rounded-full"
                animate={{
                    left: ["-10%", "110%"],
                    width: ["10%", "30%", "10%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            
            {/* Right Light */}
            <motion.div 
                className="absolute right-0 w-1 bg-purple-500 rounded-full"
                animate={{
                    top: ["-10%", "110%"],
                    height: ["10%", "30%", "10%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                }}
            />
            
            {/* Bottom Light */}
            <motion.div 
                className="absolute bottom-0 h-1 bg-purple-500 rounded-full"
                animate={{
                    right: ["-10%", "110%"],
                    width: ["10%", "30%", "10%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
            />
            
            {/* Left Light */}
            <motion.div 
                className="absolute left-0 w-1 bg-purple-500 rounded-full"
                animate={{
                    bottom: ["-10%", "110%"],
                    height: ["10%", "30%", "10%"]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 3
                }}
            />
        </div>
    );

    return (
        <section
            id="about"
            className="relative w-full min-h-screen py-20 px-4 sm:px-8 bg-black font-mono overflow-hidden"
            ref={sectionRef}
        >
            {/* Background Image with overlay */}
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <img 
                        src={bgImage} 
                        alt="Background" 
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-purple-900/30"></div>
                </div>
            )}

            {/* Retro grid overlay */}
            <div className="absolute inset-0 opacity-10 z-0">
                <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
                    {[...Array(144)].map((_, i) => (
                        <div
                            key={i}
                            className="border border-purple-500/20"
                        />
                    ))}
                </div>
            </div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-500 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl text-purple-400 mb-2">
                        ABOUT_ME
                    </h2>
                    <div className="h-1 bg-purple-400 w-24 mx-auto"></div>
                </motion.div>

                {/* Content grid - Modified layout */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:w-1/3 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Frame with animated border */}
                            <div className="relative p-1 bg-transparent">
                                <BorderLights />
                                
                                {/* Main image */}
                                <img
                                    src="/me.png" 
                                    alt="Your Name"
                                    className="w-64 h-64 sm:w-80 sm:h-80 object-cover border border-purple-400 relative z-10"
                                />
                                
                                {/* Corner decorations */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-purple-400"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-purple-400"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-purple-400"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-purple-400"></div>
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-purple-500 blur-md opacity-20 z-0"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Profile text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="lg:w-2/3 text-white"
                    >
                        <div className="relative p-1 h-full">
                            <BorderLights />
                            
                            {/* Dialogue Box Content */}
                            <div className="bg-transparent border border-purple-400 p-6 relative z-10 h-full">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <div className="text-sm text-purple-300 uppercase tracking-wider">PROFILE</div>
                                </div>
                                
                                <h3 className="text-2xl text-purple-400 mb-4">
                                    FULL_STACK_DEVELOPER
                                </h3>

                                <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                                    <p className="flex">
                                        <span className="text-purple-400 mr-2">&gt;</span>
                                        Hello! I'm Saurabh, a passionate developer specializing in modern web technologies.
                                    </p>
                                    <p className="flex">
                                        <span className="text-purple-400 mr-2">&gt;</span>
                                        My approach combines clean code architecture with creative design solutions.
                                    </p>
                                    <p className="flex">
                                        <span className="text-purple-400 mr-2">&gt;</span>
                                        When I'm not coding, you can find me exploring new tech or playing games.
                                    </p>
                                </div>
                                
                                {/* 8-bit style corner decorations */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-400"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-400"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-400"></div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-purple-500 blur-md opacity-20 z-0"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills section at the bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12"
                >
                    <div className="relative p-1">
                        <BorderLights />
                        
                        <div className="bg-transparent border border-purple-400 p-6 relative z-10">
                            <h4 className="text-purple-400 mb-6 text-lg flex items-center">
                                <span className="w-2 h-2 bg-purple-500 mr-2"></span>
                                TECH_SKILLS
                            </h4>
                            <div className="space-y-4">
                                {Object.entries(techSkills).map(([category, skills]) => (
                                    <div key={category}>
                                        <h5 className="text-sm text-purple-200 mb-2">{category.toUpperCase()}</h5>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                            {skills.map((skill) => (
                                                <motion.div
                                                    key={skill}
                                                    className="px-3 py-1 bg-purple-900/30 border border-purple-400 text-purple-300 text-xs sm:text-sm text-center"
                                                    whileHover={{ 
                                                        backgroundColor: "rgba(168, 85, 247, 0.2)",
                                                        scale: 1.05 
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            {/* 8-bit style corner decorations */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-400"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-400"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-400"></div>
                        </div>
                        
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-purple-500 blur-md opacity-20 z-0"></div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-8 left-8 w-16 h-16 border border-purple-400 opacity-20"></div>
            <div className="absolute top-12 right-8 w-16 h-16 border border-purple-400 opacity-20"></div>
        </section>
    );
}