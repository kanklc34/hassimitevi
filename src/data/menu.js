// Fiyatlar örnek/başlangıç değerleridir - kolayca güncellenebilir.
// Her kategorinin "photos" listesi menüdeki banner'da sırayla döner.
export const menuCategories = [
  {
    id: 'simitler',
    title: 'Simit Çeşitleri',
    icon: 'simit',
    photos: ['simit-susamsiz.jpg', 'simit-sucuklu-kasarli.jpg', 'simit-zeytinli-kasarli.jpg'],
    items: [
      { name: 'Susamsız Simit', desc: 'Sade, hafif ve çıtır', price: 14 },
      { name: 'Sucuklu Kaşarlı Simit', desc: 'Bol kaşar ve sucukla fırında', price: 32 },
      { name: 'Zeytinli Kaşarlı Simit', desc: 'Kaşar ve zeytinle harmanlanmış', price: 30 },
    ],
  },
  {
    id: 'pogacalar',
    title: 'Poğaçalar',
    icon: 'pogaca',
    photos: ['pogaca-peynirli.jpg', 'pogaca-kasarli.jpg', 'pogaca-patatesli.jpg', 'pogaca-dereotlu.jpg', 'pogaca-zeytinli.jpg'],
    items: [
      { name: 'Peynirli Poğaça', desc: 'El açması, bol iç harçlı', price: 18 },
      { name: 'Kaşarlı Poğaça', desc: 'Üzeri kaşarla kaplı, fırın taze', price: 20 },
      { name: 'Sade Poğaça', desc: 'Tereyağlı, klasik tarif', price: 15 },
      { name: 'Patatesli Poğaça', desc: 'Baharatlı iç harç, yumuşacık', price: 18 },
      { name: 'Dereotlu Poğaça', desc: 'Peynirli harca taze dereotu', price: 19 },
      { name: 'Zeytinli Poğaça', desc: 'Kıyılmış zeytinle harmanlanmış', price: 18 },
    ],
  },
  {
    id: 'acmalar',
    title: 'Açma ve Çeşitleri',
    icon: 'acma',
    photos: ['acma-kasarli.jpg', 'acma-zeytinli.jpg'],
    items: [
      { name: 'Sade Açma', desc: 'Tereyağlı, katmerli', price: 16 },
      { name: 'Zeytinli Açma', desc: 'İçinde kıyılmış zeytin', price: 18 },
      { name: 'Kaşarlı Açma', desc: 'Bol kaşarlı iç harç', price: 20 },
      { name: 'Çikolatalı Açma', desc: 'Tatlı krizine pratik çözüm', price: 20 },
    ],
  },
  {
    id: 'catallar',
    title: 'Çatal',
    icon: 'catal',
    photos: [],
    items: [
      { name: 'Klasik Çatal', desc: 'Katmer katmer, hafif tuzlu', price: 20 },
    ],
  },
  {
    id: 'tatlilar',
    title: 'Kek, Kurabiye ve Ponçik',
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
      { name: 'Islak Kek', desc: 'Kakaolu, sulu ve yoğun', price: 24 },
      { name: 'Havuçlu Kek', desc: 'Ceviz ve kuru üzümle', price: 22 },
      { name: 'Ay Çöreği', desc: 'Bademli, katmerli hamur işi', price: 16 },
      { name: 'Tahinli Kurabiye', desc: 'Kütahya usulü, çıtır', price: 12 },
      { name: 'Üzümlü Kurabiye', desc: 'Ev yapımı tarif, doyurucu', price: 12 },
      { name: 'Elmalı Ponçik', desc: 'İçi elma dolgulu, pudra şekerli', price: 20 },
      { name: 'Çikolatalı Ponçik', desc: 'İçi çikolata dolgulu, pudra şekerli', price: 22 },
    ],
  },
  {
    id: 'icecekler',
    title: 'İçecekler',
    icon: 'cay',
    photos: [],
    items: [
      { name: 'Çay', desc: 'Bardakta demli çay', price: 10 },
      { name: 'Türk Kahvesi', desc: 'Sade / az şekerli / şekerli', price: 25 },
      { name: 'Ayran', desc: 'Soğuk servis', price: 12 },
      { name: 'Su', desc: '0.5 L', price: 8 },
    ],
  },
];
