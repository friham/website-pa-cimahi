import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import DynamicCMSPage from './components/DynamicCMSPage';

// Tentang Pengadilan Pages
import PengantarKetuaPage from './pages/tentang-pengadilan/PengantarKetuaPage';
import VisiMisiPage from './pages/tentang-pengadilan/VisiMisiPage';
import TugasPokokFungsiPage from './pages/tentang-pengadilan/TugasPokokFungsiPage';
import WilayahYurisdiksiPage from './pages/tentang-pengadilan/WilayahYurisdiksiPage';
import StrukturOrganisasiPage from './pages/tentang-pengadilan/StrukturOrganisasiPage';
import SejarahTanggalPage from './pages/tentang-pengadilan/SejarahTanggalPage';
import SejarahSKPage from './pages/tentang-pengadilan/SejarahSKPage';
import MantanPimpinanPage from './pages/tentang-pengadilan/MantanPimpinanPage';
import AgendaKegiatanPage from './pages/tentang-pengadilan/AgendaKegiatanPage';
import AlamatPengadilanPage from './pages/tentang-pengadilan/AlamatPengadilanPage';

// Profile Pegawai & Statistik Kepegawaian Pages
import KetuaWakilKetuaPage from './pages/tentang-pengadilan/KetuaWakilKetuaPage';
import SDMHakimPage from './pages/tentang-pengadilan/SDMHakimPage';
import SDMKepaniteraanPage from './pages/tentang-pengadilan/SDMKepaniteraanPage';
import SDMKesekretariatanPage from './pages/tentang-pengadilan/SDMKesekretariatanPage';
import SDMFungsionalPage from './pages/tentang-pengadilan/SDMFungsionalPage';
import StatistikKepegawaianPage from './pages/tentang-pengadilan/StatistikKepegawaianPage';

// Informasi Umum Pages
import SOPPengadilanPage from './pages/informasi-umum/SOPPengadilanPage';
import ProgramKerjaPage from './pages/informasi-umum/ProgramKerjaPage';
import LaporanTahunanPage from './pages/informasi-umum/LaporanTahunanPage';

// Kepaniteraan Pages
import PosbakumPage from './pages/kepaniteraan/PosbakumPage';
import ProdeoPage from './pages/kepaniteraan/ProdeoPage';
import HakPencariKeadilanPage from './pages/kepaniteraan/HakPencariKeadilanPage';
import ProsedurBerperkaraPage from './pages/kepaniteraan/ProsedurBerperkaraPage';
import ECourtPage from './pages/kepaniteraan/ECourtPage';
import HakPokokPersidanganPage from './pages/kepaniteraan/HakPokokPersidanganPage';
import MediasiPage from './pages/kepaniteraan/MediasiPage';
import PanggilanGhaibPage from './pages/kepaniteraan/PanggilanGhaibPage';
import DelegasiTabayunPage from './pages/kepaniteraan/DelegasiTabayunPage';
import PedomanKepaniteraanPage from './pages/kepaniteraan/PedomanKepaniteraanPage';
import SIPPPage from './pages/kepaniteraan/SIPPPage';
import DirektoriPutusanPage from './pages/kepaniteraan/DirektoriPutusanPage';
import TataTertibPersidanganPage from './pages/kepaniteraan/TataTertibPersidanganPage';
import JadwalPersidanganPage from './pages/kepaniteraan/JadwalPersidanganPage';
import StatistikPerkaraPage from './pages/kepaniteraan/StatistikPerkaraPage';
import BiayaPerkaraPage from './pages/kepaniteraan/BiayaPerkaraPage';
import HakPerempuanAnakPage from './pages/kepaniteraan/HakPerempuanAnakPage';
import PenerimaanPerkaraPage from './pages/kepaniteraan/PenerimaanPerkaraPage';
import LayananInformasiPerkaraPage from './pages/kepaniteraan/LayananInformasiPerkaraPage';
import TahapanPerkaraPage from './pages/kepaniteraan/TahapanPerkaraPage';
import KeuanganPerkaraPage from './pages/kepaniteraan/KeuanganPerkaraPage';

