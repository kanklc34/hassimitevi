import { SimitIcon, PogacaIcon, KekIcon, CayIcon } from './Icons';
import './Marquee.css';

const words = [
  { label: 'GÜNLÜK TAZE SİMİT', Icon: SimitIcon },
  { label: 'ELDEN AÇMA POĞAÇA', Icon: PogacaIcon },
  { label: 'FIRIN SICAKLIĞINDA KEK', Icon: KekIcon },
  { label: 'DEMLİ ÇAY EŞLİĞİNDE', Icon: CayIcon },
];

export default function Marquee() {
  const track = [...words, ...words, ...words];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track.map(({ label, Icon }, i) => (
          <span className="marquee-item" key={i}>
            <Icon size={20} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
