import { PhoneIcon } from './Icons';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#" className="brand">
          <img src={`${import.meta.env.BASE_URL}logo-mark.png`} alt="" className="brand-mark" width="46" height="20" />
          <span>HAS SİMİT EVİ</span>
        </a>
        <nav className="site-nav">
          <a href="#menu">Menü</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="btn-ghost header-call" href="tel:05424127691">
          <PhoneIcon size={16} /> Ara
        </a>
      </div>
    </header>
  );
}
