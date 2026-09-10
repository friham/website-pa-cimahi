import KepaniteraanLayout from './KepaniteraanLayout';
import { FaGavel } from 'react-icons/fa';

function HakPokokPersidanganPage() {
  const rights = [
    {
      no: 1,
      title: 'Hak Diperlakukan Setara (Equality of Arms)',
      desc: 'Kedua belah pihak, Penggugat maupun Tergugat, diperlakukan secara seimbang dan memiliki hak yang sama untuk menyampaikan dalil, bukti, dan argumen di hadapan majelis hakim.'
    },
    {
      no: 2,
      title: 'Hak Didengar & Memberikan Keterangan',
      desc: 'Setiap pihak berhak untuk didengar keterangannya dan membantah keterangan pihak lawan (audi et alteram partem – dengarkan juga pihak yang lain).'
    },
    {
      no: 3,
      title: 'Hak Mengajukan Alat Bukti',
      desc: 'Berhak mengajukan alat bukti yang sah berupa surat, saksi, persangkaan, pengakuan, dan sumpah untuk memperkuat dalil-dalil yang diajukan.'
    },
    {
      no: 4,
      title: 'Hak Didampingi Penerjemah',
      desc: 'Apabila tidak memahami Bahasa Indonesia, pihak berhak meminta pengadilan untuk menyediakan juru bahasa/penerjemah yang kompeten.'
    },
    {
      no: 5,
      title: 'Hak Membaca/Mempelajari Berkas Perkara',
      desc: 'Berhak untuk melihat, membaca, dan mempelajari semua berkas dan dokumen dalam perkara yang bersangkutan (Inzage).'
    },
    {
      no: 6,
      title: 'Hak Mendapatkan Salinan Putusan',
      desc: 'Setiap pihak berhak mendapatkan salinan resmi putusan pengadilan secara cuma-cuma untuk perkara yang pihaknya berperkara secara prodeo, atau dengan membayar PNBP sesuai ketentuan.'
    },
    {
      no: 7,
      title: 'Hak Mengajukan Upaya Hukum',
      desc: 'Apabila tidak puas atas putusan, berhak mengajukan upaya hukum Banding, Kasasi, dan Peninjauan Kembali (PK) sesuai ketentuan hukum yang berlaku.'
    },
    {
      no: 8,
      title: 'Hak Tidak Dipaksa Memberikan Keterangan yang Memberatkan Diri Sendiri',
      desc: 'Pihak tidak boleh dipaksa untuk memberikan keterangan atau pengakuan yang merugikan dan memberatkan dirinya sendiri dalam proses persidangan.'
    }
  ];

  return (
    <KepaniteraanLayout
      title="Hak-Hak Pokok dalam Proses Persidangan"
      subtitle="Jaminan Hak Fundamental Para Pihak selama Proses Pemeriksaan Perkara Berlangsung"
      breadcrumb="Hak-Hak Pokok Persidangan"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaGavel style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Asas Peradilan yang Adil (Fair Trial)</h4>
          <p style={{ margin: 0 }}>
            Setiap pihak yang berperkara di Pengadilan Agama Kota Cimahi berhak mendapatkan proses persidangan yang adil, transparan, dan tidak memihak berdasarkan prinsip <em>due process of law</em>.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0' }}>
          {rights.map(r => (
            <div key={r.no} style={{
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
              background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--primary-700)'
            }}>
              <div style={{
                minWidth: '36px', height: '36px', borderRadius: '50%',
                background: 'var(--primary-800)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.95rem', flexShrink: 0
              }}>
                {r.no}
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem', color: 'var(--primary-900)' }}>{r.title}</h3>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </KepaniteraanLayout>
  );
}

export default HakPokokPersidanganPage;
