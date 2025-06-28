import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, } from 'lucide-react';
import ModeToggle from './theme-button';
import Favicon from "@/AS.svg"
export default function ResponsiveNavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const location = useLocation();


    const navItems = [
        { name: 'Portfolio', path: '/portfolio' },


        { name: 'Journal', path: '/journal' }
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-between px-6 py-4 border-b  bg-background/50 backdrop-blur-lg w-full">
                {/* Left - Logo */}
                <Link to="/" className="text-xl font-bold">
                    <img src={Favicon} alt="" className="invert dark:invert-0" />
                </Link>
                {/* Center - Navigation Links */}
                <div className="flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`text-sm transition-opacity hover:opacity-70 ${location.pathname === item.path ? 'font-semibold underline' : ''
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <ModeToggle />
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden  bg-background/80 backdrop-blur-lg w-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    {/* Left - Logo */}
                    <Link to="/" className="text-xl font-bold">
                        AS
                    </Link>

                    {/* Right - Theme Toggle and Menu Button */}
                    <div className="flex items-center space-x-3">
                        <ModeToggle />

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="border-t bg-white">
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block py-3 px-3 rounded hover:bg-gray-100 transition-colors ${location.pathname === item.path ? 'font-semibold bg-gray-50' : ''
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}