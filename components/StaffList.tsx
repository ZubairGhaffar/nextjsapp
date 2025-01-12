interface StaffMember {
    name: string;
    email: string;
    status: 'Active' | 'Inactive';
    joined: string;
    type: string;
    avatar?: string;
  }
  
  const staffMembers: StaffMember[] = [
    {
      name: 'Olivia Rhye',
      email: 'oliva.rhye@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'GP',
    },
    {
      name: 'Jaxson Smith',
      email: 'jaxon.smith@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'GP',
    },
    {
      name: 'Zaire Siphron',
      email: 'zaire.siphron@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'Nurse Practitioner',
    },
    {
      name: 'Omar Dokidis',
      email: 'omar.dokidis@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'Admin',
    },
    {
      name: 'Terry Septimus',
      email: 'terry.septimus@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'GP',
    },
    {
      name: 'Zain Lubin',
      email: 'zainlubin@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'GP',
    },
    {
      name: 'Davis Franci',
      email: 'davisranic@gmail.com',
      status: 'Inactive',
      joined: '24 Jan, 2023',
      type: 'Practice Manager',
    },
    {
      name: 'Craig Kenter',
      email: 'craig.kenter@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'System Admin',
    },
    {
      name: 'Zaire Aminoff',
      email: 'zaireaminhoff@gmail.com',
      status: 'Active',
      joined: '24 Jan, 2023',
      type: 'Nurse Practitioner',
    },
    {
      name: 'Carter Ekstrom',
      email: 'davisranic@gmail.com',
      status: 'Inactive',
      joined: '24 Jan, 2023',
      type: 'GP',
    },
  ];
  
  export default function StaffList() {
    return (
      <div className="bg-white rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Users
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Joined at
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Type
              </th>
              <th className="px-6 py-3 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {staffMembers.map((member, index) => (
              <tr key={index} className="hover:bg-gray-50 group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative group-hover:opacity-90">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        {member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : null}
                      </div>
                      <label className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-black bg-opacity-40 cursor-pointer rounded-full">
                        <span className="text-white text-xs">Edit</span>
                        <input type="file" className="hidden" accept="image/*" />
                      </label>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full 
                      ${
                        member.status === 'Active'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-100 text-red-700'
                      }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{member.joined}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{member.type}</td>
                <td className="px-6 py-4 text-right">
                  <div className="relative group">
                    <button className="text-gray-600 font-bold text-lg">...</button>
                    <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="py-1">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                          Assign Job
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                          Send Invite
                        </a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">Page 1 of 10</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
  