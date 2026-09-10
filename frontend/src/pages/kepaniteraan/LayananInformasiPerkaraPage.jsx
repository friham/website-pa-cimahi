import KepaniteraanLayout from './KepaniteraanLayout';
import { FaSearch, FaExternalLinkAlt } from 'react-icons/fa';

function LayananInformasiPerkaraPage() {
  return (
    <KepaniteraanLayout
      title="Layanan Informasi Perkara"
      subtitle="Kanal Penelusuran Perkara di Pengadilan Agama Kota Cimahi"
      breadcrumb="Layanan Informasi Perkara"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaSearch style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Akses Informasi Perkara Anda</h4>
          <p style={{ margin: 0 }}>
            Pengadilan Agama Kota Cimahi menyediakan berbagai kanal layanan informasi perkara agar para pihak dapat memantau perkembangan penanganan perkaranya secara mudah, cepat, dan transparan.
          </p>
        </div>

        <h2>Kanal Penelusuran Perkara</h2>
        <div style={{ display: 'grid', gap: '1.25rem', margin: '1.5rem 0' }}>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '1.8rem' }}>🌐</div>
              <h3 style={{ margin: 0, color: 'var(--primary-900)', fontSize: '1.1rem' }}>1. SIPP Online (Sistem Informasi Penelusuran Perkara)</h3>
            </div>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Akses langsung melalui website SIPP PA Kota Cimahi. Tersedia informasi nomor perkara, para pihak, majelis hakim, jadwal sidang, dan amar putusan.
            </p>
            <a href="http://sipp.pa-cimahi.go.id/" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-800)', fontWeight: 600, textDecoration: 'none', fontSize: '0.88rem' }}>
              Buka SIPP PA Cimahi <FaExternalLinkAlt size={11} />
            </a>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '1.8rem' }}>💬</div>
              <h3 style={{ margin: 0, color: 'var(--primary-900)', fontSize: '1.1rem' }}>2. SILINCAH (Sistem Informasi Layanan Cimahi)</h3>
            </div>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Layanan informasi perkara melalui WhatsApp resmi Pengadilan Agama Kota Cimahi. Hubungi nomor layanan dan ketik nomor perkara Anda untuk mendapatkan informasi terkini.
            </p>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-600)' }}>📱 Nomor WA: <strong>0813-xxxx-xxxx</strong> (Jam Kerja: 08.00 – 16.00 WIB)</p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '1.8rem' }}>🏢</div>
              <h3 style={{ margin: 0, color: 'var(--primary-900)', fontSize: '1.1rem' }}>3. Meja Layanan Informasi / PTSP</h3>
            </div>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Datang langsung ke Meja Layanan Informasi di lobi PTSP Pengadilan Agama Kota Cimahi. Petugas siap membantu memberikan informasi perkara pada jam kerja (Senin - Kamis: 08.00 - 16.30 WIB, Jumat: 07.30 - 16.30 WIB).
            </p>
          </div>

          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ fontSize: '1.8rem' }}>📊</div>
              <h3 style={{ margin: 0, color: 'var(--primary-900)', fontSize: '1.1rem' }}>4. Direktori Putusan MA RI</h3>
            </div>
            <p style={{ margin: '0 0 0.75rem', fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Untuk mengakses salinan/teks lengkap putusan yang telah berkekuatan hukum tetap (BHT), kunjungi Direktori Putusan Mahkamah Agung RI.
            </p>
            <a href="https://putusan3.mahkamahagung.go.id" target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-800)', fontWeight: 600, textDecoration: 'none', fontSize: '0.88rem' }}>
              Buka Direktori Putusan MA RI <FaExternalLinkAlt size={11} />
            </a>
          </div>
        </div>
      </article>
    </KepaniteraanLayout>
  );
}

export default LayananInformasiPerkaraPage;
