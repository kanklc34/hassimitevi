import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-brand">
          <img src="/logo-mark.png" alt="" className="footer-mark" width="32" height="14" />
          © {year} Has Simit Evi
        </span>
        <span className="footer-tag">Her gün taze, her gün sıcak.</span>
      </div>
    </footer>
  );
}
