import KepaniteraanLayout from './KepaniteraanLayout';
import { FaFemale, FaChild } from 'react-icons/fa';

function HakPerempuanAnakPage() {
  return (
    <KepaniteraanLayout
      title="Hak-Hak Perempuan dan Anak Pasca Perceraian"
      subtitle="Perlindungan Hukum bagi Perempuan dan Anak setelah Putusnya Perkawinan"
      breadcrumb="Hak Perempuan & Anak"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaFemale style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Perlindungan Hukum Pasca Perceraian</h4>
          <p style={{ margin: 0 }}>
            Pengadilan Agama Kota Cimahi berkomitmen untuk memastikan perlindungan hak-hak perempuan (istri/mantan istri) dan anak-anak yang seringkali menjadi pihak paling rentan dalam proses perceraian.
          </p>
        </div>

        <h2>Hak-Hak Perempuan (Istri / Mantan Istri)</h2>
        <div style={{ display: 'grid', gap: '1rem', margin: '1.5rem 0' }}>
          {[
            {
              title: 'Mut\'ah',
              desc: 'Pemberian sukarela dari suami kepada istri yang diceraikannya, sebagai bentuk penghormatan dan kenangan manis selama pernikahan. Hakim dapat mempertimbangkan kewajiban pemberian Mut\'ah dalam perkara cerai talak.'
            },
            {
              title: 'Nafkah Iddah',
              desc: 'Nafkah yang wajib diberikan suami kepada istri selama masa iddah (masa tunggu pasca cerai talak), yang besarannya ditentukan berdasarkan kemampuan suami dan kepatutan. Iddah cerai talak adalah 3 kali quru\' (haidh).'
            },
            {
              title: 'Nafkah Lampau (Nafkah Madhiyah)',
              desc: 'Tuntutan atas nafkah yang tidak diberikan suami selama masa pernikahan. Dapat diajukan sebagai gugatan balik (rekonvensi) dalam perkara cerai talak.'
            },
            {
              title: 'Pembagian Harta Bersama (Gono-Gini)',
              desc: 'Harta yang diperoleh selama perkawinan berlangsung dibagi secara adil. Mantan istri berhak mendapatkan setengah (1/2) dari harta bersama, kecuali ada perjanjian perkawinan yang mengatur lain.'
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#fdf4ff', padding: '1.25rem', borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid #a855f7'
            }}>
              <h3 style={{ margin: '0 0 0.4rem', color: '#6b21a8', fontSize: '1.05rem' }}>{i + 1}. {item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2><FaChild style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Hak-Hak Anak Pasca Perceraian</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            {
              title: 'Hak Hadhanah (Hak Asuh Anak)',
              desc: 'Anak di bawah usia 12 tahun (mumayyiz) pada prinsipnya berada dalam asuhan ibu, selama ibu tidak mengabaikan kewajibannya atau memiliki perilaku yang merugikan anak. Anak di atas usia mumayyiz dapat memilih sendiri.'
            },
            {
              title: 'Hak Nafkah Anak',
              desc: 'Ayah wajib menanggung nafkah (biaya hidup dan pendidikan) anak-anaknya meskipun telah bercerai dari ibunya, hingga anak mencapai usia dewasa (21 tahun) atau telah menikah. Besaran ditentukan pengadilan.'
            },
            {
              title: 'Hak Bertemu & Berkunjung (Hak Umum)',
              desc: 'Orang tua yang tidak mendapatkan hak asuh tetap memiliki hak untuk bertemu dan mengunjungi anaknya secara berkala. Pengadilan dapat mengatur mekanisme kunjungan dalam putusannya.'
            },
          ].map((item, i) => (
            <div key={i} style={{
              background: '#f0fdf4', padding: '1.25rem', borderRadius: 'var(--radius-md)',
              borderLeft: '4px solid #16a34a'
            }}>
              <h3 style={{ margin: '0 0 0.4rem', color: '#15803d', fontSize: '1.05rem' }}>{i + 1}. {item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '2rem' }}>Dasar Hukum</h2>
        <ul>
          <li>UU Nomor 1 Tahun 1974 jo. UU Nomor 16 Tahun 2019 tentang Perkawinan.</li>
          <li>Kompilasi Hukum Islam (KHI), Pasal 80, 81, 105, 106, 149, 156.</li>
          <li>SEMA Nomor 7 Tahun 2012 tentang Rumusan Hukum Hasil Pleno Kamar MA RI (terkait nafkah iddah dan kompensasi).</li>
          <li>Peraturan Mahkamah Agung Nomor 3 Tahun 2017 tentang Pedoman Mengadili Perkara Perempuan Berhadapan dengan Hukum.</li>
        </ul>
      </article>
    </KepaniteraanLayout>
  );
}

export default HakPerempuanAnakPage;
