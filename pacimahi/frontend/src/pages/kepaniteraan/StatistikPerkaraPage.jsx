import KepaniteraanLayout from './KepaniteraanLayout';
import { FaChartBar } from 'react-icons/fa';

const statsData = [
  { label: 'Sisa Perkara 2025', value: 48, color: '#f59e0b' },
  { label: 'Perkara Masuk 2026', value: 312, color: '#3b82f6' },
  { label: 'Perkara Diputus 2026', value: 289, color: '#10b981' },
  { label: 'Sisa Perkara 2026', value: 71, color: '#ef4444' },
];

const jenisPerkara = [
  { jenis: 'Cerai Gugat', jumlah: 168, persen: 54 },
  { jenis: 'Cerai Talak', jumlah: 82, persen: 26 },
  { jenis: 'Penetapan Ahli Waris', jumlah: 22, persen: 7 },
  { jenis: 'Isbat Nikah', jumlah: 18, persen: 6 },
  { jenis: 'Hak Asuh Anak', jumlah: 12, persen: 4 },
  { jenis: 'Lain-lain', jumlah: 10, persen: 3 },
];

function StatistikPerkaraPage() {
  return (
    <KepaniteraanLayout
      title="Statistik Perkara"
      subtitle="Data Statistik Penerimaan dan Penyelesaian Perkara Pengadilan Agama Kota Cimahi"
      breadcrumb="Statistik Perkara"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaChartBar style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Akuntabilitas Kinerja Penyelesaian Perkara</h4>
          <p style={{ margin: 0 }}>
            Data statistik perkara ini dipublikasikan sebagai bentuk transparansi dan akuntabilitas kinerja penyelesaian perkara di Pengadilan Agama Kota Cimahi secara berkala.
          </p>
        </div>

        <h2>Ringkasan Perkara Tahun 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.25rem', margin: '1.5rem 0' }}>
          {statsData.map((s, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 'var(--radius-md)', padding: '1.5rem 1rem',
              textAlign: 'center', boxShadow: 'var(--shadow-sm)',
              borderTop: `5px solid ${s.color}`
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: s.color, lineHeight: 1.1 }}>{s.value}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--gray-600)', marginTop: '0.5rem', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h2>Distribusi Berdasarkan Jenis Perkara (2026)</h2>
        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table className="pa-table">
            <thead>
              <tr>
                <th>Jenis Perkara</th>
                <th style={{ textAlign: 'center' }}>Jumlah</th>
                <th>Persentase</th>
              </tr>
            </thead>
            <tbody>
              {jenisPerkara.map((j, i) => (
                <tr key={i}>
                  <td>{j.jenis}</td>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>{j.jumlah}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        flex: 1, height: '8px', borderRadius: '4px', background: '#e5e7eb',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${j.persen}%`, height: '100%',
                          background: 'var(--primary-700)', borderRadius: '4px'
                        }} />
                      </div>
                      <span style={{ minWidth: '36px', fontSize: '0.85rem', fontWeight: 600 }}>{j.persen}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--gray-500)' }}>
          * Data statistik merupakan representasi ilustratif. Untuk data resmi dan terkini, kunjungi{' '}
          <a href="http://sipp.pa-cimahi.go.id/" target="_blank" rel="noreferrer">SIPP PA Kota Cimahi</a> atau laporan tahunan pengadilan.
        </p>
      </article>
    </KepaniteraanLayout>
  );
}

export default StatistikPerkaraPage;
