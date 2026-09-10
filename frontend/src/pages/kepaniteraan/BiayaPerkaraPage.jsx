import { useState } from 'react';
import KepaniteraanLayout from './KepaniteraanLayout';
import { FaMoneyBillWave } from 'react-icons/fa';

const skPanjarItems = [
  { kategori: 'Perkara Cerai Talak / Cerai Gugat (Radius I)', panjar: 'Rp 1.161.000,-' },
  { kategori: 'Perkara Cerai Talak / Cerai Gugat (Radius II)', panjar: 'Rp 1.311.000,-' },
  { kategori: 'Perkara Cerai Talak / Cerai Gugat (Radius III)', panjar: 'Rp 1.561.000,-' },
  { kategori: 'Perkara Permohonan (Itsbat Nikah, dll.) – Radius I', panjar: 'Rp 661.000,-' },
  { kategori: 'Perkara Permohonan (Radius II)', panjar: 'Rp 761.000,-' },
  { kategori: 'Perkara Permohonan (Radius III)', panjar: 'Rp 911.000,-' },
  { kategori: 'Perkara Prodeo (Dibebaskan dari biaya)', panjar: 'Rp 0,-' },
];

const komponenBiaya = [
  { komponen: 'Biaya Pendaftaran / Kepaniteraan', tarif: 'Rp 30.000,-' },
  { komponen: 'Biaya ATK (Alat Tulis Kantor)', tarif: 'Rp 75.000,-' },
  { komponen: 'Biaya Panggilan Penggugat/Pemohon (Radius I)', tarif: 'Rp 100.000,-' },
  { komponen: 'Biaya Panggilan Tergugat/Termohon (Radius I)', tarif: 'Rp 100.000,-' },
  { komponen: 'Biaya Pemberitahuan Isi Putusan', tarif: 'Rp 100.000,-' },
  { komponen: 'Biaya Meterai', tarif: 'Rp 10.000,-' },
  { komponen: 'Biaya Redaksi', tarif: 'Rp 10.000,-' },
  { komponen: 'Biaya PNBP Pendaftaran', tarif: 'Rp 30.000,-' },
];

function BiayaPerkaraPage() {
  const [activeTab, setActiveTab] = useState('sk');

  return (
    <KepaniteraanLayout
      title="SK Panjar & Biaya Proses Berperkara"
      subtitle="Rincian Panjar Biaya Perkara dan SK Ketua Pengadilan Agama Kota Cimahi"
      breadcrumb="Biaya Perkara"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaMoneyBillWave style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Transparansi Biaya Perkara</h4>
          <p style={{ margin: 0 }}>
            Seluruh komponen dan besaran biaya perkara ditetapkan melalui Surat Keputusan Ketua Pengadilan Agama Kota Cimahi berdasarkan ketentuan Mahkamah Agung RI dan diumumkan secara terbuka kepada masyarakat.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
          {[
            { id: 'sk', label: 'SK Panjar Biaya Perkara' },
            { id: 'biaya', label: 'Komponen Biaya Proses' },
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

        {activeTab === 'sk' && (
          <div>
            <h2>SK Ketua – Taksiran Panjar Biaya Perkara</h2>
            <p>Besaran taksiran panjar biaya perkara di Pengadilan Agama Kota Cimahi berdasarkan radius domisili para pihak:</p>
            <div style={{ overflowX: 'auto' }}>
              <table className="pa-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Kategori Perkara & Radius</th>
                    <th style={{ textAlign: 'center' }}>Taksiran Panjar</th>
                  </tr>
                </thead>
                <tbody>
                  {skPanjarItems.map((item, i) => (
                    <tr key={i}>
                      <td style={{ textAlign: 'center' }}>{i + 1}</td>
                      <td>{item.kategori}</td>
                      <td style={{ textAlign: 'center', fontWeight: 700, color: 'var(--primary-800)' }}>{item.panjar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--gray-500)', marginTop: '1rem' }}>
              * Radius I: dalam kota; Radius II: luar kota dalam kab/kota yang berbatasan; Radius III: luar Jawa Barat. Biaya dapat berubah sesuai SK terbaru.
            </p>
          </div>
        )}

        {activeTab === 'biaya' && (
          <div>
            <h2>Rincian Komponen Biaya Proses Berperkara</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className="pa-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Komponen Biaya</th>
                    <th style={{ textAlign: 'center' }}>Tarif</th>
                  </tr>
                </thead>
                <tbody>
                  {komponenBiaya.map((item, i) => (
                    <tr key={i}>
                      <td style={{ textAlign: 'center' }}>{i + 1}</td>
                      <td>{item.komponen}</td>
                      <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.tarif}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 style={{ marginTop: '1.5rem' }}>Dasar Hukum Biaya Perkara</h3>
            <ul>
              <li>PP RI Nomor 5 Tahun 2019 tentang Jenis dan Tarif PNBP yang Berlaku di MA RI.</li>
              <li>Surat Keputusan Ketua Pengadilan Agama Kota Cimahi tentang Taksiran Panjar Biaya Perkara (diperbarui setiap tahun).</li>
              <li>PERMA Nomor 2 Tahun 2009 tentang Biaya Proses Penyelesaian Perkara dan Pengelolaannya.</li>
            </ul>
          </div>
        )}
      </article>
    </KepaniteraanLayout>
  );
}

export default BiayaPerkaraPage;
