// Basit, tek renkli çizgi ikonlar. Telifsiz, tamamen özgün SVG çizimler -
// stok fotoğraf ihtiyacı olmadan markaya özel bir görünüm sağlar.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function SimitIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="7" />
      <circle cx="14" cy="16" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="20" cy="10" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="30" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="37" cy="15" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="40" cy="24" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="37" cy="33" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="29" cy="39" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="18" cy="38" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="10" cy="32" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="8" cy="23" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PogacaIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <path d="M8 26c0-9 7-16 16-16s16 7 16 16-7 12-16 12S8 35 8 26z" />
      <path d="M18 20c1-3 4-4 6-2" />
      <path d="M26 18c2-2 5-1 6 2" />
    </svg>
  );
}

export function AcmaIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <path d="M6 30c4-14 32-14 36 0" />
      <path d="M9 30c3 6 27 6 30 0" />
      <path d="M14 24c1-3 3-4 4-4" />
      <path d="M24 22c1-3 3-4 4-4" />
      <path d="M34 24c-1-3-2-4-3-4" />
    </svg>
  );
}

export function CatalIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <path d="M10 14c8 4 20 4 28 0" />
      <path d="M10 22c8 4 20 4 28 0" />
      <path d="M10 30c8 4 20 4 28 0" />
      <path d="M12 10v28" />
      <path d="M36 10v28" />
    </svg>
  );
}

export function KekIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <rect x="10" y="22" width="28" height="14" rx="2" />
      <path d="M10 22c0-4 6-6 14-6s14 2 14 6" />
      <path d="M18 16c-1-3 1-5 1-8" />
      <path d="M28 16c1-3-1-5-1-8" />
    </svg>
  );
}

export function CayIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <path d="M14 20h20l-2 16a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2z" />
      <path d="M34 22c4 0 6 3 6 6s-2 6-6 6" />
      <path d="M18 12c1 2-1 3-1 5" />
      <path d="M24 12c1 2-1 3-1 5" />
    </svg>
  );
}

export const iconMap = {
  simit: SimitIcon,
  pogaca: PogacaIcon,
  acma: AcmaIcon,
  catal: CatalIcon,
  kek: KekIcon,
  cay: CayIcon,
};

export function BreadIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <path d="M8 26c0-10 6-16 16-16s16 6 16 16-4 12-16 12S8 36 8 26z" />
      <path d="M16 18c2 3 1 6-1 9" />
      <path d="M24 15c2 3 1 7-1 10" />
      <path d="M32 18c2 3 1 6-1 9" />
    </svg>
  );
}

export function JarIcon({ size = 40, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" {...base} {...rest}>
      <path d="M15 10h18v6l3 4v18a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V20l3-4z" />
      <path d="M12 22h24" />
      <circle cx="19" cy="30" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="26" cy="33" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="30" cy="27" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="21" cy="36" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
      <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function PinIcon({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
      <path d="M12 21s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function ClockIcon({ size = 18, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