// Kesekretariatan Pages
import DIPAPage from './pages/kesekretariatan/DIPAPage';
import SAKIPPage from './pages/kesekretariatan/SAKIPPage';
import PengadaanBarangJasaPage from './pages/kesekretariatan/PengadaanBarangJasaPage';
import AsetInventarisPage from './pages/kesekretariatan/AsetInventarisPage';
import LHKPNPage from './pages/kesekretariatan/LHKPNPage';
import RealisasiPNBPPage from './pages/kesekretariatan/RealisasiPNBPPage';
import SurveiPelayananPublikPage from './pages/kesekretariatan/SurveiPelayananPublikPage';
import KepegawaianPage from './pages/kesekretariatan/KepegawaianPage';
import KategorisasiInformasiPage from './pages/kesekretariatan/KategorisasiInformasiPage';
import SuratMenyuratPimpinanPage from './pages/kesekretariatan/SuratMenyuratPimpinanPage';
import PedomanKesekretariatanPage from './pages/kesekretariatan/PedomanKesekretariatanPage';
import UPTKesekretariatanPage from './pages/kesekretariatan/UPTKesekretariatanPage';
import LaporanKesekretariatanPage from './pages/kesekretariatan/LaporanKesekretariatanPage';

// Layanan Publik Pages
import PTSPPage from './pages/layanan-publik/PTSPPage';
import ZonaIntegritasPage from './pages/layanan-publik/ZonaIntegritasPage';
import AlurPrioritasPTSPPage from './pages/layanan-publik/AlurPrioritasPTSPPage';
import APMPage from './pages/layanan-publik/APMPage';
import PengawasanKodeEtikPage from './pages/layanan-publik/PengawasanKodeEtikPage';
import LayananPengaduanPage from './pages/layanan-publik/LayananPengaduanPage';
import LayananInformasiPPIDPage from './pages/layanan-publik/LayananInformasiPPIDPage';
import FasilitasPublikPage from './pages/layanan-publik/FasilitasPublikPage';
import MediaPublikasiLayananPage from './pages/layanan-publik/MediaPublikasiLayananPage';

