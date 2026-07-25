// Fiyatlar örnek/başlangıç değerleridir - kolayca güncellenebilir.
// Toplu siparişlerde fiyat değişebileceği için menüde bir not gösteriyoruz.
export const menuCategories = [
  {
    id: 'simitler',
    title: 'Simit ve Simitler',
    icon: 'simit',
    items: [
      { name: 'Klasik Simit', desc: 'Bol susamlı, fırından sıcak sıcak', price: 15 },
      { name: 'Kaşarlı Simit', desc: 'İçi eritilmiş kaşar peyniri ile', price: 30 },
      { name: 'Çikolatalı Simit', desc: 'Tatlı krizi için pratik çözüm', price: 25 },
    ],
  },
  {
    id: 'pogacalar',
    title: 'Poğaçalar',
    icon: 'pogaca',
    items: [
      { name: 'Peynirli Poğaça', desc: 'El açması, günlük taze', price: 18 },
      { name: 'Patatesli Poğaça', desc: 'Baharatlı iç harç, yumuşacık', price: 18 },
      { name: 'Kaşarlı Poğaça', desc: 'Üzeri kaşarla kaplı, fırın taze', price: 20 },
    ],
  },
  {
    id: 'acmalar',
    title: 'Açma ve Çeşitleri',
    icon: 'acma',
    items: [
      { name: 'Sade Açma', desc: 'Tereyağlı, katmerli', price: 16 },
      { name: 'Susamlı Açma', desc: 'Üzeri bol susam', price: 17 },
    ],
  },
  {
    id: 'catallar',
    title: 'Çatal',
    icon: 'catal',
    items: [
      { name: 'Klasik Çatal', desc: 'Katmer katmer, hafif tuzlu', price: 20 },
    ],
  },
  {
    id: 'tatlilar',
    title: 'Kek ve Kurabiyeler',
    icon: 'kek',
    items: [
      { name: 'Portakallı Kek', desc: 'Taze sıkma portakal kabuğuyla', price: 22 },
      { name: 'Tahinli Kurabiye', desc: 'Kütahya usulü, çıtır', price: 12 },
      { name: 'Üzümlü Kurabiye', desc: 'Ev yapımı tarif, doyurucu', price: 12 },
      { name: 'Ponçik', desc: 'İçi kremalı, güne başlamak için', price: 20 },
    ],
  },
  {
    id: 'icecekler',
    title: 'İçecekler',
    icon: 'cay',
    items: [
      { name: 'Çay', desc: 'Bardakta demli çay', price: 10 },
      { name: 'Türk Kahvesi', desc: 'Sade / az şekerli / şekerli', price: 25 },
      { name: 'Ayran', desc: 'Soğuk servis', price: 12 },
      { name: 'Su', desc: '0.5 L', price: 8 },
    ],
  },
];
