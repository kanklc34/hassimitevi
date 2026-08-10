import { useReveal } from '../hooks/useReveal';
import './Gallery.css';

const photos = [
  { src: 'gallery-01.jpg', alt: 'Fırından yeni çıkmış susamlı simitler', big: true },
  { src: 'gallery-02.jpg', alt: 'Kaşarlı, zeytinli poğaça' },
  { src: 'gallery-03.jpg', alt: 'Üzümlü kurabiyeler' },
  { src: 'gallery-04.jpg', alt: 'Çapraz kesim çatal' },
  { src: 'gallery-05.jpg', alt: 'Susamlı sarma çörek' },
  { src: 'gallery-06.jpg', alt: 'Kakaolu, pudra şekerli rulo' },
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
