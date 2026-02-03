import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isDocsPage = location.pathname.startsWith('/docs');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-space-950/90 backdrop-blur-xl border-b border-violet-500/10 shadow-lg shadow-black/20'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xl font-bold text-white hover:text-violet-300 transition-colors group"
                        onClick={scrollToTop}
                    >
                        <img src={`${import.meta.env.BASE_URL}reasonlint-logo.png`} alt="ReasonLint Logo" className="w-8 h-8 rounded-lg transition-transform duration-300 group-hover:scale-105" />
                        ReasonLint
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/#features" className="nav-link text-slate-400 hover:text-white transition-colors">
                            Features
                        </a>
                        <Link
                            to="/docs"
                            className={`nav-link flex items-center gap-1.5 transition-colors ${isDocsPage ? 'text-violet-400' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <BookOpen size={16} />
                            Docs
                        </Link>
                        <a href="/#install" className="nav-link text-slate-400 hover:text-white transition-colors">
                            Install
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-violet-500/10 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-violet-500/10 bg-space-950/95 backdrop-blur-xl rounded-b-2xl">
                        <div className="flex flex-col gap-2">
                            <a
                                href="/#features"
                                className="px-4 py-3 text-slate-400 hover:text-white hover:bg-violet-500/10 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Features
                            </a>
                            <Link
                                to="/docs"
                                className={`px-4 py-3 flex items-center gap-2 rounded-lg transition-colors ${isDocsPage
                                    ? 'text-violet-400 bg-violet-500/10'
                                    : 'text-slate-400 hover:text-white hover:bg-violet-500/10'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <BookOpen size={16} />
                                Docs
                            </Link>
                            <a
                                href="/#install"
                                className="px-4 py-3 text-slate-400 hover:text-white hover:bg-violet-500/10 rounded-lg transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Install
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
