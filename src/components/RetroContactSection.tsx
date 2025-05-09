import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function RetroContactSection() {
    const [typedText, setTypedText] = useState("");
    const fullText = "   Let's connect and create something amazing!";
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const [currentBg, setCurrentBg] = useState("");
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: false
    });

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
        if (inView) {
            let index = 0;
            setTypedText(""); // Reset text when component comes into view
            const timer = setInterval(() => {
                if (index < fullText.length) {
                    setTypedText(prev => prev + fullText.charAt(index));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 60);

            return () => clearInterval(timer);
        }
    }, [inView]);

    // Scroll animation trigger
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div
            id="contact"
            ref={ref}
            className="relative w-full min-h-screen py-8 md:py-16 font-sans font-16bit flex items-end"
            style={{
                backgroundImage: `url('${currentBg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-80 z-0"></div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative z-10 pb-20">
                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                >
                    {/* Section Title */}
                    <motion.h2
                        className="text-center text-3xl md:text-5xl text-gray-800 mb-8 md:mb-12 font-bold"
                        variants={itemVariants}
                    >
                        <span className="inline-block px-4 md:px-8 py-2 md:py-3 rounded-full retro-card">
                            GET IN TOUCH
                        </span>
                    </motion.h2>

                    {/* Character and Dialogue Box */}
                    <motion.div
                        className="flex flex-col items-center mb-8 w-full max-w-md"
                        variants={itemVariants}
                    >
                        <div className="relative p-3 md:p-4 rounded-full retro-card mb-4">
                            <img
                                src="/contact.gif"
                                alt="Contact Character"
                                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full"
                            />
                        </div>

                        {/* Dialogue Box */}
                        <motion.div
                            className="relative w-full max-sm:px-12"
                            variants={itemVariants}
                        >
                            <div className="p-4 md:p-6  rounded-2xl retro-card">
                                <p className="font-mono  text-xs md:text-sm text-gray-800">
                                    {typedText}
                                    <motion.span
                                        className="inline-block w-1 md:w-2 h-3 md:h-4 bg-gray-600 ml-1"
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                    />
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Footer decoration - Pushed to bottom */}
                    <motion.div
                        className="mt-auto pt-12 w-full flex justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="h-1 w-32 md:w-64 bg-gray-300 rounded-full"
                            animate={inView ? {
                                scaleX: [1, 1.1, 1],
                            } : {}}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                    {/* Contact Links */}
                    <motion.div
                        className="w-full max-sm:px-12 mt-8 md:mt-12"
                        variants={containerVariants}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group pixel-chip rounded-full transition-all duration-300"
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredIcon(link.id)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center justify-between px-4 py-3">
                                        <div className="text-xl md:text-2xl mr-3">{link.icon}</div>
                                        <div className="flex-grow">
                                            <div className="text-xs md:text-sm font-bold text-gray-800">
                                                {link.label}
                                            </div>
                                            <div className="text-gray-600 text-xs hidden md:block">
                                                {link.href.replace(/(https?:\/\/)|(mailto:)/g, '')}
                                            </div>
                                        </div>
                                        <motion.div
                                            className="ml-3 text-lg md:text-xl text-gray-800"
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
                </motion.div>
            </div>

            <style >{`
                /* Custom styling */
                .retro-card {
                    background: rgba(240, 240, 240, 0.9);
                    box-shadow: 8px 8px 16px rgba(163, 163, 163, 0.6), 
                                -8px -8px 16px rgba(255, 255, 255, 0.8);
                    backdrop-filter: blur(5px);
                    position: relative;
                }
                
                .retro-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, 
                        rgba(0, 255, 255, 0.05) 0%, 
                        transparent 50%, 
                        rgba(0, 255, 255, 0.05) 100%);
                    pointer-events: none;
                }

                /* Pixel chip styling */
                .pixel-chip {
                    position: relative;
                    overflow: hidden;
                    background: rgba(240, 240, 240, 0.9);
                    box-shadow: 4px 4px 8px rgba(163, 163, 163, 0.6), 
                                -4px -4px 8px rgba(255, 255, 255, 0.8);
                    transition: all 0.3s ease;
                }

                .pixel-chip::before {
                    content: '';
                    position: absolute;
                    top: 1px;
                    left: 1px;
                    right: 1px;
                    bottom: 1px;
                    border: 1px solid rgba(0, 255, 255, 0.3);
                    border-radius: 9999px;
                }

                .pixel-chip:hover::before {
                    border-color: rgba(0, 255, 255, 0.6);
                }

                @media (max-width: 640px) {
                    .retro-card, .pixel-chip {
                        box-shadow: 3px 3px 6px rgba(163, 163, 163, 0.6), 
                                    -3px -3px 6px rgba(255, 255, 255, 0.8);
                    }
                }

                .pixel-chip:active {
                    box-shadow: inset 4px 4px 8px rgba(163, 163, 163, 0.6), 
                                inset -4px -4px 8px rgba(255, 255, 255, 0.8);
                    transform: scale(0.98);
                }
            `}</style>
        </div>
    );
}