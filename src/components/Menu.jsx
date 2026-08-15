import { useEffect, useRef, useState } from 'react';
import { menuCategories } from '../data/menu';
import { iconMap } from './Icons';
import { useReveal } from '../hooks/useReveal';
import './Menu.css';

const ROTATE_MS = 6500;

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [headRef, headVisible] = useReveal();
  const active = menuCategories.find((c) => c.id === activeId);
  const ActiveIcon = iconMap[active.icon];
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Kategori değişince fotoğraf sırasını sıfırla
  useEffect(() => {
    setPhotoIndex(0);
  }, [activeId]);

  // Aktif kategorinin fotoğrafları arasında otomatik geçiş (maliyetsiz - sadece local görsel)
  useEffect(() => {
    if (reduceMotion.current) return;
    if (!active.photos || active.photos.length < 2) return;

    const t = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % active.photos.length);
    }, ROTATE_MS);

    return () => clearInterval(t);
  }, [active.photos, activeId]);

  return (
    <section className="menu" id="menu">
      <div className="container">
        <div ref={headRef} className={`menu-head reveal ${headVisible ? 'is-visible' : ''}`}>
          <p className="eyebrow">MENÜ</p>
          <h2 className="menu-title">Fırından bugün ne çıktı?</h2>
          <p className="menu-note">
            Fiyatlar tekli sipariş içindir. Toplu/kurumsal siparişlerde fiyat
            değişebilir — <a href="tel:05424127691" className="menu-note-link">bizi arayın</a>, hemen bilgi verelim.
          </p>
        </div>

        <div className="menu-tabs" role="tablist" aria-label="Menü kategorileri">
          {menuCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`menu-tab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveId(cat.id)}
              >
                <Icon size={20} />
                {cat.title}
              </button>
            );
          })}
        </div>

        <div className="menu-panel" key={activeId}>
          <div className="menu-photo-banner">
            {active.photos && active.photos.length > 0 ? (
              active.photos.map((photo, i) => (
                <img
                  key={photo}
                  src={`${import.meta.env.BASE_URL}photos/${photo}`}
                  alt={i === photoIndex ? active.title : ''}
                  className={`menu-photo-banner-img ${i === photoIndex ? 'is-active' : ''}`}
                />
              ))
            ) : (
              <div className="menu-photo-banner-fallback">
                <ActiveIcon size={54} />
              </div>
            )}
            <div className="menu-photo-banner-overlay" />
            <span className="menu-photo-banner-label">{active.title}</span>
            {active.photos && active.photos.length > 1 && (
              <div className="menu-photo-dots">
                {active.photos.map((photo, i) => (
                  <span key={photo} className={i === photoIndex ? 'is-active' : ''} />
                ))}
              </div>
            )}
          </div>
          <ul className="menu-items">
            {active.items.map((item, i) => (
              <li
                className="menu-item"
                key={item.name}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="menu-item-text">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-desc">{item.desc}</span>
                </div>
                <span className="menu-item-price">{item.price}₺</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
