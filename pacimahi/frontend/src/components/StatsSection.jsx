import { FaGavel, FaCheckCircle, FaPercent, FaSmile, FaClock, FaHandshake } from 'react-icons/fa';
import './StatsSection.css';

const statsData = [
  {
    icon: FaGavel,
    number: '3.420',
    label: 'Perkara Diterima',
    detail: 'Tahun Berjalan 2026',
    color: '#2e7d32'
  },
  {
    icon: FaCheckCircle,
    number: '3.365',
    label: 'Perkara Diputus',
    detail: 'Berkekuatan Hukum Tetap',
    color: '#1565c0'
  },
  {
    icon: FaPercent,
    number: '98,4%',
    label: 'Tingkat Penyelesaian',
    detail: 'Standar Kinerja Mahkamah Agung',
    color: '#c69c3f'
  },
  {
    icon: FaSmile,
    number: '97,8%',
    label: 'Indeks Kepuasan (IKM)',
    detail: 'Predikat Sangat Baik',
    color: '#7b1fa2'
  },
  {
    icon: FaClock,
    number: '< 30 Hari',
    label: 'Rata-rata Waktu Putus',
    detail: 'Asas Cepat & Biaya Ringan',
    color: '#00838f'
  },
  {
    icon: FaHandshake,
    number: '74,2%',
    label: 'Mediasi Berhasil / Damai',
    detail: 'Kamar Mediasi Terpadu',
    color: '#d84315'
  }
];

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-section__header">
          <span className="stats-section__tag">Transparansi & Kinerja</span>
          <h2 className="section-title">Statistik Penanganan Perkara</h2>
          <p className="section-subtitle">
            Komitmen Pengadilan Agama Kota Cimahi dalam mewujudkan peradilan yang cepat, sederhana, dan berbiaya ringan
          </p>
        </div>

        <div className="stats-section__grid">
          {statsData.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="stat-box"
                style={{ '--stat-accent': s.color }}
              >
                <div className="stat-box__icon-wrapper">
                  <Icon className="stat-box__icon" />
                </div>
                <div className="stat-box__number">{s.number}</div>
                <div className="stat-box__label">{s.label}</div>
                <div className="stat-box__detail">{s.detail}</div>
                <div className="stat-box__glow"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
