import { useState } from 'react';
import ProfileLayout from './ProfileLayout';
import { FaUserTie, FaBuilding, FaCalendarAlt, FaThLarge, FaList } from 'react-icons/fa';

const mantanPimpinanData = [
  {
    no: 1,
    name: 'KH. MOH. SYARIF ISHAK',
    period: '1968 – 1974',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/KH_MOH_SYARIF_ISHAK.png',
  },
  {
    no: 2,
    name: 'Drs. KH. HIDAYAT RIFA’I',
    period: '1974 – 1978',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_KH_HIDAYAT_RIFAI.png',
  },
  {
    no: 3,
    name: 'H. MOCH. SAHIB, S.H.',
    period: '1978 – 1989',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/H_MOCH_SAHIB_SH.png',
  },
  {
    no: 4,
    name: 'Drs. H. MAHYUDDIN RAMLI',
    period: '1989 – 1995',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_MAHYUDDIN_RAMLI.png',
  },
  {
    no: 5,
    name: 'Drs. H. P. SUTOPO, S.H., M.Hum.',
    period: '1995 – 1998',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_P_SUTOPO_SH_MHum.png',
  },
  {
    no: 6,
    name: 'Drs. H. NURCHOLIS. SY, S.H.',
    period: '1999 – 2001',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_NURCHOLIS_SY_SH.png',
  },
  {
    no: 7,
    name: 'Drs. H. YAHYA KHOERUDDIN, S.H.',
    period: '2001 – 2002',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_YAHYA_KHOERUDDIN_SH.png',
  },
  {
    no: 8,
    name: 'Drs. H. ZURRIHAN AHMAD, S.H., M.H.',
    period: '2002 – 2003',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_ZURRIHAN_AHMAD_SH_MH.png',
  },
  {
    no: 9,
    name: 'Drs. H. SAM’UN ABDUH, S.Q., M.H.',
    period: '2003 – 2004',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_SAMUN_ABDUH_SQ_MH.png',
  },
  {
    no: 10,
    name: 'Drs. H. BARHAKIM SUSILA, S.H.',
    period: '2004 – 2006',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_BARHAKIM_SUSILA_SH.png',
  },
  {
    no: 11,
    name: 'Drs. H. AHMAD YUNUS, M.H.',
    period: '2006 – 2008',
    office: 'Jl. Terusan No. 38 Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_AHMAD_YUNUS_MH.png',
  },
  {
    no: 12,
    name: 'Drs. H. ARIEF SAEFUDDIN, S.H., M.H.',
    period: '2008 – 2010',
    office: 'Komplek Perkantoran Pemkab Bandung, Soreang',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_ARIEF_SAEFUDDIN_SH_MH.jpg',
  },
  {
    no: 13,
    name: 'H. IMAM AHFASY, S.H.',
    period: '2010 – 2012',
    office: 'Komplek Perkantoran Pemkab Bandung, Soreang',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Imam_Ahfasy_SH.jpg',
  },
  {
    no: 14,
    name: 'Drs. H. DUDUNG Abd. HALIM, S.H., M.H.',
    period: '2012 – 2016',
    office: 'Komplek Perkantoran Pemkab Bandung, Soreang',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_DUDUNG_Abd_HALIM_SH_MH.jpg',
  },
  {
    no: 15,
    name: 'Drs. H. SYAIFUDDIN ZUHRY, S.H., M.H.',
    period: '2016 – 2017',
    office: 'Jl. Raya Soreang Km. 16, Soreang, Kab. Bandung',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_SYAIFUDDIN_ZUHRY_SH_MH.png',
  },
  {
    no: 16,
    name: 'Drs. H. DUDUNG, S.H., M.H.',
    period: '2017 – 2020',
    office: 'Jl. Raya Soreang Km. 16 / Jl. Kolonel Masturi No. 180',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_DUDUNG_SH_MH.png',
  },
  {
    no: 17,
    name: 'Drs. Kausar Anhar, S.H.',
    period: '2020 – 2022',
    office: 'Jl. Kolonel Masturi No. 180 Kota Cimahi',
    photo: 'https://pa-cimahi.go.id/images/Kausar_Anhar.jpeg',
  },
  {
    no: 18,
    name: 'Drs. H. Rudi Hartono, S.H.',
    period: '2022 – 2024',
    office: 'Jl. Kolonel Masturi No. 180 Kota Cimahi',
    photo: 'https://pa-cimahi.go.id/images/2024/mantan_pimpinan/Drs_H_Rudi_Hartono_SH.png',
  },
];

