// QR koddan gelen masa numarasını güvenli biçimde okur.
// Sadece 1-99 arası pozitif tam sayılara izin verir, her şeyi reddeder.
// Bu sayede URL'ye enjekte edilebilecek script/HTML parçaları asla
// state'e ya da DOM'a taşınmaz.
export function getTableNumberFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('masa');
    if (!raw) return null;

    // Sadece rakam kabul edilir (regex ile katı doğrulama)
    if (!/^\d{1,2}$/.test(raw)) return null;

    const n = parseInt(raw, 10);
    if (Number.isNaN(n) || n < 1 || n > 99) return null;

    return n;
  } catch {
    return null;
  }
}
