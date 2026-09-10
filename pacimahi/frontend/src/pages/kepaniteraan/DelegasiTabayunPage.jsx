import KepaniteraanLayout from './KepaniteraanLayout';
import { FaExchangeAlt } from 'react-icons/fa';

function DelegasiTabayunPage() {
  return (
    <KepaniteraanLayout
      title="Delegasi / Tabayun"
      subtitle="Mekanisme Bantuan Pemanggilan dan Pemeriksaan melalui Pengadilan Lain"
      breadcrumb="Delegasi / Tabayun"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaExchangeAlt style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Koordinasi Antar Pengadilan</h4>
          <p style={{ margin: 0 }}>
            Delegasi adalah permohonan bantuan yang dikirimkan oleh pengadilan pengaju kepada pengadilan lain untuk melakukan tindakan tertentu seperti pemanggilan, penyampaian putusan, atau pemeriksaan saksi yang berada di luar yurisdiksi wilayahnya.
          </p>
        </div>

        <h2>Jenis-Jenis Delegasi</h2>
        <div style={{ display: 'grid', gap: '1.25rem', margin: '1.5rem 0' }}>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-700)' }}>
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--primary-900)', fontSize: '1.05rem' }}>1. Delegasi Pemanggilan (Tabayun)</h3>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Digunakan ketika salah satu pihak (Tergugat/Termohon) berdomisili di luar wilayah yurisdiksi Pengadilan Agama Kota Cimahi. Permintaan bantuan pemanggilan dikirim ke pengadilan yang berwenang atas wilayah domisili pihak tersebut.
            </p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-700)' }}>
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--primary-900)', fontSize: '1.05rem' }}>2. Delegasi Pemberitahuan Putusan</h3>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Pengiriman permintaan bantuan pemberitahuan isi putusan/amar putusan kepada pihak yang berdomisili di daerah lain melalui pengadilan setempat.
            </p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-700)' }}>
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--primary-900)', fontSize: '1.05rem' }}>3. Delegasi Pemeriksaan Setempat (Descente)</h3>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Permintaan kepada pengadilan lain untuk melakukan pemeriksaan setempat (sidang di lapangan) atas obyek sengketa yang berada di luar wilayah yurisdiksi pengadilan pengaju.
            </p>
          </div>
          <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary-700)' }}>
            <h3 style={{ margin: '0 0 0.5rem', color: 'var(--primary-900)', fontSize: '1.05rem' }}>4. Delegasi Eksekusi</h3>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)' }}>
              Permintaan kepada pengadilan lain untuk melaksanakan eksekusi (Aanmaning atau Sita Eksekusi) atas obyek eksekusi yang berada di luar yurisdiksi pengadilan yang memutus.
            </p>
          </div>
        </div>

        <h2>Alur Delegasi di PA Kota Cimahi</h2>
        <ol>
          <li>Majelis Hakim menerbitkan surat permohonan bantuan delegasi kepada Ketua Pengadilan Agama tujuan.</li>
          <li>Bagian Kepaniteraan mempersiapkan surat delegasi beserta berkas/dokumen terkait.</li>
          <li>Surat dikirimkan melalui pos tercatat atau secara elektronik (e-delegasi) kepada pengadilan penerima.</li>
          <li>Pengadilan penerima delegasi melaksanakan tindakan yang diminta dan mengirimkan laporan balik (berita acara/relaas) kepada PA Kota Cimahi.</li>
        </ol>

        <h2>Dasar Hukum</h2>
        <ul>
          <li>Pasal 142 RBg / Pasal 117 HIR.</li>
          <li>SK KMA RI Nomor 026/KMA/SK/II/2012 tentang Standar Pelayanan Peradilan.</li>
          <li>Surat Edaran Mahkamah Agung RI (SEMA) terkait koordinasi pengadilan.</li>
        </ul>
      </article>
    </KepaniteraanLayout>
  );
}

export default DelegasiTabayunPage;
