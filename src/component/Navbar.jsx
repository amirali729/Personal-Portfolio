import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Rocket, User, Mail } from 'lucide-react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', icon: Home, label: 'home' },
        { id: 'skills', icon: Briefcase, label: 'Skills' },
        { id: 'experience', icon: User, label: 'Experience' },
        { id: 'projects', icon: Rocket, label: 'Projects' }
    ];

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center py-4">
                    <div className="flex items-center gap-2 sm:gap-4 bg-gray-800/50 backdrop-blur-lg rounded-full px-4 sm:px-6 py-3 border border-gray-700">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`group relative p-2 sm:p-3 rounded-full transition-all duration-300 ${isActive
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                                        }`}
                                    aria-label={item.label}
                                >
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />

                                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;