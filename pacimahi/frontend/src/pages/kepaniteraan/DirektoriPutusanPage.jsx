import KepaniteraanLayout from './KepaniteraanLayout';
import { FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

function DirektoriPutusanPage() {
  return (
    <KepaniteraanLayout
      title="Direktori Putusan Mahkamah Agung RI"
      subtitle="Akses Seluruh Putusan PA Kota Cimahi melalui Portal Direktori Putusan Resmi"
      breadcrumb="Direktori Putusan"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaFileAlt style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Keterbukaan Informasi Putusan</h4>
          <p style={{ margin: 0 }}>
            Seluruh putusan yang telah diucapkan di Pengadilan Agama Kota Cimahi dipublikasikan secara online melalui Direktori Putusan Mahkamah Agung RI guna mendukung transparansi dan akuntabilitas peradilan.
          </p>
        </div>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a
            href="https://putusan3.mahkamahagung.go.id/pengadilan/profil/pengadilan/pa-cimahi.html"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, var(--primary-800), var(--primary-900))',
              color: 'white', padding: '12px 28px', borderRadius: 'var(--radius-md)',
              fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none', boxShadow: 'var(--shadow-md)'
            }}
          >
            <span>Buka Direktori Putusan PA Cimahi</span>
            <FaExternalLinkAlt size={13} />
          </a>
        </div>

        <h2>Tentang Direktori Putusan</h2>
        <ul>
          <li>Direktori Putusan MA RI adalah basis data putusan pengadilan yang dapat diakses secara bebas oleh publik.</li>
          <li>Memuat putusan dari seluruh jenjang peradilan di Indonesia: Pengadilan Tingkat Pertama, Banding, Kasasi, dan Peninjauan Kembali.</li>
          <li>Putusan yang memuat data sensitif (seperti nama anak di bawah umur) telah disamarkan (dianonimisasi) sesuai SK KMA Nomor 138/KMA/SK/IX/2020.</li>
          <li>Fitur pencarian tersedia berdasarkan nomor perkara, nama pihak, klasifikasi perkara, dan rentang waktu.</li>
        </ul>

        <h2>Cara Mengakses Putusan PA Kota Cimahi</h2>
        <ol>
          <li>Kunjungi <a href="https://putusan3.mahkamahagung.go.id" target="_blank" rel="noreferrer">putusan3.mahkamahagung.go.id</a>.</li>
          <li>Pilih tab <strong>"Pengadilan"</strong> pada menu navigasi.</li>
          <li>Cari <strong>"Pengadilan Agama Cimahi"</strong> atau gunakan link langsung di atas.</li>
          <li>Telusuri putusan berdasarkan nomor perkara, kata kunci, atau klasifikasi perkara.</li>
        </ol>

        <h2>Dasar Hukum Publikasi Putusan</h2>
        <ul>
          <li>SK KMA Nomor 144/KMA/SK/VIII/2007 tentang Keterbukaan Informasi di Pengadilan.</li>
          <li>SK KMA Nomor 138/KMA/SK/IX/2020 tentang Pengaburan Identitas dalam Putusan.</li>
          <li>UU Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik.</li>
        </ul>
      </article>
    </KepaniteraanLayout>
  );
}

export default DirektoriPutusanPage;
