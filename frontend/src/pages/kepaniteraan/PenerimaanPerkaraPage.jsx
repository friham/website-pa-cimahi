import KepaniteraanLayout from './KepaniteraanLayout';
import { FaFolderOpen } from 'react-icons/fa';

function PenerimaanPerkaraPage() {
  return (
    <KepaniteraanLayout
      title="Penerimaan Perkara"
      subtitle="Prosedur dan SOP Penerimaan Berkas Perkara di Meja Pendaftaran PTSP"
      breadcrumb="Penerimaan Perkara"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaFolderOpen style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Pelayanan Satu Atap (PTSP)</h4>
          <p style={{ margin: 0 }}>
            Penerimaan perkara di Pengadilan Agama Kota Cimahi dilayani melalui Pelayanan Terpadu Satu Pintu (PTSP) di lobi utama gedung pengadilan, memberikan kemudahan layanan dalam satu titik pelayanan.
          </p>
        </div>

        <h2>Alur Pendaftaran Perkara (SOP)</h2>
        <div style={{ position: 'relative', margin: '2rem 0' }}>
          {[
            {
              step: '1',
              title: 'Mengambil Nomor Antrian & Formulir',
              desc: 'Penggugat/Pemohon mengambil nomor antrian dan formulir pendaftaran di loket PTSP.'
            },
            {
              step: '2',
              title: 'Pemeriksaan Berkas',
              desc: 'Petugas memeriksa kelengkapan berkas: Surat Gugatan/Permohonan (3 rangkap + fotokopi sesuai pihak), fotokopi KTP, Akta Nikah/Surat Keterangan lainnya.'
            },
            {
              step: '3',
              title: 'Penaksiran Panjar Biaya',
              desc: 'Petugas menghitung dan menerbitkan SKUM (Surat Kuasa Untuk Membayar) yang berisi taksiran panjar biaya perkara.'
            },
            {
              step: '4',
              title: 'Pembayaran Panjar Biaya',
              desc: 'Pemohon membayar panjar biaya melalui teller Bank BRI atau kanal Virtual Account yang tersedia.'
            },
            {
              step: '5',
              title: 'Penyerahan Bukti Pembayaran',
              desc: 'Pemohon menyerahkan SKUM yang telah divalidasi dan bukti pembayaran bank kepada petugas PTSP.'
            },
            {
              step: '6',
              title: 'Pemberian Nomor Perkara',
              desc: 'Petugas membukukan perkara dalam buku register dan menyerahkan Nomor Perkara serta jadwal sidang pertama kepada Pemohon.'
            },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', gap: '1rem', marginBottom: '1rem'
            }}>
              <div style={{
                minWidth: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--primary-800)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '1rem', flexShrink: 0
              }}>
                {s.step}
              </div>
              <div style={{
                flex: 1, background: '#f8fafc', padding: '1rem 1.25rem',
                borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--primary-700)'
              }}>
                <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem', color: 'var(--primary-900)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2>Persyaratan Berkas Perkara</h2>
        <h3>Perkara Cerai Gugat</h3>
        <ul>
          <li>Surat Gugatan (4 rangkap)</li>
          <li>Fotokopi KTP Penggugat (2 lembar)</li>
          <li>Fotokopi Akta/Buku Nikah (2 lembar, asli dibawa ke sidang)</li>
          <li>Fotokopi Kartu Keluarga (2 lembar)</li>
          <li>Fotokopi Akta Kelahiran Anak (jika ada tuntutan hadhanah, 2 lembar)</li>
        </ul>
        <h3>Perkara Permohonan (Isbat Nikah, dll.)</h3>
        <ul>
          <li>Surat Permohonan (4 rangkap)</li>
          <li>Fotokopi KTP Pemohon (2 lembar)</li>
          <li>Fotokopi Kartu Keluarga (2 lembar)</li>
          <li>Dokumen pendukung sesuai jenis permohonan</li>
        </ul>
      </article>
    </KepaniteraanLayout>
  );
}

export default PenerimaanPerkaraPage;
