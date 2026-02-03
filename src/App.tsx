import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DocsLayout } from './components/docs/DocsLayout';
import { DocsOverview } from './pages/DocsOverview';
import { DocsQuickStart } from './pages/DocsQuickStart';
import { DocsCommands } from './pages/DocsCommands';
import { DocsConfig } from './pages/DocsConfig';
import { DocsRisks } from './pages/DocsRisks';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <div className="min-h-screen bg-space-950 text-slate-200 selection:bg-violet-500/30 selection:text-white">
                <Routes>
                    {/* Home / Landing Page */}
                    <Route path="/" element={<Home />} />

                    {/* Documentation Section */}
                    <Route path="/docs" element={<DocsLayout />}>
                        <Route index element={<DocsOverview />} />
                        <Route path="quickstart" element={<DocsQuickStart />} />
                        <Route path="commands" element={<DocsCommands />} />
                        <Route path="config" element={<DocsConfig />} />
                        <Route path="risks" element={<DocsRisks />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;