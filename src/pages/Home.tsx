import { Link } from 'react-router-dom';
import { Terminal, Calculator, Network } from 'lucide-react';

export function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-charcoal mb-6">Network Tools</h1>
      <p className="text-xl text-skyblue mb-8">
        A collection of nifty things.
      </p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/memory-parser"
          className="block p-6 bg-yankees rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:bg-charcoal-light"
        >
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-12 h-12 text-skyblue" />
          </div>
          <h2 className="text-2xl font-semibold text-platinum mb-2">Memory Parser</h2>
          <p className="text-skyblue">
            Parse and analyze Cisco device memory information
          </p>
        </Link>

        <Link
          to="/subnet-calculator"
          className="block p-6 bg-yankees rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:bg-charcoal-light"
        >
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-12 h-12 text-skyblue" />
          </div>
          <h2 className="text-2xl font-semibold text-platinum mb-2">Subnet Calculator</h2>
          <p className="text-skyblue">
            Calculate network ranges and divide subnets
          </p>
        </Link>

        <Link
          to="/port-lookup"
          className="block p-6 bg-yankees rounded-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:bg-charcoal-light"
        >
          <div className="flex items-center justify-center mb-4">
            <Network className="w-12 h-12 text-skyblue" />
          </div>
          <h2 className="text-2xl font-semibold text-platinum mb-2">Port Lookup</h2>
          <p className="text-skyblue">
            Search well-known ports and services
          </p>
        </Link>
      </div>
    </div>
  );
}