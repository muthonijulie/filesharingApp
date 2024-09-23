import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-indigo-700 w-full p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">MyApp</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
        <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
        <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar