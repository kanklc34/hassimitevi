import './FlourParticles.css';

// Ekranın arka planında çok hafif, göze batmayan un tozu/susam
// parçacıkları süzülüyor. pointer-events: none - hiçbir etkileşimi
// engellemiyor, sadece atmosfer katıyor.
const specks = [
  { left: '6%', size: 4, dur: 22, delay: 0 },
  { left: '18%', size: 3, dur: 27, delay: 4 },
  { left: '31%', size: 5, dur: 19, delay: 2 },
  { left: '47%', size: 3, dur: 25, delay: 7 },
  { left: '62%', size: 4, dur: 21, delay: 1 },
  { left: '76%', size: 3, dur: 29, delay: 5 },
  { left: '89%', size: 5, dur: 23, delay: 3 },
];

export default function FlourParticles() {
  return (
    <div className="flour-field" aria-hidden="true">
      {specks.map((s, i) => (
        <span
          key={i}
          className="flour-speck"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
