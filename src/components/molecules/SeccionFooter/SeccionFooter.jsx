// FooterSection.jsx
import { FooterTitle } from '@/components/atoms/Footer/FooterTitle';
import { FooterLink } from '@/components/atoms/Footer/FooterLink';

export const SeccionFooter = ({ title, links }) => (
  <div>
    <FooterTitle>{title}</FooterTitle>
    <ul className="text-gray-500 dark:text-gray-400 font-medium">
      {links.map((link, index) => (
        <li key={index} className="mb-4">
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);
