import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component
 * Memastikan setiap kali rute atau halaman berganti (melalui Navbar, Sidebar, Link, dsb.),
 * posisi scroll browser akan otomatis kembali ke bagian paling atas layar secara mulus/instan.
 */
export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Scroll window ke paling atas
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Cek juga jika ada container utama yang memiliki scrollbar sendiri
    const scrollableContainers = document.querySelectorAll('.profile-page-wrapper, .info-page-wrapper, .admin-main, main');
    scrollableContainers.forEach(container => {
      if (container && container.scrollTop > 0) {
        container.scrollTop = 0;
      }
    });
  }, [pathname, search]);

  return null;
}
