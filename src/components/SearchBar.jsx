
// import React, { useState } from 'react'

// const SearchBar = ({setUsername}) => {

//   const [inputName, setInputName] = useState("")

//   const handleSubmit = (e) => {
//       e.preventDefault()

//       if(!inputName.trim())
//       {
//          return setInputName("")
//       }

//       setUsername(inputName)
//       setInputName("") // Remove value from search bar after search
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//           <input 

//              className='border p-2 rounded'
//              type='text'
//              value={inputName}
//              placeholder='Enter username'
//              onChange={(e) => setInputName(e.target.value)}
//           />

//           <button type='submit'>Search</button>
//       </form>
//     </div>
//   )
// }

// export default SearchBar 

import React, { useState } from 'react'

const SearchBar = ({ setUsername }) => {

  const [inputName, setInputName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!inputName.trim()) {
      return setInputName("")
    }

    setUsername(inputName)
    setInputName("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <input
        className="w-full sm:w-87.5 border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-black"
        type="text"
        value={inputName}
        placeholder="Enter GitHub username"
        onChange={(e) => setInputName(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar