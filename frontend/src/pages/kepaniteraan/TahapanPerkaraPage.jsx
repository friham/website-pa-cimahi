import KepaniteraanLayout from './KepaniteraanLayout';
import { FaListOl } from 'react-icons/fa';

function TahapanPerkaraPage() {
  const tahapan = [
    {
      fase: 'PENDAFTARAN',
      color: '#3b82f6',
      steps: [
        'Penggugat/Pemohon mengajukan surat gugatan/permohonan',
        'Pemeriksaan kelengkapan berkas oleh petugas PTSP',
        'Penaksiran dan pembayaran panjar biaya perkara',
        'Pemberian nomor register perkara oleh panitera',
      ]
    },
    {
      fase: 'PRA-SIDANG',
      color: '#f59e0b',
      steps: [
        'Penetapan Majelis Hakim (PMH) oleh Ketua Pengadilan',
        'Penetapan Hari Sidang (PHS) oleh Ketua Majelis',
        'Pemanggilan para pihak oleh Juru Sita/Jurusita Pengganti',
      ]
    },
    {
      fase: 'PERSIDANGAN',
      color: '#8b5cf6',
      steps: [
        'Sidang I: Upaya perdamaian / Mediasi (wajib)',
        'Mediasi oleh Mediator (maks. 30 hari kerja)',
        'Pembacaan Gugatan/Permohonan',
        'Jawaban Tergugat/Termohon',
        'Replik Penggugat dan Duplik Tergugat',
        'Sidang Pembuktian (Surat-surat dan Saksi-saksi)',
        'Kesimpulan para pihak (jika diperlukan)',
        'Musyawarah dan Pengambilan Putusan Majelis',
      ]
    },
    {
      fase: 'PUTUSAN',
      color: '#10b981',
      steps: [
        'Pembacaan Putusan/Penetapan oleh Majelis Hakim',
        'Pemberitahuan putusan kepada pihak yang tidak hadir',
        'Tenggang waktu pengajuan upaya hukum (14 hari)',
        'Putusan Berkekuatan Hukum Tetap (BHT) jika tidak ada upaya hukum',
      ]
    },
    {
      fase: 'PASCA PUTUSAN',
      color: '#ef4444',
      steps: [
        'Pengambilan Akta Cerai / Salinan Putusan',
        'Permohonan Eksekusi (jika pihak tidak penuhi putusan)',
        'Minutasi dan Pengarsipan berkas perkara',
      ]
    },
  ];

  return (
    <KepaniteraanLayout
      title="Tahapan-Tahapan Perkara"
      subtitle="Alur Lengkap Proses Penanganan Perkara di Pengadilan Agama Kota Cimahi"
      breadcrumb="Tahapan Perkara"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaListOl style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Proses yang Terstruktur & Transparan</h4>
          <p style={{ margin: 0 }}>
            Memahami tahapan perkara membantu para pihak mempersiapkan diri dengan lebih baik dan mengikuti setiap langkah proses persidangan secara aktif dan berpengetahuan.
          </p>
        </div>

        <div style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {tahapan.map((fase, fi) => (
            <div key={fi}>
              <div style={{
                display: 'inline-block', padding: '4px 16px',
                background: fase.color, color: 'white',
                borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem',
                marginBottom: '0.75rem', letterSpacing: '0.05em'
              }}>
                FASE {fi + 1}: {fase.fase}
              </div>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {fase.steps.map((step, si) => (
                  <div key={si} style={{
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                    background: '#f8fafc', padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)'
                  }}>
                    <div style={{
                      minWidth: '24px', height: '24px', borderRadius: '50%',
                      background: fase.color + '20', color: fase.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.75rem', flexShrink: 0, border: `2px solid ${fase.color}`
                    }}>
                      {si + 1}
                    </div>
                    <span style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </KepaniteraanLayout>
  );
}

export default TahapanPerkaraPage;
