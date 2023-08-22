'use client';
import Image from 'next/image'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <>
    
    <header className="bg-gray-800 text-white p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div
            className="text-2xl mr-4 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </div>
          <div className="text-xl font-bold">
            <img src='/main.jpeg' className='h-12 w-12' />
          </div>
        </div>
        <div className="flex space-x-4">
        <a className="m-2" href="https://t.me/pinkbird"><FontAwesomeIcon icon={faXTwitter} size="lg" style={{ color: '#ffffff', width: '24px', height: '24px' }} /></a>
        <a className="m-2" href="https://t.me/pinkbird"><FontAwesomeIcon icon={faTelegram} size="lg" style={{ color: '#ffffff', width: '24px', height: '24px' }} /></a>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 bg-gray-800 p-4">
          <ul className="list-none">
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">Menu Item 1</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">Menu Item 2</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">Menu Item 3</a>
            </li>
          </ul>
        </nav>
      )}
    </header>


    </>
  )
}
