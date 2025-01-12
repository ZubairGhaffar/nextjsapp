export default function Header() {
    return (
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex justify-between items-center">
          {/* Left side - Greeting */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Good morning,</span>
            <span className="text-xl">Richelle</span>
          </div>
  
          {/* Right side - Time, Weather, Search, Profile */}
          <div className="flex items-center gap-6">
            {/* Time and Weather Group */}
            <div className="flex items-center gap-6">
              {/* Time/Date Stack */}
              <div className="flex flex-col items-end">
                <span className="text-base font-semibold">08:35 PM</span>
                <span className="text-sm text-gray-500">Fri, 18 Oct</span>
              </div>
  
              {/* Weather Stack */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="text-base font-semibold">12</span>
                  <span className="text-gray-500">°C</span>
                  <span className="text-xl">☀️</span>
                </div>
              </div>
            </div>
  
            {/* Search */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="w-[200px] px-4 py-2 pl-9 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
  
            {/* K Badge */}
            <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md">
              <span className="text-gray-700">K</span>
            </div>
  
            {/* Notification */}
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
  
            {/* Profile Picture */}
            <button className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="/icons/oliviarhye.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }