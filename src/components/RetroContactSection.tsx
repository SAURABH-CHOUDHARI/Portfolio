import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RetroContactSection() {
    const [typedText, setTypedText] = useState("");
    const fullText = " Let's connect and create something amazing!";
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const [currentBg, setCurrentBg] = useState("");

    // Random background selection
    useEffect(() => {
        const backgrounds = [
            "/contact_bg10.gif",
            "/contact_bg11.gif",
            "/contact_bg13.gif",
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
            className="relative w-full py-8 md:py-16 font-sans font-16bit"
            style={{
                backgroundImage: `url('${currentBg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-80 z-0"></div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.h2
                    className="text-center md:text-left md:pl-8 text-3xl md:text-5xl text-gray-800 mb-8 md:mb-12 font-bold "
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 md:px-8 py-2 md:py-3 rounded-full retro-card">
                        GET IN TOUCH
                    </span>
                </motion.h2>

                <div className="flex flex-col items-start justify-between min-h-64">
                    {/* Character and Dialogue Box - Left Aligned */}
                    <motion.div
                        className="flex flex-col items-center md:items-center mb-8 pl-0 md:pl-8 w-full md:w-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Apply scanlines only to the character image */}
                        <div className="relative p-3 md:p-4 rounded-full retro-card ">
                            <img
                                src="/contact.gif"
                                alt="Contact Character"
                                className="w-24 h-24 md:w-36 md:h-36 object-contain rounded-full"
                            />
                        </div>

                        {/* Dialogue Box */}
                        <motion.div
                            className="relative max-sm:px-12 mt-4 md:mt-8 w-full md:w-auto"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <div className="p-4 md:p-6 rounded-2xl retro-card max-w-full md:max-w-md">
                                <p className="font-mono text-xs md:text-base text-gray-800">
                                    {typedText}
                                    <motion.span
                                        className="inline-block w-1 md:w-2 h-3 md:h-5 bg-gray-600 ml-1"
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    />
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Footer decoration */}
                    <div className="my-6 md:mt-8 md:mb-12 w-full flex justify-center">
                        <motion.div
                            className="h-1 w-32 md:w-64 bg-gray-300 rounded-full shadow-sm"
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

                    {/* Contact Links - Bottom Tiled */}
                    <motion.div
                        className="w-full mt-4 md:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            {socialLinks.map((link, index) => (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group pixel-chip rounded-full transition-all duration-300 w-40 sm:w-auto"
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
                                    <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                                        <div className="text-xl md:text-2xl mr-2 md:mr-3">{link.icon}</div>
                                        <div className="flex-grow">
                                            <div className="text-xs md:text-sm font-bold text-gray-800">
                                                {link.label}
                                            </div>
                                            <div className="text-gray-600 text-xs hidden md:block">
                                                {link.href.replace(/(https?:\/\/)|(mailto:)/g, '')}
                                            </div>
                                        </div>
                                        <motion.div
                                            className="ml-2 md:ml-3 text-lg md:text-xl text-gray-800"
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
                        </div>
                    </motion.div>
                </div>
            </div>

            <style >{`
                /* Custom styling */
                .retro-card {
                    background: rgba(240, 240, 240, 0.8);
                    box-shadow: 8px 8px 16px rgba(163, 163, 163, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(5px);
                    position: relative;
                }
                
                .retro-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, transparent 50%, rgba(0, 255, 255, 0.05) 100%);
                    pointer-events: none;
                }

                /* Pixel image container with scanlines */
                .pixel-image-container {
                    position: relative;
                }

                .pixel-image-container::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        rgba(0, 0, 0, 0.8),
                        rgba(0, 0, 0, 0.8) 1px,
                        transparent 1px,
                        transparent 2px
                    );
                    opacity: 0.2;
                    pointer-events: none;
                }

                /* Pixel chip styling */
                .pixel-chip {
                    position: relative;
                    overflow: hidden;
                    background: rgba(240, 240, 240, 0.8);
                    box-shadow: 8px 8px 16px rgba(163, 163, 163, 0.6), -8px -8px 16px rgba(255, 255, 255, 0.8);
                }

                .pixel-chip::before {
                    content: '';
                    position: absolute;
                    top: 1px;
                    left: 1px;
                    right: 1px;
                    bottom: 1px;
                    border: 1px solid rgba(0, 255, 255, 0.3);
                }

                .pixel-chip:hover::before {
                    border-color: rgba(0, 255, 255, 0.6);
                }

                /* Text outline */
                .pixel-text-outline {
                    text-shadow: 
                        1px 0 0 #00ffff,
                        -1px 0 0 #00ffff,
                        0 1px 0 #00ffff,
                        0 -1px 0 #00ffff;
                }

                @media (max-width: 640px) {
                    .retro-card, .pixel-chip {
                        box-shadow: 4px 4px 8px rgba(163, 163, 163, 0.6), -4px -4px 8px rgba(255, 255, 255, 0.8);
                    }
                }

                .pixel-chip:hover {
                    box-shadow: 6px 6px 12px rgba(163, 163, 163, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.8), inset 2px 2px 5px rgba(0,0,0,0.05);
                }

                .pixel-chip:active {
                    box-shadow: inset 8px 8px 16px rgba(163, 163, 163, 0.6), inset -8px -8px 16px rgba(255, 255, 255, 0.8);
                }
            `}</style>
        </div>
    );
}