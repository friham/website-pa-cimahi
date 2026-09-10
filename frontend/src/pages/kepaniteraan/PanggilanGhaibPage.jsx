import KepaniteraanLayout from './KepaniteraanLayout';
import { FaBullhorn } from 'react-icons/fa';

function PanggilanGhaibPage() {
  return (
    <KepaniteraanLayout
      title="Panggilan Ghaib"
      subtitle="Prosedur Pemanggilan Pihak yang Tidak Diketahui Alamatnya (Tergugat Ghaib)"
      breadcrumb="Panggilan Ghaib"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaBullhorn style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Penggugat Tidak Tahu Keberadaan Tergugat?</h4>
          <p style={{ margin: 0 }}>
            Jika Tergugat tidak diketahui tempat tinggalnya atau tidak mempunyai tempat kediaman yang pasti di wilayah NKRI, maka pemanggilan dilakukan melalui media massa (surat kabar) yang disebut Panggilan Ghaib sesuai ketentuan Pasal 27 PP Nomor 9 Tahun 1975.
          </p>
        </div>

        <h2>Dasar Hukum</h2>
        <ul>
          <li>Pasal 27 Peraturan Pemerintah Nomor 9 Tahun 1975 tentang Pelaksanaan Undang-Undang Nomor 1 Tahun 1974 tentang Perkawinan.</li>
          <li>Pasal 138 dan 718 Reglement Buitengewesten (RBg).</li>
        </ul>

        <h2>Prosedur Panggilan Ghaib</h2>
        <ol>
          <li>
            <strong>Pengajuan Perkara:</strong> Penggugat mendaftarkan perkara cerai gugat / gugatan lainnya dan dalam surat gugatan dicantumkan bahwa Tergugat tidak diketahui alamatnya.
          </li>
          <li>
            <strong>Penetapan Hakim:</strong> Majelis Hakim yang memeriksa perkara mengeluarkan penetapan agar pemanggilan Tergugat dilakukan melalui radio RRI atau surat kabar harian yang terbit di wilayah pengadilan.
          </li>
          <li>
            <strong>Publikasi Pengumuman:</strong> Pengumuman panggilan dimuat di media cetak/radio minimal <strong>2 kali</strong> dengan tenggang waktu antar pengumuman. Untuk perkara perceraian, tenggang waktu antar pengumuman adalah <strong>1 bulan</strong>.
          </li>
          <li>
            <strong>Hari Sidang:</strong> Sidang ditetapkan sekurang-kurangnya <strong>3 bulan</strong> sejak pengumuman pertama. Tergugat dianggap telah dipanggil secara sah jika tidak hadir pada sidang tersebut.
          </li>
          <li>
            <strong>Putusan Verstek:</strong> Jika Tergugat tidak hadir setelah dipanggil secara sah, sidang dilanjutkan dan dapat dijatuhkan putusan Verstek (putusan tanpa hadirnya Tergugat).
          </li>
        </ol>

        <h2>Media Publikasi</h2>
        <p>Pengadilan Agama Kota Cimahi biasanya menggunakan media surat kabar harian lokal yang berkedudukan di Jawa Barat dan dapat pula melalui website resmi pengadilan. Biaya pemasangan pengumuman menjadi beban Penggugat (kecuali perkara prodeo).</p>
      </article>
    </KepaniteraanLayout>
  );
}

export default PanggilanGhaibPage;
