import { useReveal } from '../hooks/useReveal';
import './Gallery.css';

const photos = [
  { src: 'simit-susamli.jpg', alt: 'Bol susamlı, klasik sokak simidi', big: true },
  { src: 'simit-sucuklu-kasarli.jpg', alt: 'Sucuklu kaşarlı simit' },
  { src: 'pogaca-peynirli.jpg', alt: 'Peynirli poğaça' },
  { src: 'acma-zeytinli.jpg', alt: 'Zeytinli açma' },
  { src: 'catal-klasik.jpg', alt: 'Klasik çatal' },
  { src: 'kek-uzumlu-kurabiye.jpg', alt: 'Üzümlü kurabiyeler' },
  { src: 'kek-islak.jpg', alt: 'Islak kek' },
  { src: 'pogaca-zeytinli.jpg', alt: 'Zeytinli poğaça' },
  { src: 'kek-ay-coregi.jpg', alt: 'Ay çöreği' },
  { src: 'acma-kasarli.jpg', alt: 'Kaşarlı açma' },
  { src: 'kek-cikolatali-poncik.jpg', alt: 'Çikolatalı ponçik' },
  { src: 'pogaca-dereotlu.jpg', alt: 'Dereotlu poğaça' },
];

export default function Gallery() {
  const [ref, visible] = useReveal();

  return (
    <section className="gallery">
      <div className="container">
        <p className="eyebrow">VİTRİNDEN</p>
        <h2 className="gallery-title">Fırından kareler</h2>
      </div>

      <div ref={ref} className={`gallery-grid reveal ${visible ? 'is-visible' : ''}`}>
        {photos.map((p, i) => (
          <div
            className={`gallery-item ${p.big ? 'gallery-item-big' : ''}`}
            key={p.src}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <img
              src={`${import.meta.env.BASE_URL}photos/${p.src}`}
              alt={p.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
