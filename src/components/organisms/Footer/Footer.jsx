// Footer.jsx
import { FooterLogo } from '@/components/atoms/Footer/FooterLogo';
import { IconosSocialesFooter } from '@/components/molecules/IconosSocialesFooter/IconosSocialesFooter';
import { FooterText } from '@/components/atoms/Footer/FooterText';

export const Footer = () => {
  return (
    <footer className="bg-white">
      <hr className="mt-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:mt-8" />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between">
          {/* Columna izquierda */}
          <div className="flex flex-col items-start space-y-2">
            <FooterLogo />
            <FooterText />
          </div>

          {/* Columna derecha */}
          <div className="mb-4 sm:mb-0">
            <IconosSocialesFooter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
