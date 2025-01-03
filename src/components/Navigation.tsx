import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { SunIcon } from '@heroicons/react/24/outline';
import { TbBrandTelegram } from "react-icons/tb";
import Logo from '../assets/react.svg';

const navItems = [
  { name: 'Explore', path: '/' },
  { name: 'Launches', path: '/launches' },
  { name: 'Cabals', path: '/cabals' }
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="w-full flex items-center h-16 px-8 border-b border-gray-200 bg-white">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 w-8" />
      </Link>
      
      <div className="flex space-x-4 ml-8">
        {navItems.map(item => (
          <Link
            key={item.name}
            to={item.path}
            className={clsx(
              'px-3 py-2 text-sm font-medium',
              location.pathname === item.path
                ? 'text-emerald-600 bg-emerald-50 border-l-4 border-emerald-600'
                : 'text-gray-600 hover:text-gray-900'
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-gray-900">
          <SunIcon className="w-5 h-5" />
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <TbBrandTelegram className="w-4 h-4"/>
          Log in with Telegram
        </button>
      </div>
    </nav>
  );
}