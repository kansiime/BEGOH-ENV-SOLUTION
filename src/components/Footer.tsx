import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ]

  const servicesLinks = [
    { name: 'Occupational Health & Safety', href: '/services#occupational-health' },
    { name: 'Environmental Management', href: '/services#environmental-management' },
    { name: 'Water Resource Management', href: '/services#water-resource' },
    { name: 'Biogas Solutions', href: '/services#biogas' },
    { name: 'GIS & Mapping', href: '/services#gis' },
    { name: 'Waste Management', href: '/services#waste-management' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/images/logo.png" 
                alt="BEGOH ENV-SOLUTION Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Providing sustainable environmental, health and safety engineering services across Uganda.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p>Plot 38 Robert Mugabe Road, Mbuya</p>
              <p>P.O.Box 2560 Kampala, Uganda</p>
              <p>
                <Link href="mailto:begohenvsolutionltd@gmail.com" className="hover:text-white">
                  begohenvsolutionltd@gmail.com
                </Link>
              </p>
              <p>
                <Link href="tel:+256755861873" className="hover:text-white">
                  +256 755 861873
                </Link>
              </p>
              <p>
                <Link href="tel:+256783427719" className="hover:text-white">
                  +256 783 427719
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BEGOH ENV-SOLUTION LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer