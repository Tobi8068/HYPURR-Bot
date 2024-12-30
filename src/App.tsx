import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Explore } from './pages/Explore';
import { Launches } from './pages/Launches';
import { Cabals } from './pages/Cabals';

export default function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-green-100 flex flex-col relative justify-center items-center">
        <Navigation />
        <main className="w-full px-8 py-8 bg-green-100 flex-grow overflow-hidden relative h-[calc(100vh-64px)]">
          <div className="absolute inset-y-0 right-1/2 z-0 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white
           dark:bg-slate-900 ring-1 ring-green-50 dark:ring-green-400 sm:-mr-80 lg:-mr-48"></div>
          <div className='z-10 relative'>
            <Routes>
              <Route path="/" element={<Explore />} />
              <Route path="/launches" element={<Launches />} />
              <Route path="/cabals" element={<Cabals />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}