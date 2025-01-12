import React from 'react';
import IconSidebar from './IconSidebar';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left icon sidebar wrapper */}
      <div className="flex flex-col w-20">
        {/* Logo left part */}
        <div className="h-24 bg-white flex items-center justify-center">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">C</span>
          </div>
        </div>
        {/* Icon sidebar content */}
        <div className="flex-1 bg-white border-r border-gray-200 ">
          <IconSidebar />
        </div>
      </div>

      {/* Main sidebar wrapper */}
      <div className="flex flex-col w-[var(--sidebar-width)]">
        {/* Logo and Capsule text */}
        <div className="h-24 bg-white flex items-center px-4">
          <span className="font-bold text-gray-900 text-3x1"style={{ fontSize: '2rem' }} >Capsule</span>
        </div>
        {/* Main sidebar content */}
        <div className="flex-1 bg-white border-r border-gray-200 pt-8">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
