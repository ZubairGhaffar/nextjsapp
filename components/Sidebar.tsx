const menuItems = [
  { id: 1, label: 'Settings', icon: '⚙️' },
  { id: 2, label: 'Profile', icon: '👤' },
  { id: 3, label: 'Staff', icon: '👥', isActive: true },
  { id: 4, label: 'Clinics', icon: '🏥' },
  { id: 5, label: 'Job Settings', icon: '📋' },
  { id: 6, label: 'Lookup Values', icon: '🔍' },
];

export default function Sidebar() {
  return (
    <aside className="h-full">
      <nav className="px-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`px-3 py-2 rounded-lg mb-1 flex items-center gap-3 cursor-pointer 
              ${item.isActive 
                ? 'bg-purple-50 text-purple-600' 
                : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <span>{item.icon}</span>
            <span className={item.isActive ? 'font-medium' : ''}>
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}