import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RetroCharacter() {
    const [randomBg, setRandomBg] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 4);
        setRandomBg(`/bg_hero${randomIndex}.jpg`);
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-8bit">
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
                            src="/cat.png"
                            alt="Character"
                            className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] object-contain relative z-10"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-2xl opacity-40 z-0"></div>
                    </motion.div>

                    {/* Speech Bubble */}
                    <motion.div
                        className="relative"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    >
                        <div className="bg-[#1e1e2f] text-white p-4 max-w-xs md:max-w-md rounded-lg border-2 border-white text-xs md:text-sm leading-snug relative z-10">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1, delayChildren: 1 }}
                            >
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    Hello!,{' '}
                                </motion.span>
                                <motion.span
                                    className="bg-gradient-to-r text-xl from-purple-500 to-blue-500 bg-clip-text text-transparent"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                >
                                    I'm Saurabh
                                </motion.span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                >
                                    A Full Stack Developer.
                                </motion.span>
                            </motion.p>
                        </div>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 blur-xl opacity-30 z-0"></div>
                    </motion.div>
                </motion.div>
            </div>

            {/* 8-bit Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">

                <motion.p
                    className="text-center text-xs mt-2 text-cyan-300 font-8bit"
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