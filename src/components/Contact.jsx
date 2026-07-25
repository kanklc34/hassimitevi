import { PhoneIcon, PinIcon, ClockIcon } from './Icons';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

const MAPS_URL = 'https://share.google/hSceYs1J2Lq4SIZQT';
const PHONE_DISPLAY = '0542 412 76 91';
const PHONE_TEL = '05424127691';

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section className="contact" id="iletisim">
      <div ref={ref} className={`container contact-inner reveal ${visible ? 'is-visible' : ''}`}>
        <div className="contact-copy">
          <p className="eyebrow">SİPARİŞ VE İLETİŞİM</p>
          <h2 className="contact-title">
            Masadan kalkmadan sipariş verin, ya da bizi arayın
          </h2>
          <p className="contact-sub">
            Toplu siparişler, doğum günü kutlamaları ya da sadece bugünün
            taze poğaçasını sormak için — tek yapmanız gereken aramak.
          </p>
          <a className="btn-primary contact-call" href={`tel:${PHONE_TEL}`}>
            <PhoneIcon size={18} /> {PHONE_DISPLAY}
          </a>
        </div>

        <div className="ticket" aria-label="Fırın bilgi fişi">
          <div className="ticket-notch ticket-notch-top" aria-hidden="true" />

          <div className="ticket-row">
            <PinIcon size={18} />
            <div>
              <span className="ticket-label">Konum</span>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="ticket-link">
                Google Haritalar'da aç
              </a>
            </div>
          </div>

          <div className="ticket-row">
            <PhoneIcon size={18} />
            <div>
              <span className="ticket-label">Telefon</span>
              <a href={`tel:${PHONE_TEL}`} className="ticket-link">{PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="ticket-row">
            <ClockIcon size={18} />
            <div>
              <span className="ticket-label">Çalışma Saatleri</span>
              <span className="ticket-value">Her gün 06:00 – 22:00</span>
            </div>
          </div>

          <div className="ticket-notch ticket-notch-bottom" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
