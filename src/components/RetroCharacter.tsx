import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RetroCharacter() {
    const [randomBg, setRandomBg] = useState("");
    const [typedText, setTypedText] = useState("");
    const fullText = "  Hello! I'm Saurabh, A Full Stack Developer.";
    
    // For typing animation
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);
        
        return () => clearInterval(timer);
    }, []);

    // For random background
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 4);
        setRandomBg(`/bg_hero${randomIndex}.gif`);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-16bit">
            {/* Background Image */}
            {randomBg && (
                <motion.img
                    src={randomBg}
                    alt="Retro Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            )}

            {/* Main Content */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                    className="flex flex-col-reverse md:flex-row items-center gap-2 z-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        type: "spring",
                        damping: 10,
                        stiffness: 100
                    }}
                >
                    {/* Character */}
                    <motion.div
                        className="relative"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="/hero.gif"
                            alt="Character"
                            className="w-40 h-40 md:w-44 md:h-44 object-contain relative z-10"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-2xl opacity-40 z-0"></div>
                    </motion.div>

                    {/* Animated Dialogue Box */}
                    <motion.div
                        className="relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    >
                        <div className="relative p-1 rounded-lg z-10">
                            {/* Animated Border */}
                            <div className="absolute inset-0 overflow-hidden rounded-lg">
                                {/* Top Light */}
                                <motion.div 
                                    className="absolute top-0 h-1 bg-purple-500 rounded-full"
                                    animate={{
                                        left: ["-20%", "100%"],
                                        width: ["20%", "40%", "20%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                
                                {/* Right Light */}
                                <motion.div 
                                    className="absolute right-0 w-1 bg-purple-500 rounded-full"
                                    animate={{
                                        top: ["-20%", "100%"],
                                        height: ["20%", "40%", "20%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 0.75
                                    }}
                                />
                                
                                {/* Bottom Light */}
                                <motion.div 
                                    className="absolute bottom-0 h-1 bg-purple-500 rounded-full"
                                    animate={{
                                        right: ["-20%", "100%"],
                                        width: ["20%", "40%", "20%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 1.5
                                    }}
                                />
                                
                                {/* Left Light */}
                                <motion.div 
                                    className="absolute left-0 w-1 bg-purple-500 rounded-full"
                                    animate={{
                                        bottom: ["-20%", "100%"],
                                        height: ["20%", "40%", "20%"]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: 2.25
                                    }}
                                />
                            </div>
                            
                            {/* Dialogue Box Content */}
                            <div className="bg-gray-900 bg-opacity-90 text-white p-4 max-w-xs md:max-w-md rounded-lg border border-purple-300 text-xs md:text-sm leading-snug relative z-10">
                                <div className="flex items-center mb-2">
                                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                    <div className="text-xs text-purple-300 uppercase tracking-wider">MESSAGE</div>
                                </div>
                                
                                <p className="font-mono">
                                    {typedText}
                                    <motion.span 
                                        className="inline-block w-2 h-4 bg-purple-400 ml-1"
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    />
                                </p>
                                
                                {/* 8-bit style corner decorations */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-purple-400"></div>
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-400"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400"></div>
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-purple-400"></div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-lg bg-purple-500 blur-md opacity-20 z-0"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* 8-bit Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <motion.p
                    className="text-center text-xs mt-2 text-purple-300 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    SCROLL DOWN
                </motion.p>
            </div>
        </div>
    );
}