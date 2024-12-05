import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

interface NavLinkProps {
  to: string; // Change href to to
  isActive?: boolean;
  className?: string; // Add className prop
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, isActive, className, children }) => {
  return (
    <Link
      to={to}
      className={clsx(
        'text-white hover:text-[#AFEEEE] transition-colors relative py-2',
        isActive && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#AFEEEE]',
        className
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
