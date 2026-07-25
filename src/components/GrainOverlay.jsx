import './GrainOverlay.css';

// Ajans sitelerinde sık görülen "film grain" tekniği: SVG feTurbulence ile
// üretilen hafif gürültü dokusu, mix-blend-mode ile üstüne bindirilir.
// Düz renkleri matbaa/analog bir doku ile besleyip "ucuz/flat" hissini kırar.
export default function GrainOverlay() {
  return (
    <div className="grain-overlay" aria-hidden="true">
      <svg width="0" height="0">
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
    </div>
  );
}
