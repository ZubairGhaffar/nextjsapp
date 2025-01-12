const ProfileComponent = ({ variant = 'full' }) => {
    return (
      <div className={`flex items-center gap-3 ${variant === 'icon' ? 'justify-center p-2' : 'p-3'}`}>
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/api/placeholder/32/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {variant === 'full' && (
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 truncate">Richelle</div>
            <div className="text-xs text-gray-500 truncate">richelle@gmail.com</div>
          </div>
        )}
      </div>
    );
  };