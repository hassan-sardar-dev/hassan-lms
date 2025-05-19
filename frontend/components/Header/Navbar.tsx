import { useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgCross } from 'react-icons/cg';
import { Button } from '../ui/button';
import Link from 'next/link';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0A19] shadow-md ' : 'py-2'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="h-8 w-auto flex items-center text-indigo-600 font-bold text-xl">
                            <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Learn AI</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link href="/register" >
                            <Button
                                className="ml-8 cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md transform "
                            >
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? (
                                <CgCross className="h-6 w-6" />
                            ) : (
                                <BiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0B0A19] text-white shadow-lg rounded-b-lg mx-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 hover:bg-[#6d6b91] transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/register">
                        <Button
                            className="w-full mt-2 px-4 py-2 rounded-lg bg-indigo-600 text-gray-800 text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}