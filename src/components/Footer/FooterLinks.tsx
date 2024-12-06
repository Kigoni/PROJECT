import React from 'react';

interface LinkGroup {
  title: string;
  links: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
}

const FooterLinks: React.FC<{ group: LinkGroup }> = ({ group }) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-black">{group.title}</h3>
      <ul className="flex flex-col gap-3">
        {group.links.map(({ label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-black hover:text-primary transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;