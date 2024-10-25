import { Terminal, Calculator, Home as HomeIcon, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <HomeIcon className="w-6 h-6" />
              <span className="font-semibold">Home</span>
            </Link>
            <Link to="/memory-parser" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <Terminal className="w-6 h-6" />
              <span className="font-semibold">Memory Parser</span>
            </Link>
            <Link to="/subnet-calculator" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <Calculator className="w-6 h-6" />
              <span className="font-semibold">Subnet Calculator</span>
            </Link>
            <Link to="/port-lookup" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <Network className="w-6 h-6" />
              <span className="font-semibold">Port Lookup</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}