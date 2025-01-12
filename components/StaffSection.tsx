export default function StaffSection() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Staff Heading with Icon */}
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-md">
            <img
              src="icons/info.png" // Replace with your actual image path
              alt="Staff Icon"
              className="w-4 h-4" // Adjust size inside the square
            />
          </div>
          Staff
        </h2>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, email, phone"
              className="w-[320px] px-4 py-2 pl-10 border border-gray-300 rounded-lg"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>

          {/* Active Filter */}
          <div className="px-3 py-1 bg-gray-100 rounded-md text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Active</span>
          </div>

          {/* Add Button */}
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700">
            <span>+</span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
