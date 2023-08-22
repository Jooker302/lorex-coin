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



    <section className="bg-gray-100 md:py-12">
  <div className="container mx-auto flex flex-col items-center">
    <img src="/cover.jpeg" alt="Banner" className="w-full max-w-lg mb-6 md:max-w-xl lg:max-w-2xl md:w-2/3 md:rounded-lg shadow-lg" />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the world of Lorex</h2>
    <p className="text-gray-600 text-lg text-center">A groundbreaking crypto token that blends innovation and accessibility.</p>
  </div>
</section>




    </>
  )
}
