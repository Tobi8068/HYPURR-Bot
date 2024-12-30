import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Explore } from './pages/Explore';
import { Launches } from './pages/Launches';
import { Cabals } from './pages/Cabals';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/launches" element={<Launches />} />
            <Route path="/cabals" element={<Cabals />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}