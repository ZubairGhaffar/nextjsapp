import React from 'react';

const iconItems = [
  { id: 1, label: 'Settings', icon: '/icons/icon1.png' },
  { id: 2, label: 'Profile', icon: '/icons/icon2.png' },
  { id: 3, label: 'Staff', icon: '/icons/icon3.png' },
  { id: 4, label: 'Clinics', icon: '/icons/icon4.png' },
  { id: 5, label: 'Job Settings', icon: '/icons/icon5.png' },
  { id: 6, label: 'Lookup Values', icon: '/icons/icon6.jpg' },
  { id: 7, label: 'Analytics', icon: '/icons/icon7.webp' },
  { id: 8, label: 'Schedule', icon: '/icons/icon8.jpg' }
];

const IconSidebar = () => {
  return (
    <aside className="w-20 min-h-screen bg-white border-r border-gray-200 flex flex-col justify-between py-8">
      {/* Icon Navigation */}
      <div className="flex flex-col items-center space-y-6">
        {iconItems.map((item) => (
          <div
            key={item.id}
            className={`relative group cursor-pointer p-2 rounded-lg hover:bg-purple-100 transition-colors duration-200`}
          >
            <img
              src={item.icon}
              alt={item.label}
              className={`w-6 h-6 group-hover:opacity-75 transition-opacity duration-200`}
            />
            <div className="absolute left-full ml-2 hidden group-hover:block z-50">
              <div className="bg-purple-800 text-white text-sm px-2 py-1 rounded shadow-lg">
                {item.label}
              </div>
            </div>
            <div className="absolute inset-0 rounded-lg group-hover:ring-2 group-hover:ring-purple-400 transition-all duration-200"></div>
          </div>
        ))}
      </div>

      {/* Profile Picture */}
      <div className="px-4">
        <button className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden hover:ring-2 hover:ring-purple-600 transition-all duration-200">
          <img 
            src="/icons/oliviarhye.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </aside>
  );
};

export default IconSidebar;