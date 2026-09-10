import KepaniteraanLayout from './KepaniteraanLayout';
import { FaBook } from 'react-icons/fa';

function PedomanKepaniteraanPage() {
  return (
    <KepaniteraanLayout
      title="Pedoman Pengelolaan Kepaniteraan"
      subtitle="Standar dan Pedoman Teknis Administrasi Kepaniteraan Pengadilan Agama Kota Cimahi"
      breadcrumb="Pedoman Kepaniteraan"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaBook style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Standarisasi Tata Kelola Kepaniteraan</h4>
          <p style={{ margin: 0 }}>
            Pedoman Pengelolaan Kepaniteraan merupakan panduan operasional yang menjadi acuan seluruh aparatur kepaniteraan dalam melaksanakan tugas pokok dan fungsinya secara tertib, profesional, dan akuntabel.
          </p>
        </div>

        <h2>Ruang Lingkup Pedoman</h2>
        <div style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0' }}>
          {[
            {
              title: 'Penerimaan dan Pendaftaran Perkara',
              desc: 'Standar prosedur penerimaan berkas gugatan/permohonan, pemeriksaan kelengkapan administrasi, penaksiran panjar biaya, dan pemberian nomor register perkara.'
            },
            {
              title: 'Pengelolaan Buku Induk dan Register Perkara',
              desc: 'Tata cara pencatatan, pengisian, dan pemeliharaan berbagai buku register perkara (gugatan, permohonan, banding, kasasi, PK, eksekusi, dll).'
            },
            {
              title: 'Pengelolaan Keuangan Perkara (Biaya DIPA dan Pihak Ketiga)',
              desc: 'Prosedur pencatatan penerimaan, pengeluaran, dan saldo panjar biaya perkara yang bersumber dari para pihak maupun DIPA (prodeo).'
            },
            {
              title: 'Minutasi dan Pengarsipan Berkas Perkara',
              desc: 'Standar penjilidan, pelengkapan, dan pengarsipan berkas perkara yang telah berkekuatan hukum tetap (BHT) sesuai kaidah kearsipan nasional.'
            },
            {
              title: 'Pelayanan Informasi dan Dokumen Perkara',
              desc: 'Standar pelayanan permintaan salinan putusan, akta cerai, dan informasi perkara kepada publik sesuai SK KMA Nomor 1-144/KMA/SK/I/2011.'
            },
            {
              title: 'Pelaksanaan Sidang dan Berita Acara Persidangan',
              desc: 'Standar pembuatan Berita Acara Sidang yang akurat, lengkap, dan ditandatangani secara tertib oleh Panitera Pengganti dan Ketua Majelis.'
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid var(--primary-700)'
            }}>
              <h3 style={{ margin: '0 0 0.4rem', color: 'var(--primary-900)', fontSize: '1rem' }}>{i + 1}. {item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2>Regulasi Utama yang Mengatur Kepaniteraan</h2>
        <ul>
          <li>Undang-Undang Nomor 7 Tahun 1989 jo. UU No. 3 Tahun 2006 jo. UU No. 50 Tahun 2009 tentang Peradilan Agama.</li>
          <li>Peraturan Mahkamah Agung (PERMA) Nomor 7 Tahun 2015 tentang Organisasi dan Tata Kerja Kepaniteraan dan Kesekretariatan Peradilan.</li>
          <li>Keputusan KMA RI Nomor KMA/007/SK/IV/1994 tentang Memberlakukan Buku I dan Buku II Pedoman Pelaksanaan Tugas dan Administrasi Peradilan.</li>
          <li>SK Dirjen Badilag tentang Standar Pelayanan Kepaniteraan Pengadilan Agama.</li>
        </ul>
      </article>
    </KepaniteraanLayout>
  );
}

export default PedomanKepaniteraanPage;
