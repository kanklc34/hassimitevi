import { useEffect, useRef, useState } from 'react';
import { SimitIcon, PogacaIcon, KekIcon, CayIcon, AcmaIcon, BreadIcon, JarIcon } from './Icons';
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

  const layerStyle = (strength) => ({
    transform: `translate(${offset.x * strength}px, ${offset.y * strength}px)`,
  });

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
          {/* Duvar nişi - raf artık boşlukta değil, gömülü duruyor */}
          <div className="shelf-niche" style={layerStyle(2)}>
            <div className="niche-texture" />
            <div className="niche-lights">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>

          <div className="hero-glow" style={layerStyle(6)} />

          {/* Arka raf */}
          <div className="shelf-level shelf-level-back" style={layerStyle(4)}>
            <div className="shelf-plank shelf-plank-back" />
            <div className="shelf-bracket shelf-bracket-left" />
            <div className="shelf-bracket shelf-bracket-right" />
            <div className="shelf-item shelf-item-back-1"><KekIcon size={42} /></div>
            <div className="shelf-item shelf-item-back-2"><CayIcon size={36} /></div>
            <div className="shelf-item shelf-item-back-3"><JarIcon size={40} /></div>
          </div>

          {/* Orta raf */}
          <div className="shelf-level shelf-level-mid" style={layerStyle(10)}>
            <div className="shelf-plank shelf-plank-mid" />
            <div className="shelf-bracket shelf-bracket-left" />
            <div className="shelf-bracket shelf-bracket-right" />
            <div className="shelf-item shelf-item-mid-1"><AcmaIcon size={54} /></div>
            <div className="shelf-item shelf-item-mid-2"><PogacaIcon size={56} /></div>
            <div className="shelf-item shelf-item-mid-3"><BreadIcon size={50} /></div>
          </div>

          {/* Ön raf - imza öğe */}
          <div className="shelf-level shelf-level-front" style={layerStyle(18)}>
            <div className="shelf-plank shelf-plank-front" />
            <div className="shelf-bracket shelf-bracket-left shelf-bracket-front" />
            <div className="shelf-bracket shelf-bracket-right shelf-bracket-front" />
            <div className="shelf-item shelf-item-front"><SimitIcon size={100} /></div>
            <div className="shelf-ground-shadow" />
          </div>

          <div className="flour-puff-hero" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
        </div>
      </div>
    </section>
  );
}
