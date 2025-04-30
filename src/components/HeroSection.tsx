// src/components/HeroSection.tsx
import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div
                className="relative text-center text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-6">I design and build exceptional websites and apps.</p>
                <a
                    href="#about"
                    className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition-colors"
                >
                    Learn More
                </a>
            </motion.div>
        </section>
    );
};