// Publikasi Pages
import BeritaPage from './pages/publikasi/BeritaPage';
import PengumumanPage from './pages/publikasi/PengumumanPage';
import ArsipPeraturanPage from './pages/publikasi/ArsipPeraturanPage';
import GaleriPage from './pages/publikasi/GaleriPage';
import ArtikelHukumPage from './pages/publikasi/ArtikelHukumPage';
import PerjanjianKerjasamaPage from './pages/publikasi/PerjanjianKerjasamaPage';
import HasilPenelitianPage from './pages/publikasi/HasilPenelitianPage';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <AccessibilityProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Auth & Admin Routes */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="/login" element={<Navigate to="/admin/login" replace />} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Profil Pengadilan Routes (Dinamis terhubung ke CMS Admin & Database) */}
            <Route path="/tentang-pengadilan/pengantar-dari-ketua-pengadilan" element={<DynamicCMSPage customSlug="pengantar-dari-ketua-pengadilan" fallbackComponent={PengantarKetuaPage} />} />
            <Route path="/tentang-pengadilan/visi-dan-misi" element={<DynamicCMSPage customSlug="visi-dan-misi" fallbackComponent={VisiMisiPage} />} />
            <Route path="/tentang-pengadilan/kekuasaan-dan-ruang-lingkup-pengadilan-agama" element={<DynamicCMSPage customSlug="kekuasaan-dan-ruang-lingkup-pengadilan-agama" fallbackComponent={TugasPokokFungsiPage} />} />
            <Route path="/tentang-pengadilan/wilayah-yurisdiksi" element={<DynamicCMSPage customSlug="wilayah-yurisdiksi" fallbackComponent={WilayahYurisdiksiPage} />} />
            <Route path="/tentang-pengadilan/struktur-organisasi" element={<DynamicCMSPage customSlug="struktur-organisasi" fallbackComponent={StrukturOrganisasiPage} />} />
            <Route path="/tentang-pengadilan/sejarah-pengadilan-cmi/tgl-pembentukan-pengadilan" element={<DynamicCMSPage customSlug="tgl-pembentukan-pengadilan" fallbackComponent={SejarahTanggalPage} />} />
            <Route path="/tentang-pengadilan/sejarah-pengadilan-cmi/sk-pembentukan-pengadilan" element={<DynamicCMSPage customSlug="sk-pembentukan-pengadilan" fallbackComponent={SejarahSKPage} />} />
            <Route path="/tentang-pengadilan/daftar-nama-mantan-pimpinan" element={<DynamicCMSPage customSlug="daftar-nama-mantan-pimpinan" fallbackComponent={MantanPimpinanPage} />} />
            <Route path="/tentang-pengadilan/agenda-kerja-pimpinan" element={<DynamicCMSPage customSlug="agenda-kerja-pimpinan" fallbackComponent={AgendaKegiatanPage} />} />
            <Route path="/tentang-pengadilan/alamat-pengadilan" element={<DynamicCMSPage customSlug="alamat-pengadilan" fallbackComponent={AlamatPengadilanPage} />} />

            {/* Profil Pegawai & SDM Routes (Dinamis terhubung ke CMS Admin & Database) */}
            <Route path="/tentang-pengadilan/profile-pengadilan" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/ketua-wakil-ketua" replace />} />
            <Route path="/tentang-pengadilan/profile-pengadilan/profil-pegawai/ketua-wakil-ketua" element={<DynamicCMSPage customSlug="ketua-wakil-ketua" fallbackComponent={KetuaWakilKetuaPage} />} />
            <Route path="/tentang-pengadilan/profile-pengadilan/profil-pegawai/sdm-hakim" element={<DynamicCMSPage customSlug="sdm-hakim" fallbackComponent={SDMHakimPage} />} />
            <Route path="/tentang-pengadilan/profile-pengadilan/profil-pegawai/kepaniteraann" element={<DynamicCMSPage customSlug="kepaniteraann" fallbackComponent={SDMKepaniteraanPage} />} />
            <Route path="/tentang-pengadilan/profile-pengadilan/profil-pegawai/kesekretariatan" element={<DynamicCMSPage customSlug="kesekretariatan" fallbackComponent={SDMKesekretariatanPage} />} />
            <Route path="/tentang-pengadilan/profile-pengadilan/profil-pegawai/fungsional-dan-pelaksana" element={<DynamicCMSPage customSlug="fungsional-dan-pelaksana" fallbackComponent={SDMFungsionalPage} />} />
            <Route path="/tentang-pengadilan/profile-pengadilan/statistik-kepegawaian" element={<DynamicCMSPage customSlug="statistik-kepegawaian" fallbackComponent={StatistikKepegawaianPage} />} />

            {/* Dynamic CMS Catch-All Routes for new pages created in Admin */}
            <Route path="/p/:slug" element={<DynamicCMSPage />} />
            <Route path="/tentang-pengadilan/:slug" element={<DynamicCMSPage />} />

            {/* Informasi Umum Routes */}
            <Route path="/informasi-umum" element={<Navigate to="/informasi-umum/standar-operasional-prosedur" replace />} />
            <Route path="/informasi-umum/standar-operasional-prosedur" element={<SOPPengadilanPage />} />
            <Route path="/informasi-umum/program-kerja" element={<ProgramKerjaPage />} />
            <Route path="/informasi-umum/laporan-tahunan" element={<LaporanTahunanPage />} />

            {/* Aliases for 'transparansi-pengadilan' (legacy live site URLs) */}
            <Route path="/transparansi-pengadilan/standar-operasional-prosedur" element={<Navigate to="/informasi-umum/standar-operasional-prosedur" replace />} />
            <Route path="/transparansi-pengadilan/standar-operasional-prosedur/kepaniteraan" element={<Navigate to="/informasi-umum/standar-operasional-prosedur" replace />} />
            <Route path="/transparansi-pengadilan/program-kerja" element={<Navigate to="/informasi-umum/program-kerja" replace />} />
            <Route path="/transparansi-pengadilan/laporan-tahunan" element={<Navigate to="/informasi-umum/laporan-tahunan" replace />} />

            {/* Aliases for 'tentang-pengadian' (legacy typo support) */}
            <Route path="/tentang-pengadian/pengantar-dari-ketua-pengadilan" element={<Navigate to="/tentang-pengadilan/pengantar-dari-ketua-pengadilan" replace />} />
            <Route path="/tentang-pengadian/visi-dan-misi" element={<Navigate to="/tentang-pengadilan/visi-dan-misi" replace />} />
            <Route path="/tentang-pengadian/kekuasaan-dan-ruang-lingkup-pengadilan-agama" element={<Navigate to="/tentang-pengadilan/kekuasaan-dan-ruang-lingkup-pengadilan-agama" replace />} />
            <Route path="/tentang-pengadian/wilayah-yurisdiksi" element={<Navigate to="/tentang-pengadilan/wilayah-yurisdiksi" replace />} />
            <Route path="/tentang-pengadian/struktur-organisasi" element={<Navigate to="/tentang-pengadilan/struktur-organisasi" replace />} />
            <Route path="/tentang-pengadian/sejarah-pengadilan-cmi/tgl-pembentukan-pengadilan" element={<Navigate to="/tentang-pengadilan/sejarah-pengadilan-cmi/tgl-pembentukan-pengadilan" replace />} />
            <Route path="/tentang-pengadian/sejarah-pengadilan-cmi/sk-pembentukan-pengadilan" element={<Navigate to="/tentang-pengadilan/sejarah-pengadilan-cmi/sk-pembentukan-pengadilan" replace />} />
            <Route path="/tentang-pengadian/daftar-nama-mantan-pimpinan" element={<Navigate to="/tentang-pengadilan/daftar-nama-mantan-pimpinan" replace />} />
            <Route path="/tentang-pengadian/agenda-kerja-pimpinan" element={<Navigate to="/tentang-pengadilan/agenda-kerja-pimpinan" replace />} />
            <Route path="/tentang-pengadian/alamat-pengadilan" element={<Navigate to="/tentang-pengadilan/alamat-pengadilan" replace />} />
            
            <Route path="/tentang-pengadian/profile-pengadilan" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/ketua-wakil-ketua" replace />} />
            <Route path="/tentang-pengadian/profile-pengadilan/profil-pegawai/ketua-wakil-ketua" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/ketua-wakil-ketua" replace />} />
            <Route path="/tentang-pengadian/profile-pengadilan/profil-pegawai/sdm-hakim" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/sdm-hakim" replace />} />
            <Route path="/tentang-pengadian/profile-pengadilan/profil-pegawai/kepaniteraann" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/kepaniteraann" replace />} />
            <Route path="/tentang-pengadian/profile-pengadilan/profil-pegawai/kesekretariatan" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/kesekretariatan" replace />} />
            <Route path="/tentang-pengadian/profile-pengadilan/profil-pegawai/fungsional-dan-pelaksana" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/profil-pegawai/fungsional-dan-pelaksana" replace />} />
            <Route path="/tentang-pengadian/profile-pengadilan/statistik-kepegawaian" element={<Navigate to="/tentang-pengadilan/profile-pengadilan/statistik-kepegawaian" replace />} />

            {/* Kepaniteraan Routes */}
            <Route path="/kepaniteraan" element={<Navigate to="/kepaniteraan/posbakum" replace />} />
            <Route path="/kepaniteraan/posbakum" element={<PosbakumPage />} />
            <Route path="/kepaniteraan/prodeo" element={<ProdeoPage />} />
            <Route path="/kepaniteraan/hak-pencari-keadilan" element={<HakPencariKeadilanPage />} />
            <Route path="/kepaniteraan/hak-hak-pencari-keadilan" element={<Navigate to="/kepaniteraan/hak-pencari-keadilan" replace />} />
            <Route path="/kepaniteraan/prosedur-berperkara" element={<ProsedurBerperkaraPage />} />
            <Route path="/kepaniteraan/ecourt" element={<ECourtPage />} />
            <Route path="/kepaniteraan/layanan-e-court" element={<Navigate to="/kepaniteraan/ecourt" replace />} />
            <Route path="/kepaniteraan/hak-pokok-persidangan" element={<HakPokokPersidanganPage />} />
            <Route path="/kepaniteraan/mediasi" element={<MediasiPage />} />
            <Route path="/kepaniteraan/panggilan-ghaib" element={<PanggilanGhaibPage />} />
            <Route path="/kepaniteraan/delegasi-tabayun" element={<DelegasiTabayunPage />} />
            <Route path="/kepaniteraan/pedoman-kepaniteraan" element={<PedomanKepaniteraanPage />} />
            <Route path="/kepaniteraan/pedoman-pengelolaan-kepaniteraan" element={<Navigate to="/kepaniteraan/pedoman-kepaniteraan" replace />} />
            <Route path="/kepaniteraan/sipp" element={<SIPPPage />} />
            <Route path="/kepaniteraan/direktori-putusan" element={<DirektoriPutusanPage />} />
            <Route path="/kepaniteraan/tata-tertib-persidangan" element={<TataTertibPersidanganPage />} />
            <Route path="/kepaniteraan/jadwal-persidangan" element={<JadwalPersidanganPage />} />
            <Route path="/kepaniteraan/agenda-jadwal-persidangan" element={<Navigate to="/kepaniteraan/jadwal-persidangan" replace />} />
            <Route path="/kepaniteraan/statistik-perkara" element={<StatistikPerkaraPage />} />
            <Route path="/kepaniteraan/biaya-perkara" element={<BiayaPerkaraPage />} />
            <Route path="/kepaniteraan/biaya-proses-berperkara" element={<Navigate to="/kepaniteraan/biaya-perkara" replace />} />
            <Route path="/kepaniteraan/hak-perempuan-anak" element={<HakPerempuanAnakPage />} />
            <Route path="/kepaniteraan/hak-perempuan-dan-anak" element={<Navigate to="/kepaniteraan/hak-perempuan-anak" replace />} />
            <Route path="/kepaniteraan/penerimaan-perkara" element={<PenerimaanPerkaraPage />} />
            <Route path="/kepaniteraan/layanan-informasi-perkara" element={<LayananInformasiPerkaraPage />} />
            <Route path="/kepaniteraan/tahapan-perkara" element={<TahapanPerkaraPage />} />
            <Route path="/kepaniteraan/tahapan-tahapan-perkara" element={<Navigate to="/kepaniteraan/tahapan-perkara" replace />} />
            <Route path="/kepaniteraan/keuangan-perkara" element={<KeuanganPerkaraPage />} />

            {/* Kesekretariatan Routes */}
            <Route path="/kesekretariatan" element={<Navigate to="/kesekretariatan/pengadaan-barang-dan-jasa" replace />} />
            <Route path="/kesekretariatan/pengadaan-barang-dan-jasa" element={<PengadaanBarangJasaPage />} />
            <Route path="/kesekretariatan/pengadaan-barang-jasa" element={<Navigate to="/kesekretariatan/pengadaan-barang-dan-jasa" replace />} />
            <Route path="/kesekretariatan/dipa" element={<DIPAPage />} />
            <Route path="/kesekretariatan/dipa-anggaran" element={<Navigate to="/kesekretariatan/dipa" replace />} />
            <Route path="/kesekretariatan/realisasi-pnbp" element={<RealisasiPNBPPage />} />
            <Route path="/kesekretariatan/daftar-aset-dan-inventaris" element={<AsetInventarisPage />} />
            <Route path="/kesekretariatan/aset-inventaris" element={<Navigate to="/kesekretariatan/daftar-aset-dan-inventaris" replace />} />
            <Route path="/kesekretariatan/survei-pelayanan-publik" element={<SurveiPelayananPublikPage />} />
            <Route path="/kesekretariatan/kepegawaian" element={<KepegawaianPage />} />
            <Route path="/kesekretariatan/kategorisasi-informasi" element={<KategorisasiInformasiPage />} />
            <Route path="/kesekretariatan/sakip" element={<SAKIPPage />} />
            <Route path="/kesekretariatan/surat-menyurat-pimpinan" element={<SuratMenyuratPimpinanPage />} />
            <Route path="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" element={<PedomanKesekretariatanPage />} />
            <Route path="/kesekretariatan/pedoman-kesekretariatan" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/kesekretariatan/unit-pelaksana-teknis-kesekretariatan" element={<UPTKesekretariatanPage />} />
            <Route path="/kesekretariatan/upt-kesekretariatan" element={<Navigate to="/kesekretariatan/unit-pelaksana-teknis-kesekretariatan" replace />} />
            <Route path="/kesekretariatan/laporan" element={<LaporanKesekretariatanPage />} />
            <Route path="/kesekretariatan/lhkpn-lhkasn" element={<LHKPNPage />} />

            {/* Layanan Publik Routes */}
            <Route path="/layanan-publik" element={<Navigate to="/layanan-publik/ptsp" replace />} />
            <Route path="/layanan-publik/ptsp" element={<PTSPPage />} />
            <Route path="/layanan-publik/alur-pelayanan-prioritas-ptsp" element={<AlurPrioritasPTSPPage />} />
            <Route path="/layanan-publik/akreditasi-penjaminan-mutu" element={<APMPage />} />
            <Route path="/layanan-publik/zona-integritas" element={<ZonaIntegritasPage />} />
            <Route path="/layanan-publik/pengawasan-dan-kode-etik" element={<PengawasanKodeEtikPage />} />
            <Route path="/layanan-publik/layanan-pengaduan" element={<LayananPengaduanPage />} />
            <Route path="/layanan-publik/layanan-informasi" element={<LayananInformasiPPIDPage />} />
            <Route path="/layanan-publik/fasilitas-publik" element={<FasilitasPublikPage />} />
            <Route path="/layanan-publik/brosur-digital" element={<MediaPublikasiLayananPage />} />

            {/* Kegiatan Pengadilan Live Site Aliases */}
            <Route path="/kegiatan-pengadilan/kumpulan-sk" element={<Navigate to="/layanan-publik/brosur-digital" replace />} />
            <Route path="/kegiatan-pengadilan/alur-pelayanan-prioritas-ptsp" element={<Navigate to="/layanan-publik/alur-pelayanan-prioritas-ptsp" replace />} />
            <Route path="/kegiatan-pengadilan/youtube-pa-kota-cimahi" element={<Navigate to="/layanan-publik/brosur-digital" replace />} />
            <Route path="/kegiatan-pengadilan/tautan-terkait" element={<Navigate to="/layanan-publik/brosur-digital" replace />} />
            <Route path="/kegiatan-pengadilan/akreditasi-penjaminan-mutu" element={<Navigate to="/layanan-publik/akreditasi-penjaminan-mutu" replace />} />
            <Route path="/kegiatan-pengadilan/akreditasi-penjaminan-mutu/*" element={<Navigate to="/layanan-publik/akreditasi-penjaminan-mutu" replace />} />
            <Route path="/kegiatan-pengadilan/zona-integritas" element={<Navigate to="/layanan-publik/zona-integritas" replace />} />
            <Route path="/kegiatan-pengadilan/zona-integritas/*" element={<Navigate to="/layanan-publik/zona-integritas" replace />} />
            <Route path="/kegiatan-pengadilan/laporan-akses-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/daftar-nama-pejabat-pengawas" element={<Navigate to="/layanan-publik/fasilitas-publik" replace />} />
            <Route path="/kegiatan-pengadilan/layanan-informasi-via-whatsapp-silincah" element={<Navigate to="/layanan-publik/brosur-digital" replace />} />
            <Route path="/kegiatan-pengadilan/brosur-digital" element={<Navigate to="/layanan-publik/brosur-digital" replace />} />
            <Route path="/kegiatan-pengadilan/formulir-permintaan-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/sop-pelayanan-publik" element={<Navigate to="/layanan-publik/ptsp" replace />} />
            <Route path="/kegiatan-pengadilan/cctv-online" element={<Navigate to="/layanan-publik/brosur-digital" replace />} />
            <Route path="/kegiatan-pengadilan/standar-dan-maklumat-pelayanan-pengadilan" element={<Navigate to="/layanan-publik/ptsp" replace />} />
            <Route path="/kegiatan-pengadilan/pengawasan-dan-kode-etik" element={<Navigate to="/layanan-publik/pengawasan-dan-kode-etik" replace />} />
            <Route path="/kegiatan-pengadilan/pengawasan-dan-kode-etik/*" element={<Navigate to="/layanan-publik/pengawasan-dan-kode-etik" replace />} />
            <Route path="/kegiatan-pengadilan/layanan-pengaduan" element={<Navigate to="/layanan-publik/layanan-pengaduan" replace />} />
            <Route path="/kegiatan-pengadilan/layanan-pengaduan/*" element={<Navigate to="/layanan-publik/layanan-pengaduan" replace />} />
            <Route path="/kegiatan-pengadilan/layanan-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/fasilitas-publik" element={<Navigate to="/layanan-publik/fasilitas-publik" replace />} />
            <Route path="/kegiatan-pengadilan/petugas-informasi-pelayanan-terpadu-satu-pintu-ptsp-dan-pengaduan" element={<Navigate to="/layanan-publik/fasilitas-publik" replace />} />
            <Route path="/kegiatan-pengadilan/hak-hak-pemohon-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/biaya-memperoleh-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/hak-hak-pelapor-dan-terlapor" element={<Navigate to="/layanan-publik/layanan-pengaduan" replace />} />
            <Route path="/kegiatan-pengadilan/prosedur-peringatan-dini-dan-prosedur-evakuasi-keadaan-darurat" element={<Navigate to="/layanan-publik/fasilitas-publik" replace />} />
            <Route path="/kegiatan-pengadilan/jam-kerja-kantor" element={<Navigate to="/layanan-publik/fasilitas-publik" replace />} />
            <Route path="/kegiatan-pengadilan/prosedur-permintaan-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/prosedur-keberatan-informasi" element={<Navigate to="/layanan-publik/layanan-informasi" replace />} />
            <Route path="/kegiatan-pengadilan/pedoman-pengawasan" element={<Navigate to="/layanan-publik/pengawasan-dan-kode-etik" replace />} />
            <Route path="/kegiatan-pengadilan/putusan-majelis-kehormatan-hakim" element={<Navigate to="/layanan-publik/pengawasan-dan-kode-etik" replace />} />

            {/* Live Site URLs Mapping */}
            <Route path="/layanan-publik/lelang-barang-dan-jasa" element={<Navigate to="/kesekretariatan/pengadaan-barang-dan-jasa" replace />} />
            <Route path="/layanan-publik/dipa/dipa" element={<Navigate to="/kesekretariatan/dipa" replace />} />
            <Route path="/layanan-publik/dipa/rpa" element={<Navigate to="/kesekretariatan/dipa" replace />} />
            <Route path="/layanan-publik/dipa/rincian-kertas-kerja-satker-rkkl" element={<Navigate to="/kesekretariatan/dipa" replace />} />
            <Route path="/layanan-publik/dipa/catatan-atas-laporan-keuangan-calk" element={<Navigate to="/kesekretariatan/dipa" replace />} />
            <Route path="/layanan-publik/dipa/neraca-keuangan" element={<Navigate to="/kesekretariatan/dipa" replace />} />
            <Route path="/layanan-publik/realisasi-penerimaan-negara-bukan-pajak-pnbp" element={<Navigate to="/kesekretariatan/realisasi-pnbp" replace />} />
            <Route path="/layanan-publik/daftar-aset-dan-inventaris" element={<Navigate to="/kesekretariatan/daftar-aset-dan-inventaris" replace />} />
            <Route path="/layanan-publik/survei-pelayanan-publik" element={<Navigate to="/kesekretariatan/survei-pelayanan-publik" replace />} />
            <Route path="/layanan-publik/kepegawaian" element={<Navigate to="/kesekretariatan/kepegawaian" replace />} />
            <Route path="/layanan-publik/kategorisasi-informasi" element={<Navigate to="/kesekretariatan/kategorisasi-informasi" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/rencana-kerja-dan-anggaran" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/renstra" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/rencana-aksi-kinerja" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/reviu-indikator-kinerja-utama" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/perjanjian-kinerja" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/lkijp" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/sistem-pengelolaan-pengadilan/cetak-biru-mahkamah-agung" element={<Navigate to="/kesekretariatan/sakip" replace />} />
            <Route path="/layanan-publik/surat-menyurat-pimpinan" element={<Navigate to="/kesekretariatan/surat-menyurat-pimpinan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/keuangan" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/bagian-umum" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/bagian-kepegawaian" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/organisasi" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/perencanaan" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/pelaporan" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/teknologi-informasi" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/pedoman-pengelolaan-organisasi-administrasi/tata-laksana" element={<Navigate to="/kesekretariatan/pedoman-pengelolaan-kesekretariatan" replace />} />
            <Route path="/layanan-publik/unit-pelaksana-teknis-kesekretariatan" element={<Navigate to="/kesekretariatan/unit-pelaksana-teknis-kesekretariatan" replace />} />
            <Route path="/layanan-publik/laporan/laporan-keuangan" element={<Navigate to="/kesekretariatan/laporan" replace />} />
            <Route path="/layanan-publik/laporan/lhkpn-lhkasn/laporan-lhkpn" element={<Navigate to="/kesekretariatan/lhkpn-lhkasn" replace />} />
            <Route path="/layanan-publik/laporan/lhkpn-lhkasn/laporan-lhkasn" element={<Navigate to="/kesekretariatan/lhkpn-lhkasn" replace />} />
            <Route path="/layanan-publik/laporan/lra" element={<Navigate to="/kesekretariatan/laporan" replace />} />
            <Route path="/layanan-publik/laporan/laporan-kinerja-triwulan" element={<Navigate to="/kesekretariatan/laporan" replace />} />
            <Route path="/layanan-publik/laporan/laporan-skm-dan-ipk" element={<Navigate to="/kesekretariatan/survei-pelayanan-publik" replace />} />

            {/* Publikasi Routes */}
            <Route path="/publikasi" element={<Navigate to="/publikasi/berita" replace />} />
            <Route path="/publikasi/berita" element={<BeritaPage />} />
            <Route path="/publikasi/pengumuman" element={<PengumumanPage />} />
            <Route path="/publikasi/artikel" element={<ArtikelHukumPage />} />
            <Route path="/publikasi/peraturan-kebijakan" element={<ArsipPeraturanPage />} />
            <Route path="/publikasi/perjanjian-dengan-pihak-ketiga" element={<PerjanjianKerjasamaPage />} />
            <Route path="/publikasi/perjanjian-kerjasama" element={<Navigate to="/publikasi/perjanjian-dengan-pihak-ketiga" replace />} />
            <Route path="/publikasi/arsip-hasil-penelitian" element={<HasilPenelitianPage />} />
            <Route path="/publikasi/hasil-penelitian" element={<Navigate to="/publikasi/arsip-hasil-penelitian" replace />} />
            <Route path="/publikasi/galeri" element={<GaleriPage />} />

            {/* Hubungi Kami / Publikasi Live Site Aliases */}
            <Route path="/hubungi-kami/artikel" element={<Navigate to="/publikasi/artikel" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/peraturan-perundang-undangan" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/perma" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/keputusan-ketua-mahkamah-agung" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/surat-edaran-mahkamah-agung" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/keputusan-sekretaris-mahkamah-agung" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/pertimbangan-dan-nasihat-hukum-mahkamah-agung" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/yurisprudensi" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/peraturan-dan-kebijakan/informasi-dan-kebijakan-pejabat-pengadilan" element={<Navigate to="/publikasi/peraturan-kebijakan" replace />} />
            <Route path="/hubungi-kami/perjanjian-dengan-pihak-ketiga" element={<Navigate to="/publikasi/perjanjian-dengan-pihak-ketiga" replace />} />
            <Route path="/hubungi-kami/arsip-hasil-penelitian" element={<Navigate to="/publikasi/arsip-hasil-penelitian" replace />} />
            <Route path="/hubungi-kami/arsip-file-multimedia" element={<Navigate to="/publikasi/galeri" replace />} />
            <Route path="/hubungi-kami/arsip-berita-pengadilan" element={<Navigate to="/publikasi/berita" replace />} />
            <Route path="/hubungi-kami/arsip-pengumuman-2" element={<Navigate to="/publikasi/pengumuman" replace />} />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AccessibilityProvider>
    </AuthProvider>
  );
}

export default App;
