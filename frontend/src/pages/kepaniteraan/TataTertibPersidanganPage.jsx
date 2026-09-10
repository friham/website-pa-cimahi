import KepaniteraanLayout from './KepaniteraanLayout';
import { FaClipboardList } from 'react-icons/fa';

function TataTertibPersidanganPage() {
  return (
    <KepaniteraanLayout
      title="Tata Tertib Persidangan"
      subtitle="Ketentuan Tata Tertib yang Wajib Dipatuhi oleh Semua Pihak di Ruang Sidang"
      breadcrumb="Tata Tertib Persidangan"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaClipboardList style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Menjaga Ketertiban dan Kehormatan Persidangan</h4>
          <p style={{ margin: 0 }}>
            Setiap orang yang hadir di ruang sidang Pengadilan Agama Kota Cimahi wajib menjaga ketertiban, ketenangan, dan kehormatan lembaga peradilan berdasarkan ketentuan perundang-undangan yang berlaku.
          </p>
        </div>

        <h2>Tata Tertib Umum di Ruang Sidang</h2>
        <div style={{ display: 'grid', gap: '0.75rem', margin: '1.5rem 0' }}>
          {[
            'Berpakaian sopan dan rapi (bagi pengunjung laki-laki: baju berkerah; bagi perempuan: menutup aurat).',
            'Dilarang menggunakan sandal atau alas kaki terbuka di dalam ruang sidang.',
            'Mematikan atau mengalihkan ponsel ke mode senyap (Silent/Vibrate) sebelum memasuki ruang sidang.',
            'Dilarang mengabadikan foto/video jalannya persidangan tanpa izin resmi dari Ketua Majelis Hakim.',
            'Berdiri dengan khidmat saat Majelis Hakim memasuki atau meninggalkan ruang sidang.',
            'Dilarang berbicara, berdiskusi, atau membuat keributan yang mengganggu jalannya persidangan.',
            'Dilarang membawa senjata tajam, senjata api, atau benda berbahaya lainnya ke dalam gedung pengadilan.',
            'Dilarang merokok di dalam seluruh area gedung pengadilan.',
            'Dilarang mempengaruhi, mengintimidasi, atau melakukan tekanan terhadap para pihak, saksi, atau hakim.',
            'Pengambilan gambar/perekaman video untuk kepentingan jurnalistik harus mendapat izin dari Ketua Pengadilan.',
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
              background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)'
            }}>
              <div style={{
                minWidth: '28px', height: '28px', borderRadius: '50%',
                background: i < 2 ? '#d1fae5' : i >= 6 ? '#fee2e2' : '#eff6ff',
                color: i < 2 ? '#065f46' : i >= 6 ? '#991b1b' : '#1e40af',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.85rem', flexShrink: 0
              }}>
                {i + 1}
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{item}</p>
            </div>
          ))}
        </div>

        <h2>Sanksi Pelanggaran</h2>
        <p>Pelanggaran terhadap tata tertib persidangan dapat dikenakan sanksi berupa:</p>
        <ul>
          <li>Teguran lisan oleh Ketua Majelis Hakim.</li>
          <li>Perintah keluar dari ruang sidang.</li>
          <li>Dilaporkan kepada pihak keamanan (Satuan Pengamanan Pengadilan).</li>
          <li>Dalam hal pelanggaran serius: dilaporkan kepada aparat kepolisian berdasarkan ketentuan hukum yang berlaku.</li>
        </ul>

        <h2>Dasar Hukum</h2>
        <ul>
          <li>Pasal 218 HIR / Pasal 152 RBg tentang ketertiban persidangan.</li>
          <li>UU Nomor 48 Tahun 2009 tentang Kekuasaan Kehakiman, Pasal 216 KUHP tentang tidak mematuhi perintah hakim.</li>
        </ul>
      </article>
    </KepaniteraanLayout>
  );
}

export default TataTertibPersidanganPage;