function MantanPimpinanPage() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

  return (
    <ProfileLayout
      title="Daftar Nama Mantan Pimpinan"
      subtitle="Jejak Pengabdian dan Sejarah Kepemimpinan Pengadilan Agama Kota Cimahi Sejak 1968"
      breadcrumb="Mantan Pimpinan"
    >
      <article className="pa-article">
        <div className="pa-callout">
          <h4><FaUserTie style={{ marginRight: '8px', verticalAlign: '-2px' }} /> Penghormatan Atas Pengabdian</h4>
          <p style={{ margin: 0 }}>
            Daftar Ketua dan Pimpinan yang telah mendedikasikan tenaga, pikiran, dan kepemimpinannya dalam membangun serta mengembangkan Pengadilan Agama Kota Cimahi sejak didirikan pada tahun 1967/1968.
          </p>
        </div>

        {/* View Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1.5rem 0 1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontWeight: 600, color: 'var(--gray-700)' }}>
              Total Pimpinan Terdaftar: <strong>{mantanPimpinanData.length} Orang</strong>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--gray-300)',
                background: viewMode === 'grid' ? 'var(--primary-700)' : 'white',
                color: viewMode === 'grid' ? 'white' : 'var(--gray-700)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <FaThLarge size={13} /> Galeri Grid
            </button>
            <button
              onClick={() => setViewMode('table')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--gray-300)',
                background: viewMode === 'table' ? 'var(--primary-700)' : 'white',
                color: viewMode === 'table' ? 'white' : 'var(--gray-700)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <FaList size={13} /> Tabel Rinci
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="pimpinan-grid">
            {mantanPimpinanData.map((p) => (
              <div key={p.no} className="pimpinan-card">
                <div className="pimpinan-photo-wrapper">
                  <span className="pimpinan-badge-num">Ke-{p.no}</span>
                  <img
                    src={p.photo}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=1b5e20&color=fff&size=256';
                    }}
                  />
                </div>
                <div className="pimpinan-info">
                  <div className="pimpinan-name">{p.name}</div>
                  <div className="pimpinan-period">
                    <FaCalendarAlt style={{ marginRight: '5px', verticalAlign: '-1px' }} />
                    Masa Bakti: {p.period}
                  </div>
                  <div className="pimpinan-office">
                    <FaBuilding style={{ marginRight: '5px', verticalAlign: '-1px', color: 'var(--gray-400)' }} />
                    {p.office}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="pa-table-wrapper">
            <table className="pa-table">
              <thead>
                <tr>
                  <th style={{ width: '50px', textAlign: 'center' }}>No</th>
                  <th>Nama & Gelar Lengkap</th>
                  <th style={{ width: '140px', textAlign: 'center' }}>Masa Bakti</th>
                  <th>Alamat Kantor Saat Bertugas</th>
                </tr>
              </thead>
              <tbody>
                {mantanPimpinanData.map((p) => (
                  <tr key={p.no}>
                    <td style={{ textAlign: 'center', fontWeight: 600 }}>{p.no}</td>
                    <td><strong>{p.name}</strong></td>
                    <td style={{ textAlign: 'center', color: 'var(--primary-800)', fontWeight: 600 }}>{p.period}</td>
                    <td>{p.office}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </article>
    </ProfileLayout>
  );
}

export default MantanPimpinanPage;
