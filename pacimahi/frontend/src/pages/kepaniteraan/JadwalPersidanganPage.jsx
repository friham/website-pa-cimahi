import { useState } from 'react';
import KepaniteraanLayout from './KepaniteraanLayout';
import { FaCalendarAlt } from 'react-icons/fa';

const jadwalData = [
  { no: 1, nomor: '0001/Pdt.G/2026/PA.Cmi', pihak: 'Pemohon vs Termohon A', majelis: 'Drs. H. Saepudin, S.H., M.H.I. (Ketua)', ruang: 'Sidang I', waktu: 'Senin, 08:30 WIB', agenda: 'Pembuktian' },
  { no: 2, nomor: '0002/Pdt.G/2026/PA.Cmi', pihak: 'Pemohon B vs Termohon B', majelis: 'Dra. Hj. Neni Nuraeni, S.H., M.H. (Ketua)', ruang: 'Sidang II', waktu: 'Selasa, 09:00 WIB', agenda: 'Ikrar Talak' },
  { no: 3, nomor: '0015/Pdt.P/2026/PA.Cmi', pihak: 'Pemohon C', majelis: 'Drs. H. Tatang Taufik, M.H. (Ketua)', ruang: 'Sidang I', waktu: 'Rabu, 10:00 WIB', agenda: 'Pembacaan Putusan' },
  { no: 4, nomor: '0020/Pdt.G/2026/PA.Cmi', pihak: 'Pemohon D vs Termohon D', majelis: 'Drs. H. Cecep Suryana, M.H. (Ketua)', ruang: 'Sidang III', waktu: 'Kamis, 09:30 WIB', agenda: 'Jawaban Tergugat' },
];

function JadwalPersidanganPage() {
  const [search, setSearch] = useState('');

  const filtered = jadwalData.filter(j =>
    j.nomor.toLowerCase().includes(search.toLowerCase()) ||
    j.pihak.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <KepaniteraanLayout
      title="Agenda / Jadwal Persidangan"
      subtitle="Informasi Jadwal Sidang Perkara di Pengadilan Agama Kota Cimahi"
      breadcrumb="Jadwal Persidangan"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaCalendarAlt style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Transparansi Jadwal Persidangan</h4>
          <p style={{ margin: 0 }}>
            Jadwal persidangan ini bersifat informatif. Para pihak dan kuasa hukum tetap wajib memperhatikan panggilan resmi yang disampaikan oleh Juru Sita/Juru Sita Pengganti sebagai dasar kehadiran dalam persidangan.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Cari nomor perkara atau nama pihak..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: 1, minWidth: '240px', padding: '10px 16px', borderRadius: 'var(--radius-md)',
              border: '1.5px solid var(--gray-300)', fontSize: '0.9rem', outline: 'none',
              fontFamily: 'inherit'
            }}
          />
          <a
            href="http://sipp.pa-cimahi.go.id/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '10px 18px', borderRadius: 'var(--radius-md)',
              background: 'var(--primary-800)', color: 'white',
              fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none'
            }}
          >
            Cek via SIPP ↗
          </a>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className="pa-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Nomor Perkara</th>
                <th>Para Pihak</th>
                <th>Ketua Majelis</th>
                <th>Ruang</th>
                <th>Waktu</th>
                <th>Agenda</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} style={{ textAlign: 'center', color: 'var(--gray-500)', padding: '2rem' }}>Data tidak ditemukan</td></tr>
              ) : filtered.map(j => (
                <tr key={j.no}>
                  <td style={{ textAlign: 'center' }}>{j.no}</td>
                  <td><strong>{j.nomor}</strong></td>
                  <td>{j.pihak}</td>
                  <td style={{ fontSize: '0.85rem' }}>{j.majelis}</td>
                  <td>{j.ruang}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{j.waktu}</td>
                  <td>
                    <span style={{
                      background: '#eff6ff', color: '#1e40af',
                      padding: '2px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600
                    }}>
                      {j.agenda}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--gray-500)' }}>
          * Data jadwal ini merupakan contoh representatif. Jadwal aktual dapat berubah sewaktu-waktu. Untuk data real-time, gunakan SIPP PA Kota Cimahi.
        </p>
      </article>
    </KepaniteraanLayout>
  );
}

export default JadwalPersidanganPage;
