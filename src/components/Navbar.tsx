'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="BEGOH ENV-SOLUTION Logo" 
            width={180} 
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${pathname === link.href ? 'text-green-600 font-medium' : 'text-gray-700 hover:text-green-500'} transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden p-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${pathname === link.href ? 'text-green-600 font-medium' : 'text-gray-700'} px-4 py-2 rounded-md`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar