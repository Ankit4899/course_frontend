import { useState } from "react";

export default function Navbar({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-blue-900/40 bg-[#050a18] sticky top-0 z-50">
      <div>
        <p className="text-gray-400 text-sm">Welcome</p>
        <h1 className="text-xl font-semibold">
          {user?.name || "Student"}
        </h1>
      </div>

      {/* PROFILE */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold"
        >
          {(user?.name || "S")[0]}
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-[#0b1228] border border-blue-900/40 rounded-lg shadow-lg">
            <button
              onClick={onLogout}
              className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-600 hover:text-white rounded-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
