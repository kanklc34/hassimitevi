# Has Simit Evi — Web Sitesi

React + Vite ile yazılmış, tamamen istemci taraflı (backend'siz) tanıtım
sitesi. QR kod ile masadan erişim, menü, iletişim ve arama akışı içerir.

## Yerel çalıştırma

```bash
npm install
npm run dev
```

## Build alma

```bash
npm run build
```
Çıktı `dist/` klasörüne düşer.

## GitHub Pages'e deploy

1. Bu klasörü bir GitHub reposuna push et.
2. `vite.config.js` içindeki `base` değerini repo adına göre ayarla:
   - Repo adı `has-simit-evi` ise: `base: '/has-simit-evi/'`
   - Kendi `.com` alan adına bağlarsan: `base: '/'`
3. `npm run build` sonrası `dist/` klasörünü `gh-pages` branch'ine
   yayınla (en kolayı `npm install -D gh-pages` sonra `package.json`'a
   `"deploy": "gh-pages -d dist"` scripti ekleyip `npm run deploy`).
4. Repo ayarlarından Pages kaynağı olarak `gh-pages` branch'ini seç.

Kendi alan adını (.com) bağlayacağın zaman: `public/CNAME` dosyası
oluşturup içine sadece alan adını yaz (örn. `hassimitevi.com`), sonra
domain sağlayıcında GitHub Pages'in IP/DNS kayıtlarını tanımla.

## QR kod linkleri

Her masa için ayrı bir link/QR üretilir:
```
https://hassimitevi.com/?masa=1
https://hassimitevi.com/?masa=2
```
Site bu parametreyi okuyup üstte "Masa N algılandı" rozetini gösterir.
Parametre katı şekilde doğrulanır (`src/utils/table.js`) — sadece 1-99
arası rakam kabul edilir, başka hiçbir şey işlenmez.

## Güvenlik notları

- **Backend yok, veritabanı yok** → veri sızıntısı, SQL injection, auth
  bypass gibi risklerin büyük kısmı yapısal olarak yok.
- **CSP (Content-Security-Policy)** `index.html` içinde tanımlı — sadece
  kendi domain'inden ve Google Fonts'tan kaynak yüklenmesine izin verir.
- **`masa` parametresi** regex ile katı doğrulanır, DOM'a doğrudan
  basılmaz (XSS'e kapalı).
- **HTTPS** GitHub Pages'te otomatik gelir; özel domain bağlarsan da
  Pages otomatik Let's Encrypt sertifikası sağlar.
- **Ekstra öneri:** Domain'i Cloudflare'e (ücretsiz plan) bağlarsan
  DDoS koruması, bot filtreleme ve CDN önbelleği de üstüne gelir —
  LinkedIn'den ani trafik patlaması için işe yarar.
- `npm audit` ile bağımlılık zafiyetleri düzenli kontrol edilmeli
  (`package-lock.json` dahil edildi, `npm ci` ile tutarlı kurulum
  sağlanır).

## Sonra eklenecekler (ikinci aşama)

- Ürün fotoğrafları (stok görsel veya üretilmiş görsel ile
  `src/data/menu.js` içindeki her ürüne `image` alanı eklenip
  `Menu.jsx`'te kullanılabilir)
- Gerçek fırın adresi/koordinatları teyit edilip harita önizlemesi
  gömülü (embed) hale getirilebilir
