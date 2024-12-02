import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'Github' }
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-gray-900 text-white transition-all duration-300"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;