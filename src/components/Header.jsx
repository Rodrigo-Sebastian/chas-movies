import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="flex flex-row justify-between p-4 lg:py-4 uppercase bg-black">
        <Link to="/" className="text-lg text-white lg:ml-40 transition duration-300 ease-in-out hover:text-blue-400">Hem</Link>
        <Link to="/favorites" className="text-lg text-white lg:mr-40 transition duration-300 ease-in-out hover:text-blue-400">Favoriter</Link>
    </nav>
  )
}

export default Header