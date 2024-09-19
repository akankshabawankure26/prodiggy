import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
        <nav className="bg-gradient-to-r from bg-purple-900 p-4 mb-0 fixed w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">
              Pro-Diggy School
            </div>
  
            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
  
            {/* Navigation Links */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
              <ul className="md:flex md:space-x-6">
                <li>
                  <Link to={'/'} className='block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/about'} className='block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={'/program'} className='block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'>
                    Program
                  </Link>
                </li>
                <li>
                  <Link to={'/events'} className='block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'>
                    Events
                  </Link>
                </li>
                <li>
                  <Link to={'/admission'} className='block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'>
                    Admission
                  </Link>
                </li>
                <li>
                  <Link to={'/contact'} className='block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar