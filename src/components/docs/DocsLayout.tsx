import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { DocsSidebar } from './DocsSidebar';

export const DocsLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-space-950 pt-24 pb-16 relative">
                {/* Subtle background effects */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-violet-500/5 via-transparent to-transparent pointer-events-none" />

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="flex gap-12">
                        <DocsSidebar />
                        <main className="flex-1 min-w-0">
                            <article className="prose prose-invert prose-slate max-w-none
                prose-headings:text-white
                prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
                prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-violet-500/20 prose-h2:pb-2
                prose-h3:text-xl prose-h3:font-medium prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-300 prose-p:leading-relaxed
                prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300 hover:prose-a:underline
                prose-strong:text-white
                prose-code:text-slate-200 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-ul:text-slate-300 prose-li:text-slate-300
                prose-table:border-collapse prose-table:w-full
                prose-th:bg-space-800 prose-th:text-slate-200 prose-th:text-left prose-th:p-3 prose-th:border prose-th:border-violet-500/20
                prose-td:p-3 prose-td:border prose-td:border-violet-500/20 prose-td:text-slate-300
                prose-pre:bg-space-900 prose-pre:border prose-pre:border-violet-500/20 prose-pre:rounded-xl
              ">
                                <Outlet />
                            </article>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
