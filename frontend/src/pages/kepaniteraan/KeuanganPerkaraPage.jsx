import { useState } from 'react';
import KepaniteraanLayout from './KepaniteraanLayout';
import { FaWallet } from 'react-icons/fa';

const laporanBiaya = [
  { bulan: 'Januari 2026', masuk: 'Rp 48.500.000,-', keluar: 'Rp 31.200.000,-', saldo: 'Rp 17.300.000,-' },
  { bulan: 'Februari 2026', masuk: 'Rp 52.100.000,-', keluar: 'Rp 38.400.000,-', saldo: 'Rp 13.700.000,-' },
  { bulan: 'Maret 2026', masuk: 'Rp 61.300.000,-', keluar: 'Rp 44.100.000,-', saldo: 'Rp 17.200.000,-' },
  { bulan: 'April 2026', masuk: 'Rp 55.800.000,-', keluar: 'Rp 40.200.000,-', saldo: 'Rp 15.600.000,-' },
];

const laporanSisaPanjar = [
  { bulan: 'Januari 2026', jumlahPerkara: 12, totalSisa: 'Rp 3.200.000,-', sudahDikembalikan: 10, nilaiKembali: 'Rp 2.750.000,-' },
  { bulan: 'Februari 2026', jumlahPerkara: 15, totalSisa: 'Rp 4.100.000,-', sudahDikembalikan: 13, nilaiKembali: 'Rp 3.600.000,-' },
  { bulan: 'Maret 2026', jumlahPerkara: 18, totalSisa: 'Rp 4.800.000,-', sudahDikembalikan: 16, nilaiKembali: 'Rp 4.200.000,-' },
  { bulan: 'April 2026', jumlahPerkara: 14, totalSisa: 'Rp 3.700.000,-', sudahDikembalikan: 12, nilaiKembali: 'Rp 3.100.000,-' },
];

function KeuanganPerkaraPage() {
  const [activeTab, setActiveTab] = useState('biaya');

  return (
    <KepaniteraanLayout
      title="Keuangan Perkara"
      subtitle="Laporan Keuangan Biaya Perkara dan Pengembalian Sisa Panjar di Pengadilan Agama Kota Cimahi"
      breadcrumb="Keuangan Perkara"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaWallet style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Akuntabilitas Pengelolaan Keuangan Perkara</h4>
          <p style={{ margin: 0 }}>
            Seluruh penerimaan dan pengeluaran biaya perkara dikelola secara transparan oleh Panitera dan Bendahara Penerima, dengan kewajiban menyampaikan laporan berkala serta mengembalikan sisa panjar kepada para pihak.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
          {[
            { id: 'biaya', label: 'Laporan Penggunaan Biaya Perkara' },
            { id: 'sisa', label: 'Laporan Pengembalian Sisa Panjar' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 20px', borderRadius: '20px',
                border: activeTab === tab.id ? 'none' : '1px solid var(--gray-300)',
                background: activeTab === tab.id ? 'var(--primary-800)' : 'white',
                color: activeTab === tab.id ? 'white' : 'var(--gray-700)',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'biaya' && (
          <div>
            <h2>Laporan Penggunaan Biaya Perkara Tahun 2026</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Rekapitulasi penerimaan dan pengeluaran panjar biaya perkara per bulan di Pengadilan Agama Kota Cimahi.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="pa-table">
                <thead>
                  <tr>
                    <th>Bulan</th>
                    <th style={{ textAlign: 'right' }}>Pemasukan</th>
                    <th style={{ textAlign: 'right' }}>Pengeluaran</th>
                    <th style={{ textAlign: 'right' }}>Saldo</th>
                  </tr>
                </thead>
                <tbody>
                  {laporanBiaya.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.bulan}</strong></td>
                      <td style={{ textAlign: 'right', color: '#16a34a', fontWeight: 600 }}>{r.masuk}</td>
                      <td style={{ textAlign: 'right', color: '#dc2626', fontWeight: 600 }}>{r.keluar}</td>
                      <td style={{ textAlign: 'right', color: 'var(--primary-800)', fontWeight: 700 }}>{r.saldo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'sisa' && (
          <div>
            <h2>Laporan Pengembalian Sisa Panjar Perkara Tahun 2026</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
              Sisa panjar biaya perkara yang tidak terpakai wajib dikembalikan kepada para pihak setelah perkara selesai. Berikut rekapitulasinya:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table className="pa-table">
                <thead>
                  <tr>
                    <th>Bulan</th>
                    <th style={{ textAlign: 'center' }}>Jml. Perkara Selesai</th>
                    <th style={{ textAlign: 'right' }}>Total Sisa Panjar</th>
                    <th style={{ textAlign: 'center' }}>Sudah Dikembalikan</th>
                    <th style={{ textAlign: 'right' }}>Nilai Dikembalikan</th>
                  </tr>
                </thead>
                <tbody>
                  {laporanSisaPanjar.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.bulan}</strong></td>
                      <td style={{ textAlign: 'center' }}>{r.jumlahPerkara} perkara</td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>{r.totalSisa}</td>
                      <td style={{ textAlign: 'center' }}>
                        <span style={{
                          background: '#d1fae5', color: '#065f46', padding: '2px 10px',
                          borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600
                        }}>
                          {r.sudahDikembalikan} perkara
                        </span>
                      </td>
                      <td style={{ textAlign: 'right', color: '#16a34a', fontWeight: 700 }}>{r.nilaiKembali}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--gray-500)' }}>
              * Data merupakan representasi ilustratif. Para pihak yang belum menerima pengembalian sisa panjar dapat menghubungi Bagian Kepaniteraan Pengadilan Agama Kota Cimahi.
            </p>
          </div>
        )}
      </article>
    </KepaniteraanLayout>
  );
}

export default KeuanganPerkaraPage;
