import KepaniteraanLayout from './KepaniteraanLayout';
import { FaExternalLinkAlt, FaSearch, FaDatabase } from 'react-icons/fa';

function SIPPPage() {
  return (
    <KepaniteraanLayout
      title="SIPP – Sistem Informasi Penelusuran Perkara"
      subtitle="Akses Informasi Perkara Secara Real-Time di Pengadilan Agama Kota Cimahi"
      breadcrumb="SIPP"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaDatabase style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Transparansi Peradilan melalui Teknologi</h4>
          <p style={{ margin: 0 }}>
            Sistem Informasi Penelusuran Perkara (SIPP) adalah aplikasi yang memungkinkan masyarakat, pihak berperkara, dan advokat memantau perkembangan proses penanganan perkara secara online dan real-time.
          </p>
        </div>

        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a
            href="http://sipp.pa-cimahi.go.id/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'linear-gradient(135deg, var(--primary-800), var(--primary-900))',
              color: 'white', padding: '12px 28px', borderRadius: 'var(--radius-md)',
              fontSize: '1.05rem', fontWeight: 700, textDecoration: 'none', boxShadow: 'var(--shadow-md)'
            }}
          >
            <FaSearch />
            <span>Buka Portal SIPP PA Cimahi</span>
            <FaExternalLinkAlt size={13} />
          </a>
        </div>

        <h2>Informasi yang Dapat Diakses melalui SIPP</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', margin: '1.5rem 0' }}>
          {[
            { icon: '📋', title: 'Status Perkara', desc: 'Memantau tahapan proses persidangan perkara Anda secara real-time.' },
            { icon: '📅', title: 'Jadwal Sidang', desc: 'Mengetahui tanggal, waktu, dan ruang sidang yang telah ditetapkan.' },
            { icon: '📃', title: 'Amar Putusan', desc: 'Mengakses ringkasan amar putusan yang telah diucapkan.' },
            { icon: '⚖️', title: 'Data Perkara', desc: 'Informasi para pihak, objek perkara, dan nilai perkara.' },
            { icon: '💰', title: 'Biaya Perkara', desc: 'Rincian penggunaan dan saldo panjar biaya perkara.' },
            { icon: '📊', title: 'Statistik', desc: 'Data statistik penerimaan, penyelesaian, dan sisa perkara.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)',
              borderTop: '4px solid var(--primary-700)', textAlign: 'center'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h3 style={{ margin: '0 0 0.4rem', color: 'var(--primary-900)', fontSize: '1rem' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--gray-600)' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Cara Menggunakan SIPP</h2>
        <ol>
          <li>Kunjungi <a href="http://sipp.pa-cimahi.go.id/" target="_blank" rel="noreferrer"><strong>sipp.pa-cimahi.go.id</strong></a>.</li>
          <li>Masukkan <strong>Nomor Perkara</strong> yang telah diberikan saat pendaftaran.</li>
          <li>Klik tombol <strong>Cari</strong> untuk menampilkan informasi perkara.</li>
          <li>Data yang ditampilkan meliputi status terkini, jadwal sidang berikutnya, dan amar putusan (jika sudah ada).</li>
        </ol>
      </article>
    </KepaniteraanLayout>
  );
}

export default SIPPPage;
