import { useReveal } from '../hooks/useReveal';
import './WhyUs.css';

const points = [
  {
    stat: '05:00',
    title: 'Şafakta başlar',
    text: 'Hamur her sabah saat beşte yoğrulur, gün ağarmadan fırın ısınır.',
  },
  {
    stat: '%100',
    title: 'Elde açılır',
    text: 'Makine değil, usta eli. Her poğaça tek tek şekillendirilir.',
  },
  {
    stat: '0₺',
    title: 'Bekletme yok',
    text: 'Günü geçen ürün rafta kalmaz. Ne varsa o gün pişmiştir.',
  },
];

export default function WhyUs() {
  const [ref, visible] = useReveal();

  return (
    <section className="whyus">
      <div ref={ref} className={`container whyus-inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow whyus-eyebrow">NEDEN HAS SİMİT EVİ</p>
        <h2 className="whyus-title">
          Süslü sözler değil, <em>her sabah aynı disiplin</em>.
        </h2>

        <div className="whyus-grid">
          {points.map((p, i) => (
            <div className="whyus-card" key={p.title} style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="whyus-stat">{p.stat}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
