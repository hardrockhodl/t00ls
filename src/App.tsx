import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { MemoryParser } from './pages/MemoryParser';
import { SubnetCalculator } from './pages/SubnetCalculator';
import { PortLookup } from './pages/PortLookup';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-thundra">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memory-parser" element={<MemoryParser />} />
            <Route path="/subnet-calculator" element={<SubnetCalculator />} />
            <Route path="/port-lookup" element={<PortLookup />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}