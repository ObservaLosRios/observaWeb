// FooterSocialIcons.jsx
import { FooterIcon } from '@/components/atoms/Footer/FooterIcon';
import { FaFacebook, FaLinkedin, FaTwitter, FaLink, FaInstagram } from 'react-icons/fa';

export const IconosSocialesFooter = () => (
  <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <FooterIcon href="https://www.facebook.com/CERUACh"><FaFacebook className="w-4 h-4" /></FooterIcon>
    <FooterIcon href="https://www.instagram.com/cer_uach/"><FaInstagram className="w-4 h-4" /></FooterIcon>
    <FooterIcon href="https://x.com/CerUach"><FaTwitter className="w-4 h-4" /></FooterIcon>
    <FooterIcon href="https://www.linkedin.com/company/cer-uach/posts/?feedView=all"><FaLinkedin className="w-4 h-4" /></FooterIcon>
    <FooterIcon href="https://linktr.ee/cer_uach"><FaLink className="w-4 h-4" /></FooterIcon>
  </div>
);
