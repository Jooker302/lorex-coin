'use client';
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter,faTelegram } from '@fortawesome/free-brands-svg-icons';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';

export default function Home() {

 
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const aboutSection = document.getElementById('about-section');

    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight / 2);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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



    <section id='intro' className="bg-gray-100 md:py-12">
  <div className="container mx-auto flex flex-col items-center">
    <img src="/cover.jpeg" alt="Banner" className="w-full max-w-lg mb-6 md:max-w-xl lg:max-w-2xl md:w-2/3 md:rounded-lg shadow-lg" />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the world of Lorex</h2>
    <p className="text-gray-600 text-lg text-center">A groundbreaking crypto token that blends innovation and accessibility.</p>
  </div>
</section>



<section
      id="about-section"
      className={`bg-white py-12 px-4 md:px-0 ${isVisible ? 'slide-in active' : 'slide-in'}`}
    >
  <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
    <div className="md:w-1/2 mb-6 md:mb-0 md:px-4">
      <img src="/main.jpeg" alt="About" className="w-full rounded-lg shadow-lg md:ml-44 md:w-72 md:max-w-full" />
    </div>
    <div className="md:w-1/2 md:pl-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About Lorex</h2>
      <p className="text-gray-600"> As a pioneer in the blockchain realm, Lorex offers a decentralized ecosystem where users can transact with ease, transparency, and efficiency. Powered by a vibrant community and driven by technological advancements, Lorex is poised to redefine the way we engage with digital assets. Embrace the future of finance with Lorex and embark on a journey of endless potential.</p>
    </div>
  </div>
</section>


<FeaturesSection/>
<TeamSection/>






    </>
  )
}
