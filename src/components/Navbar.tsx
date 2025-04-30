'use client';

import { useState, useEffect } from 'react';
import { NavbarLink } from './NavbarLink';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on outside click
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClickOutside = (e: MouseEvent) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('menu-button');

            if (
                menu && !menu.contains(e.target as Node) &&
                button && !button.contains(e.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    // Lock scroll on menu open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full transition-all duration-300 ${scrolled ? 'backdrop-blur-lg bg-background/90 shadow-md py-2' : 'bg-transparent py-4'
                    }`}
            >
                <nav className="container mx-auto flex items-center justify-between px-6">
                    <div className="text-2xl font-bold">
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Saurabh</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="items-center gap-8 md:flex hidden">
                        <NavbarLink href="#home" label="Home" />
                        <NavbarLink href="#about" label="About" />
                        <NavbarLink href="#projects" label="Projects" />
                        <NavbarLink href="#contact" label="Contact" />

                        <Button className="bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-all"
                            onClick={() => {
                                window.open("https://drive.google.com/file/d/1gvfDYzp7g4gVAz0hcyFVtnNDbb0XzKf6/view?usp=drive_link", "_blank");
                                setIsMenuOpen(false);
                            }}
                        >
                            Resume
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <Button
                        id="menu-button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden hover:bg-primary/20"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </nav>
            </header>

            {/* Conditional Mobile Menu Backdrop */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden">
                    <div
                        id="mobile-menu"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            bg-background rounded-xl shadow-2xl w-4/5 max-w-sm p-6
                            flex flex-col items-center animate-fade-in"
                    >
                        <div className="flex flex-col items-center gap-6 w-full">
                            <div className="w-12 h-1 bg-primary/20 rounded-full mb-2"></div>

                            {['Home', 'About', 'Projects', 'Contact'].map((label) => (
                                <NavbarLink
                                    key={label}
                                    href={`#${label.toLowerCase()}`}
                                    label={label}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg py-3 w-full text-center hover:bg-primary/10 rounded-lg transition-colors"
                                />
                            ))}

                            <Button
                                className="w-full mt-4 bg-gradient-to-r from-primary to-blue-500 hover:opacity-90 transition-all"
                                onClick={() => {
                                    window.open("https://drive.google.com/file/d/1gvfDYzp7g4gVAz0hcyFVtnNDbb0XzKf6/view?usp=drive_link", "_blank");
                                    setIsMenuOpen(false);
                                }}
                            >
                                Resume
                            </Button>


                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
