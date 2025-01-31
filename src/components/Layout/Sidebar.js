import React from 'react';
import { Home, Search, Compass, Film, Mail, Heart, PlusSquare, User } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Search' },
    { icon: Compass, label: 'Explore' },
    { icon: Film, label: 'Reels' },
    { icon: Mail, label: 'Messages' },
    { icon: Heart, label: 'Notifications' },
    { icon: PlusSquare, label: 'Create' },
    { icon: User, label: 'Profile' },
  ];

  return (
    <nav>
      <ul className="space-y-1">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href="#" className="flex items-center gap-4 px-3 py-3 text-base rounded-lg hover:bg-gray-50">
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;