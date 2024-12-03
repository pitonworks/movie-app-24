import React from 'react';
import { Film, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'About Us': ['Company', 'Careers', 'Press'],
    'Support': ['Help Center', 'Contact Us', 'Gift Cards'],
    'Legal': ['Terms of Use', 'Privacy Policy', 'Cookie Preferences'],
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Youtube, label: 'Youtube' },
  ];

  return (
    <footer className="mt-20 border-t border-gray-800 bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-2">
          <Film className="h-8 w-8 text-red-600" />
          <span className="text-2xl font-bold text-white">MovieStream</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} MovieStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}