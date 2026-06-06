import React, { useState } from 'react'
import SearchBar from "./components/SearchBar"
import UserCard1 from "./components/UserCard1"

const App = () => {

  const [userName, setUsername] = useState("")
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto p-4 md:p-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            GitHub User Finder
          </h1>

          <button
            className="px-5 py-2 rounded-lg border shadow-md hover:scale-105 transition"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Search */}
        <SearchBar setUsername={setUsername} />

        {/* User Card */}
        <UserCard1 userName={userName} />
      </div>
    </div>
  )
}

export default App