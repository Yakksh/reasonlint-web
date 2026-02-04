
export const Footer = () => {
    return (
        <footer className="relative bg-space-950 border-t border-violet-500/10 py-12 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-radial from-violet-500/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}reasonlint-logo.png`} alt="ReasonLint Logo" className="w-6 h-6 rounded-md" />
                        <span className="font-semibold text-white">ReasonLint</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-sm text-slate-500">by Octapehar</span>
                    </div>

                    {/* Copyright */}
                    <p className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} Octapehar
                    </p>
                </div>
            </div>
        </footer>
    );
};