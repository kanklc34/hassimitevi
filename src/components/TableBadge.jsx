import { useEffect, useState } from 'react';
import './TableBadge.css';

export default function TableBadge({ tableNumber }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (tableNumber) {
      const t = setTimeout(() => setVisible(true), 250);
      return () => clearTimeout(t);
    }
  }, [tableNumber]);

  if (!tableNumber) return null;

  return (
    <div className={`table-badge ${visible ? 'is-visible' : ''}`} role="status">
      <span className="table-badge-dot" />
      Masa {tableNumber} algılandı — sipariş verirken bu numarayı söyleyin
    </div>
  );
}
