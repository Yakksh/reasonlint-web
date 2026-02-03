import { NavLink } from 'react-router-dom';
import {
    Rocket,
    Terminal,
    Settings,
    AlertTriangle,
    BookOpen
} from 'lucide-react';

const navItems = [
    { to: '/docs', icon: BookOpen, label: 'Overview', end: true },
    { to: '/docs/quickstart', icon: Rocket, label: 'Quick Start' },
    { to: '/docs/commands', icon: Terminal, label: 'Commands' },
    { to: '/docs/config', icon: Settings, label: 'Configuration' },
    { to: '/docs/risks', icon: AlertTriangle, label: 'Risk Taxonomy' },
];

export const DocsSidebar = () => {
    return (
        <aside className="w-64 shrink-0 hidden lg:block">
            <nav className="sticky top-24 space-y-1">
                {navItems.map(({ to, icon: Icon, label, end }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                ? 'bg-violet-500/15 text-violet-300 border-l-2 border-violet-400 shadow-lg shadow-violet-500/5'
                                : 'text-slate-400 hover:text-white hover:bg-violet-500/5 hover:pl-5'
                            }`
                        }
                    >
                        <Icon size={18} />
                        {label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};
