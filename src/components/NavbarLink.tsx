// src/components/NavbarLink.tsx
import { useState, useEffect } from 'react';

interface NavbarLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
    className?: string;
}

export const NavbarLink = ({ href, label, onClick, className = '' }: NavbarLinkProps) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const checkIfActive = () => {
            // Get the current hash or default to '#home'
            const currentHash = window.location.hash || '#home';
            setIsActive(currentHash === href);
        };

        // Check initially
        checkIfActive();

        // Add event listener for hash changes
        window.addEventListener('hashchange', checkIfActive);
        
        // Add scroll event listener to detect current section
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id], div[id]');
            let currentActiveSection = '';
            
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const sectionId = section.getAttribute('id');
                
                // If section is in viewport (with some offset)
                if (sectionTop <= 100 && sectionTop >= -section.clientHeight + 100) {
                    currentActiveSection = '#' + sectionId;
                }
            });
            
            // Only set active if this link matches the current section
            if (currentActiveSection && currentActiveSection === href) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => {
            window.removeEventListener('hashchange', checkIfActive);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [href]);

    return (
        <a
            href={href}
            className={`navbar-link relative font-medium transition-colors duration-300 ${
                isActive 
                    ? 'text-primary active' 
                    : 'text-foreground/80 hover:text-primary'
            } ${className}`}
            onClick={(e) => {
                // Smooth scroll to section
                const element = document.querySelector(href);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                    // Update URL without reload
                    window.history.pushState(null, '', href);
                    
                    // Reset all other links' active states
                    document.querySelectorAll('.navbar-link').forEach((link) => {
                        link.classList.remove('active');
                    });
                    
                    // Set this link as active
                    e.currentTarget.classList.add('active');
                    setIsActive(true);
                }
                // Call additional onClick handler if provided
                if (onClick) onClick();
            }}

        >
            {label}
            {/* Animated underline effect for desktop only */}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transform origin-left transition-transform duration-300 md:block hidden
                ${isActive ? 'w-full scale-x-100' : 'w-full scale-x-0'}`}
            />
        </a>
    );
};