// FooterIcon.jsx
export const FooterIcon = ({ href, children }) => (
  <a href={href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
    {children}
  </a>
);
