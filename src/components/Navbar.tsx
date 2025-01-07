import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-primary">
            Usaha Mikro Kecil dan Menengah<span className="text-secondary"> QBIT</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
              >
                <Menu size={24} />
                <span>Menu</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-secondary hover:bg-primary hover:text-white transition-colors"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* GitHub & Instagram */}
            <a href="https://github.com/ADRIANHHALIM/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-secondary hover:text-primary transition-colors" />
            </a>
            <a href="https://www.instagram.com/adrianhhalim/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="text-secondary hover:text-primary transition-colors" />
            </a>

            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              <img
                src="./img/profil.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-up">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-secondary hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.label}
              </a>
            ))}
            {/* GitHub & Instagram */}
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://github.com/ADRIANHHALIM/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="text-secondary hover:text-primary transition-colors" />
              </a>
              <a href="https://www.instagram.com/adrianhhalim/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-secondary hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
