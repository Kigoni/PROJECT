import React from 'react';
import { clsx } from 'clsx';

interface NavLinkProps {
  href: string;
  isActive?: boolean;
  className?: string; // Add className prop
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, className, children }) => {
  return (
    <a
      href={href}
      className={clsx(
        'text-white hover:text-[#AFEEEE] transition-colors relative py-2',
        isActive && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#AFEEEE]',
        className
      )}
    >
      {children}
    </a>
  );
};

export default NavLink;
