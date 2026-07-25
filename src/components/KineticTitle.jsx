import './KineticTitle.css';

// Her harfi ayrı bir span'a bölüp gecikmeli/döndürerek sahneye sokuyor.
// lines: [{ text: 'HAS', italic: false }, { text: 'EVİ', italic: true }, ...]
export default function KineticTitle({ lines, className = '' }) {
  let globalIndex = 0;

  return (
    <h1 className={`kinetic-title ${className}`}>
      {lines.map((line, li) => (
        <span
          className={`kinetic-line ${line.italic ? 'is-italic' : ''}`}
          key={li}
        >
          {line.text.split('').map((ch, ci) => {
            const delay = globalIndex * 30;
            globalIndex += 1;
            return (
              <span
                key={ci}
                className="kinetic-char"
                style={{ animationDelay: `${delay}ms` }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
