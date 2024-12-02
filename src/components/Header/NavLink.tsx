import React from 'react';
import { clsx } from 'clsx';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive }: NavLinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        'text-white hover:text-[#AFEEEE] transition-colors relative py-2',
        isActive && 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#AFEEEE]'
      )}
    >
      {children}
    </a>
  );
}