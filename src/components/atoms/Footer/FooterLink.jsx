// FooterLink.jsx
export const FooterLink = ({ href, children }) => (
  <a href={href} className="hover:underline text-gray-600 dark:text-gray-400">
    {children}
  </a>
);
