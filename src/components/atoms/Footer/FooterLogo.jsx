// FooterLogo.jsx
import logoObserva from '@/assets/img/logo_observa_color.png';
import logoCer from '@/assets/img/logo_cer_uach_negro.png';
import logoCrdp from '@/assets/img/crdp.png';
import logoGore from '@/assets/img/gore.png';

export const FooterLogo = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <a href="https://ceruach.cl/" className="flex items-center">
      <img src={logoObserva} className="w-35 h-auto mb-0" alt="Observa Logo" />
    </a>
    <a href="https://www.goredelosrios.cl/" className="flex items-center">
      <img src={logoGore} className="w-30 h-auto mb-0" alt="Gore Logo" />
    </a>
    <a href="https://corporacionlosrios.cl/" className="flex items-center">
      <img src={logoCrdp} className="w-50 h-auto mb-0" alt="CRDP Logo" />
    </a>
    <a href="https://ceruach.cl/" className="flex items-center">
      <img
        src={logoCer}
        className="w-60 h-auto mb-0"
        alt="CER UACh Logo"
      />
    </a>
  </div>
);
