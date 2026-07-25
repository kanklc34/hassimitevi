// Düz çizgi yerine ekmek kabuğu / kesik kağıt hissi veren dalgalı ayraç.
// `flip` üstteki bölümün rengini, `color` alttaki bölümün rengini alır.
export default function SectionDivider({ color = '#F7EFE1', flip = false }) {
  return (
    <div
      aria-hidden="true"
      style={{
        lineHeight: 0,
        transform: flip ? 'scaleY(-1)' : 'none',
        marginTop: flip ? '-1px' : '-1px',
      }}
    >
      <svg
        viewBox="0 0 1200 44"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '44px', display: 'block' }}
      >
        <path
          d="M0,22 C 40,4 80,40 120,22 C 160,4 200,40 240,22 C 280,4 320,40 360,22
             C 400,4 440,40 480,22 C 520,4 560,40 600,22 C 640,4 680,40 720,22
             C 760,4 800,40 840,22 C 880,4 920,40 960,22 C 1000,4 1040,40 1080,22
             C 1120,4 1160,40 1200,22 L1200,44 L0,44 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
