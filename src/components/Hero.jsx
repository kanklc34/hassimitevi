import { useEffect, useRef, useState } from 'react';
import KineticTitle from './KineticTitle';
import './Hero.css';

export default function Hero({ onMenuClick }) {
  const stageRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useRef(false);

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const handleMouseMove = (e) => {
    if (reduceMotion.current || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x, y });
  };

  const resetOffset = () => setOffset({ x: 0, y: 0 });

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">GÜNLÜK TAZE · FIRINDAN SOFRANIZA</p>
          <KineticTitle
            className="hero-title"
            lines={[
              { text: 'HAS' },
              { text: 'SİMİT' },
              { text: 'EVİ', italic: true },
            ]}
          />
          <p className="hero-sub">
            Her sabah saat beşte yoğrulan hamur, taş fırında pişer,
            sizin masanıza sıcacık gelir.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={onMenuClick}>
              Menüyü Gör
            </button>
            <a className="btn-ghost" href="tel:05424127691">
              Hemen Ara
            </a>
          </div>
        </div>

        <div
          className="hero-stage"
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetOffset}
        >
          <div
            className="hero-photo-frame"
            style={{
              transform: `translate(${offset.x * -10}px, ${offset.y * -10}px) scale(1.06)`,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}photos/hero-simit.jpg`}
              alt="Fırından yeni çıkmış taze simitler"
              className="hero-photo"
              width="1402"
              height="1122"
            />
            <div className="hero-photo-vignette" />
          </div>

          <div className="niche-lights" aria-hidden="true">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
    </section>
  );
}
