const pool = require('../config/db');
const fs = require('fs');
const path = require('path');

async function generateSQL() {
  const conn = await pool.getConnection();
  try {
    let sql = `-- ============================================
-- Migration & Seed: CMS Dynamic Menus & Pages System
-- Pengadilan Agama Kota Cimahi
-- Generated for phpMyAdmin / MySQL Import
-- ============================================

CREATE DATABASE IF NOT EXISTS pa_cimahi_db;
USE pa_cimahi_db;

-- 1. Table: menus (Hierarchical menu structure)
CREATE TABLE IF NOT EXISTS menus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  parent_id INT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  type ENUM('page', 'link', 'dropdown', 'document', 'video', 'custom') DEFAULT 'page',
  url VARCHAR(500) NULL,
  icon VARCHAR(100) NULL,
  sort_order INT DEFAULT 0,
  status ENUM('draft', 'published', 'inactive') DEFAULT 'published',
  open_new_tab BOOLEAN DEFAULT FALSE,
  description TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_parent_sort (parent_id, sort_order),
  INDEX idx_status (status),
  FOREIGN KEY (parent_id) REFERENCES menus(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table: pages (CMS dynamic pages)
CREATE TABLE IF NOT EXISTS pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  menu_id INT NULL,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT NULL,
  content_html LONGTEXT NULL,
  status ENUM('draft', 'published', 'archived') DEFAULT 'published',
  seo_title VARCHAR(255) NULL,
  meta_description TEXT NULL,
  meta_keywords VARCHAR(255) NULL,
  og_title VARCHAR(255) NULL,
  og_description TEXT NULL,
  og_image VARCHAR(500) NULL,
  author_id INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  FOREIGN KEY (menu_id) REFERENCES menus(id) ON DELETE SET NULL,
  FOREIGN KEY (author_id) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table: content_blocks (Modular content blocks)
CREATE TABLE IF NOT EXISTS content_blocks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page_id INT NOT NULL,
  type VARCHAR(50) NOT NULL,
  content LONGTEXT NULL,
  settings JSON NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_page_sort (page_id, sort_order),
  FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Table: media (Media Library for images/videos)
CREATE TABLE IF NOT EXISTS media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  file_name VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NULL,
  file_url VARCHAR(500) NOT NULL,
  mime_type VARCHAR(100) NULL,
  file_size INT DEFAULT 0,
  alt_text VARCHAR(255) NULL,
  caption TEXT NULL,
  width INT NULL,
  height INT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Table: documents (Document Library: PDF, DOCX, XLSX, etc.)
CREATE TABLE IF NOT EXISTS documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  file_name VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NULL,
  file_url VARCHAR(500) NOT NULL,
  mime_type VARCHAR(100) NULL,
  file_size INT DEFAULT 0,
  doc_title VARCHAR(255) NOT NULL,
  doc_number VARCHAR(100) NULL,
  doc_date DATE NULL,
  description TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Table: audit_logs (Audit trail for admin actions)
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id INT NULL,
  admin_name VARCHAR(100) NULL,
  action VARCHAR(100) NOT NULL,
  object_type VARCHAR(50) NOT NULL,
  object_id VARCHAR(50) NULL,
  details TEXT NULL,
  ip_address VARCHAR(50) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_created (created_at),
  FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Data Inserts: Menus
-- ============================================
`;

    const [menus] = await conn.query('SELECT * FROM menus ORDER BY id ASC');
    for (const m of menus) {
      const parentVal = m.parent_id === null ? 'NULL' : m.parent_id;
      const title = conn.escape(m.title);
      const slug = conn.escape(m.slug);
      const type = conn.escape(m.type);
      const url = m.url ? conn.escape(m.url) : 'NULL';
      const icon = m.icon ? conn.escape(m.icon) : 'NULL';
      const desc = m.description ? conn.escape(m.description) : 'NULL';
      sql += `INSERT INTO menus (id, parent_id, title, slug, type, url, icon, sort_order, status, open_new_tab, description) VALUES (${m.id}, ${parentVal}, ${title}, ${slug}, ${type}, ${url}, ${icon}, ${m.sort_order}, '${m.status}', ${m.open_new_tab ? 1 : 0}, ${desc}) ON DUPLICATE KEY UPDATE title=VALUES(title), parent_id=VALUES(parent_id), type=VALUES(type), url=VALUES(url), sort_order=VALUES(sort_order), status=VALUES(status);\n`;
    }

    sql += `\n-- ============================================
-- Data Inserts: Pages (Profil Pengadilan & Sub-pages)
-- ============================================
`;

    const [pages] = await conn.query('SELECT * FROM pages ORDER BY id ASC');
    for (const p of pages) {
      const menuVal = p.menu_id === null ? 'NULL' : p.menu_id;
      const title = conn.escape(p.title);
      const subtitle = p.subtitle ? conn.escape(p.subtitle) : 'NULL';
      const slug = conn.escape(p.slug);
      const excerpt = p.excerpt ? conn.escape(p.excerpt) : 'NULL';
      const content = p.content_html ? conn.escape(p.content_html) : 'NULL';
      const seoTitle = p.seo_title ? conn.escape(p.seo_title) : 'NULL';
      const metaDesc = p.meta_description ? conn.escape(p.meta_description) : 'NULL';
      sql += `INSERT INTO pages (id, menu_id, title, subtitle, slug, excerpt, content_html, status, seo_title, meta_description, author_id) VALUES (${p.id}, ${menuVal}, ${title}, ${subtitle}, ${slug}, ${excerpt}, ${content}, '${p.status}', ${seoTitle}, ${metaDesc}, 1) ON DUPLICATE KEY UPDATE title=VALUES(title), subtitle=VALUES(subtitle), excerpt=VALUES(excerpt), content_html=VALUES(content_html), status=VALUES(status), seo_title=VALUES(seo_title);\n`;
    }

    const target = path.join(__dirname, 'migrations_cms.sql');
    fs.writeFileSync(target, sql, 'utf8');
    console.log('✅ Generated migrations_cms.sql successfully with', menus.length, 'menus and', pages.length, 'pages!');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  } finally {
    conn.release();
  }
}

generateSQL();
