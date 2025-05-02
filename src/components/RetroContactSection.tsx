import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function NeumorphicContactSection() {
    const [typedText, setTypedText] = useState("");
    const fullText = " Let's connect and create something amazing!";
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const [currentBg, setCurrentBg] = useState("");

    // Random background selection
    useEffect(() => {
        const backgrounds = [
            "/bg_contact0.webp",
            "/bg_contact1.webp",
            "/bg_contact2.webp",
            "/bg_contact3.webp"
        ];
        const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        setCurrentBg(randomBg);
    }, []);

    // Typing animation
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setTypedText(prev => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 60);

        return () => clearInterval(timer);
    }, []);

    // Social media links data
    const socialLinks = [
        {
            id: "email",
            label: "EMAIL",
            icon: "✉️",
            href: "mailto:saurabh.choudhariasus@google.com",
            color: "bg-gray-100"
        },
        {
            id: "github",
            label: "GITHUB",
            icon: "👾",
            href: "https://github.com/SAURABH-CHOUDHARI",
            color: "bg-gray-100"
        },
        {
            id: "linkedin",
            label: "LINKEDIN",
            icon: "🧑‍💻",
            href: "https://www.linkedin.com/in/saurabhtraceur/",
            color: "bg-gray-100"
        },
        {
            id: "x",
            label: "X",
            icon: "✖️",
            href: "https://x.com/Hritik_oo7",
            color: "bg-gray-100"
        }
    ];

    return (
        <div
            id="contact-section"
            className="relative w-full  py-16 font-sans"
            style={{
                backgroundImage: `url('${currentBg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-80 z-0"></div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.h2
                    className="text-center text-5xl text-gray-800 mb-12 font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-8 py-3 rounded-full shadow-neumorph">
                        GET IN TOUCH
                    </span>
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-8">
                    {/* Character Image */}
                    <motion.div
                        className="flex flex-col items-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative p-4 rounded-full shadow-neumorph">
                            <img
                                src="/pikachu.gif"
                                alt="Contact Character"
                                className="w-36 h-36 object-contain rounded-full"
                            />
                        </div>

                        {/* Dialogue Box */}
                        <motion.div
                            className="relative mt-8"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <div className="p-6 rounded-2xl shadow-neumorph max-w-md">
                                <p className="font-mono text-sm md:text-base text-gray-800">
                                    {typedText}
                                    <motion.span
                                        className="inline-block w-2 h-5 bg-gray-600 ml-1"
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    />
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Links */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group bg-gray-100 rounded-2xl p-6 transition-all duration-300 shadow-neumorph"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                onMouseEnter={() => setHoveredIcon(link.id)}
                                onMouseLeave={() => setHoveredIcon(null)}
                                whileHover={{
                                    scale: 1.02,
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="text-3xl mb-2">{link.icon}</div>
                                    <div className="text-lg font-bold text-gray-800 mb-1">
                                        {link.label}
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        {link.href.replace(/(https?:\/\/)|(mailto:)/g, '')}
                                    </div>
                                    <motion.div
                                        className="mt-2 text-xl text-gray-800"
                                        animate={{
                                            x: hoveredIcon === link.id ? [0, 5, 0] : 0
                                        }}
                                        transition={{ duration: 0.8, repeat: hoveredIcon === link.id ? Infinity : 0 }}
                                    >
                                        →
                                    </motion.div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Footer decoration */}
                <div className="mt-16 flex justify-center">
                    <motion.div
                        className="h-1 w-64 bg-gray-300 rounded-full shadow-sm"
                        animate={{
                            scaleX: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>

            <style>
                {`
        .shadow-neumorph {
            background: rgba(240, 240, 240, 0.8);
            box-shadow: 8px 8px 16px rgba(163, 163, 163, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(5px);
        }

        a.shadow-neumorph:hover {
            box-shadow: 6px 6px 12px rgba(163, 163, 163, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8), inset 2px 2px 5px rgba(0,0,0,0.05);
        }

        .shadow-neumorph:active {
            box-shadow: inset 8px 8px 16px rgba(163, 163, 163, 0.6), inset -8px -8px 16px rgba(255, 255, 255, 0.8);
        }
    `}
            </style>
        </div>
    );
}