// FooterLogo.jsx
import logoObserva from '@/assets/img/logo_observa_color.png';
import logoCer from '@/assets/img/logo_cer_uach_negro.png';
import logoCrdp from '@/assets/img/crdp.png';
import logoGore from '@/assets/img/gore.png';

export const FooterLogo = () => (
  <div className="flex items-center gap-3 flex-wrap">
    <a href="https://ceruach.cl/" className="flex items-center">
      <img src={logoObserva} className="h-10 w-auto" alt="Observa Logo" />
    </a>
    <a href="https://www.goredelosrios.cl/" className="flex items-center">
      <img src={logoGore} className="h-10 w-auto" alt="Gore Logo" />
    </a>
    <a href="https://corporacionlosrios.cl/" className="flex items-center">
      <img src={logoCrdp} className="h-12 w-auto" alt="CRDP Logo" />
    </a>
    <a href="https://ceruach.cl/" className="flex items-center">
      <img
        src={logoCer}
        className="h-14 w-auto"
        alt="CER UACh Logo"
      />
    </a>
  </div>
);
