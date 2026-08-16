// Fiyatlar örnek/başlangıç değerleridir - kolayca güncellenebilir.
// Her kategorinin "photos" listesi menüdeki banner'da sırayla döner.
export const menuCategories = [
  {
    id: 'simitler',
    title: 'Simit Çeşitleri',
    icon: 'simit',
    photos: ['simit-susamli.jpg', 'simit-susamsiz.jpg', 'simit-sucuklu-kasarli.jpg', 'simit-zeytinli-kasarli.jpg'],
    items: [
      { name: 'Susamlı Simit', desc: 'Bol susamlı, klasik sokak simidi', price: 25 },
      { name: 'Susamsız Simit', desc: 'Sade, hafif ve çıtır', price: 22 },
      { name: 'Sucuklu Kaşarlı Simit', desc: 'Bol kaşar ve sucukla fırında', price: 45 },
      { name: 'Zeytinli Kaşarlı Simit', desc: 'Kaşar ve zeytinle harmanlanmış', price: 42 },
    ],
  },
  {
    id: 'pogacalar',
    title: 'Poğaçalar',
    icon: 'pogaca',
    photos: ['pogaca-peynirli.jpg', 'pogaca-kasarli.jpg', 'pogaca-patatesli.jpg', 'pogaca-dereotlu.jpg', 'pogaca-zeytinli.jpg'],
    items: [
      { name: 'Peynirli Poğaça', desc: 'El açması, bol iç harçlı', price: 25 },
      { name: 'Kaşarlı Poğaça', desc: 'Üzeri kaşarla kaplı, fırın taze', price: 28 },
      { name: 'Sade Poğaça', desc: 'Tereyağlı, klasik tarif', price: 20 },
      { name: 'Patatesli Poğaça', desc: 'Baharatlı iç harç, yumuşacık', price: 25 },
      { name: 'Dereotlu Poğaça', desc: 'Peynirli harca taze dereotu', price: 27 },
      { name: 'Zeytinli Poğaça', desc: 'Kıyılmış zeytinle harmanlanmış', price: 25 },
    ],
  },
  {
    id: 'acmalar',
    title: 'Açma ve Çeşitleri',
    icon: 'acma',
    photos: ['acma-kasarli.jpg', 'acma-zeytinli.jpg'],
    items: [
      { name: 'Sade Açma', desc: 'Tereyağlı, katmerli', price: 22 },
      { name: 'Zeytinli Açma', desc: 'İçinde kıyılmış zeytin', price: 25 },
      { name: 'Kaşarlı Açma', desc: 'Bol kaşarlı iç harç', price: 28 },
      { name: 'Çikolatalı Açma', desc: 'Tatlı krizine pratik çözüm', price: 28 },
    ],
  },
  {
    id: 'catallar',
    title: 'Çatal',
    icon: 'catal',
    photos: ['catal-klasik.jpg'],
    items: [
      { name: 'Klasik Çatal', desc: 'Katmer katmer, hafif tuzlu', price: 28 },
    ],
  },
  {
    id: 'tatlilar',
    title: 'Kek & Kurabiye',
    icon: 'kek',
    photos: [
      'kek-islak.jpg',
      'kek-havuclu.jpg',
      'kek-ay-coregi.jpg',
      'kek-tahinli.jpg',
      'kek-uzumlu-kurabiye.jpg',
      'kek-elmali-poncik.jpg',
      'kek-cikolatali-poncik.jpg',
    ],
    items: [
      { name: 'Islak Kek', desc: 'Kakaolu, sulu ve yoğun', price: 32 },
      { name: 'Havuçlu Kek', desc: 'Ceviz ve kuru üzümle', price: 30 },
      { name: 'Ay Çöreği', desc: 'Bademli, katmerli hamur işi', price: 22 },
      { name: 'Tahinli Kurabiye', desc: 'Kütahya usulü, çıtır', price: 16 },
      { name: 'Üzümlü Kurabiye', desc: 'Ev yapımı tarif, doyurucu', price: 16 },
      { name: 'Elmalı Ponçik', desc: 'İçi elma dolgulu, pudra şekerli', price: 28 },
      { name: 'Çikolatalı Ponçik', desc: 'İçi çikolata dolgulu, pudra şekerli', price: 30 },
    ],
  },
  {
    id: 'icecekler',
    title: 'İçecekler',
    icon: 'cay',
    photos: ['icecekler.jpg'],
    items: [
      { name: 'Çay', desc: 'Bardakta demli çay', price: 15 },
      { name: 'Türk Kahvesi', desc: 'Sade / az şekerli / şekerli', price: 35 },
      { name: 'Ayran', desc: 'Sütaş, soğuk servis', price: 20 },
      { name: 'Su', desc: '0.5 L', price: 10 },
      { name: 'Meyve Suyu', desc: 'Vişne / Karışık / Şeftali / Elma', price: 25 },
      { name: 'Gazlı İçecek', desc: 'Coca-Cola / Fanta / Sprite', price: 30 },
      { name: 'Ice Tea', desc: 'Lipton / Fuse Tea, limon aromalı', price: 30 },
    ],
  },
];
