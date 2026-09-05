import React, { useState } from 'react';
import './App.css';

// SVG Clean Vector Icons (Zero AI Emoji clutter, 100% professional & friendly)
const IconBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IconJournal = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const IconPeriodical = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
    <line x1="7" y1="8" x2="17" y2="8"></line>
    <line x1="7" y1="12" x2="17" y2="12"></line>
    <line x1="7" y1="16" x2="13" y2="16"></line>
  </svg>
);

const IconShieldCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconChevronDown = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconMenu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  // Modals state
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Form submission state
  const [submitForm, setSubmitForm] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    category: 'Penerbitan Buku Ber-ISBN',
    summary: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Book Catalog Sample Data
  const catalogData = [
    {
      id: 1,
      title: 'Pingkan, Seperti Seri Daisy Musim Semi',
      author: 'Maimon Herawati',
      isbn: 'xxx-xxx-xxxxx-x-x',
      category: 'Kajian Palestina',
      cover: '/covers/katalog(1).JPG',
      synopsis: 'Pingkan adalah gadis yang cerdas, cantik, humoris, berkarakter kuat, dan bahkan seorang fotomodel. Ia mengambil jurusan Fisika di Universitas Murdoch dan meraih indeks prestasi (IP) tinggi 3,75. Kepergiannya ke Australia membawa banyak perubahan dalam hidupnya. Di tengah lingkungan asing, Pingkan mengalami dinamika pencarian identitas dan semakin dekat dengan nilai-nilai kebenaran Islam.'
    },
    {
      id: 2,
      title: 'Kami Masih Ada',
      author: 'Maimon Herawati',
      isbn: 'xxx-xxx-xxxxx-x-x',
      category: 'Kajian Palestina',
      cover: '/covers/katalog(2).JPG',
      synopsis: 'Buku ini mengisahkan keteguhan dan daya tahan luar biasa rakyat Palestina dalam mempertahankan tanah air, hak, dan keyakinan mereka di tengah konflik penjajahan. Cerita berfokus pada perjuangan para aktivis kemanusiaan dan pejuang yang memilih bergerak dalam senyap, menghadapi kejamnya jeruji besi, namun menolak untuk menyerah demi membuktikan kepada dunia bahwa napas perjuangan mereka tidak akan pernah padam.'
    },
    {
      id: 3,
      title: 'Muara Kasih',
      author: 'Maimon Herawati',
      isbn: 'xxx-xxx-xxxxx-x-x',
      category: 'Self Reminder',
      cover: '/covers/katalog(3).JPG',
      synopsis: 'Buku ini mengisahkan tentang perjalanan spiritual, ujian kesabaran, dan keteguhan iman sebuah keluarga dalam melewati badai ujian hidup untuk menemukan muara kasih sayang yang hakiki berlandaskan nilai-nilai Islam.'
    }
  ];

  // Filtering Catalog
  const filteredCatalog = catalogData.filter(item => {
    const matchesCategory = activeCategory === 'Semua' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.isbn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Create WhatsApp message string
      const text = `Halo Redaksi PT Zaitun Kreasi Cendekia,\nSaya bermaksud mengajukan naskah:\n- Nama: ${submitForm.name}\n- Email: ${submitForm.email}\n- Judul Naskah: ${submitForm.title}\n- Kategori: ${submitForm.category}\n- Ringkasan: ${submitForm.summary}`;
      const waUrl = `https://wa.me/6289602685854?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
      setFormSubmitted(false);
      setIsSubmitModalOpen(false);
      setSubmitForm({ name: '', email: '', phone: '', title: '', category: 'Penerbitan Buku Ber-ISBN', summary: '' });
    }, 1200);
  };

  return (
    <div className="landing-wrapper">
      {/* Top Bar Banner - Official Registration */}
      <div style={{ backgroundColor: 'var(--primary-coklat-dark)', color: 'var(--accent-gold-light)', padding: '0.5rem 0', fontSize: '0.85rem', textAlign: 'center', borderBottom: '1px solid rgba(196, 150, 70, 0.3)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span style={{ fontWeight: '600', letterSpacing: '0.5px' }}>PENERBIT RESMI TERDAFTAR DI PERPUSTAKAAN NASIONAL REPUBLIK INDONESIA (PERPUSNAS)</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>Legalitas Terjamin & Pengurusan ISBN / e-ISSN Resmi</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="site-header">
        <div className="container nav-container">
          <a href="#" className="brand-logo" title="PT Zaitun Kreasi Cendekia">
            <img src="/Logo/PNG_Icon 1.png" alt="PT Zaitun Kreasi Cendekia Logo" />
          </a>

          {/* Desktop & Mobile Navigation Links */}
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <li><a href="#beranda" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Beranda</a></li>
              <li><a href="#tentang-kami" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tentang Kami</a></li>
              <li><a href="#layanan" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Layanan Utama</a></li>
              <li><a href="#panduan-penulis" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Panduan Penulis</a></li>
              <li><a href="#katalog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Katalog Karya</a></li>
              <li><a href="#kontak" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Kontak</a></li>
              <li style={{ marginTop: mobileMenuOpen ? '1rem' : 0 }}>
                <button className="btn btn-primary" onClick={() => { setIsSubmitModalOpen(true); setMobileMenuOpen(false); }}>
                  Ajukan Naskah
                </button>
              </li>
            </ul>
          </nav>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Navigation">
            {mobileMenuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-badge">
              <IconShieldCheck /> Terdaftar Resmi Perpusnas RI
            </div>
            <h1 className="hero-title">
              Mengabadikan Gagasan Keislaman, Menyuarakan Kebenaran Palestina.
            </h1>
            <p className="hero-subtitle">
              PT Zaitun Kreasi Cendekia adalah mitra strategis Anda dalam penerbitan buku, jurnal ilmiah, dan terbitan berkala yang kredibel, berkualitas, dan terdaftar resmi di Perpusnas.
            </p>
            <div className="hero-cta-group">
              <button className="btn btn-primary" onClick={() => setIsSubmitModalOpen(true)}>
                Pengajuan Naskah Sekarang
              </button>
              <a href="#katalog" className="btn btn-outline">
                Jelajahi Terbitan Kami
              </a>
            </div>

            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <IconBook />
                </div>
                <div className="hero-feature-text">
                  <h4>ISBN & ISSN Resmi</h4>
                  <p>Proses legalitas Perpusnas transparan</p>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <IconJournal />
                </div>
                <div className="hero-feature-text">
                  <h4>Standar Akademis</h4>
                  <p>Penyuntingan & tata letak presisi</p>
                </div>
              </div>
              <div className="hero-feature-item">
                <div className="hero-feature-icon">
                  <IconPeriodical />
                </div>
                <div className="hero-feature-text">
                  <h4>Jurnal Open Access</h4>
                  <p>Pengelolaan OJS & DOI terintegrasi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Highlight */}
          <div className="hero-visual">
            <div className="hero-card-stack">
              <img
                src="/covers/sample.jpg"
                alt="Buku Geopolitik & Resistensi Palestina"
                className="hero-book-preview"
              />
              <div className="hero-badge-overlay">
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.5px' }}>Terbitan Terbaru</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.2rem', color: '#ffffff' }}>
                  Kajian Palestina
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us & Legalities Section */}
      <section id="tentang-kami" className="about-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-badge">Profil & Legalitas</div>
            <h2 className="section-title">Dedikasi Ilmiah untuk Literasi Islam dan Perjuangan Palestina</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                <strong>PT Zaitun Kreasi Cendekia</strong> lahir dari komitmen mendalam untuk menghadirkan media penerbitan yang berintegritas, ilmiah, dan berakar kuat pada nilai-nilai keislaman. Kami berfokus untuk menjadi wadah utama bagi para akademisi, peneliti, dan penulis yang ingin menyebarluaskan gagasan-gagasan kontemporer keislaman serta sejarah, geopolitik, dan narasi resistensi Palestina.
              </p>
              <p>
                Sebagai penerbit resmi berbadan hukum, kami memastikan setiap karya yang diterbitkan melalui proses penyuntingan yang ketat, memenuhi standar keaslian ilmiah, dan terdaftar secara legal di Perpustakaan Nasional Republik Indonesia (Perpusnas).
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ borderLeft: '3px solid var(--accent-hijau)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary-coklat)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Legalitas Resmi Perpusnas</div>
                </div>
                <div style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--primary-coklat)' }}>Peer-Reviewed</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Standar Mutu Penyuntingan</div>
                </div>
              </div>
            </div>

            <div className="legalities-grid">
              <div className="legal-card">
                <div className="legal-icon">
                  <IconShieldCheck />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>Penerbit Berbadan Hukum</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                    Beroperasi secara legal dengan badan hukum resmi PT Zaitun Kreasi Cendekia dan terdaftar sebagai mitra penerbit Perpusnas.
                  </p>
                </div>
              </div>

              <div className="legal-card">
                <div className="legal-icon">
                  <IconBook />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>Standar ISBN & ISSN Perpusnas</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                    Seluruh buku dan jurnal diproses sesuai regulasi dan tata cara pendaftaran resmi Layanan ISBN Perpustakaan Nasional RI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Official Address & Contact Details */}
          <div id="kontak" className="contact-card">
            <h3>Alamat & Kontak Resmi Perusahaan</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div className="contact-item">
                <IconMapPin />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--accent-gold-light)' }}>Nama Perusahaan & Alamat Fisik Kantor</div>
                  <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#ffffff', marginTop: '0.2rem' }}>PT Zaitun Kreasi Cendekia</div>
                  <div style={{ fontSize: '0.92rem', color: '#d1c5b4', marginTop: '0.25rem', lineHeight: '1.5' }}>
                    Klaras Grand Villege Blok C1 No. 1, Margajaya, Tanjungsari, Kab. Sumedang, Jawa Barat
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <IconMail />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--accent-gold-light)' }}>Email Resmi Redaksi</div>
                  <a href="mailto:redaksi.zaitunkreasicendekia@gmail.com" style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}>
                    Klik Disini
                  </a>
                  <div style={{ fontSize: '0.85rem', color: '#d1c5b4', marginTop: '0.2rem' }}>Untuk pengiriman draf naskah & korespondensi ilmiah</div>
                </div>
              </div>

              <div className="contact-item">
                <IconPhone />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--accent-gold-light)' }}>Telepon / Layanan WhatsApp</div>
                  <a href="https://wa.me/628818382536" target="_blank" rel="noreferrer" style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 600, display: 'block', marginTop: '0.2rem' }}>
                    +628-818-382-536
                  </a>
                  <div style={{ fontSize: '0.85rem', color: '#d1c5b4', marginTop: '0.2rem' }}>Layanan konsultasi penerbitan & informasi naskah</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="layanan" className="services-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-badge">Layanan Utama</div>
            <h2 className="section-title">Layanan Penerbitan Kredibel & Berkualitas</h2>
            <p className="section-subtitle">
              Kami menyediakan ekosistem penerbitan komprehensif bagi akademisi, peneliti, dan lembaga kajian untuk menerbitkan naskah ilmiah dan terbitan berkala.
            </p>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="card-surface service-card">
              <div className="service-header">
                <div className="service-icon">
                  <IconBook />
                </div>
                <h3 className="service-title">1. Penerbitan Buku Ber-ISBN</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                Layanan penerbitan buku ilmiah, populer, monograf, dan populer-akademis dengan pemrosesan legalitas ISBN resmi dari Perpusnas.
              </p>

              <div className="subject-focus-title">Fokus Subjek:</div>
              <div className="tag-pills">
                <span className="tag-pill">Pemikiran Islam</span>
                <span className="tag-pill">Hukum & Ekonomi Syariah</span>
                <span className="tag-pill">Studi Palestina & Geopolitik</span>
                <span className="tag-pill">Pendidikan Islam</span>
                <span className="tag-pill">Kajian Keluarga</span>
              </div>

              <div className="subject-focus-title">Fasilitas Penerbitan:</div>
              <ul className="facility-list">
                <li className="facility-item"><IconCheck /> Proofreading / Editing Substantif</li>
                <li className="facility-item"><IconCheck /> Layout Standar Perpusnas RI</li>
                <li className="facility-item"><IconCheck /> Desain Cover & Barcode ISBN</li>
                <li className="facility-item"><IconCheck /> Cetak Sample Buku Utuh</li>
                <li className="facility-item"><IconCheck /> Manajemen Distribusi Karya</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card-surface service-card">
              <div className="service-header">
                <div className="service-icon" style={{ backgroundColor: 'var(--primary-coklat)' }}>
                  <IconJournal />
                </div>
                <h3 className="service-title">2. Penerbitan Jurnal Ilmiah</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                Layanan penerbitan jurnal akademik berskala nasional yang dikelola secara profesional sesuai standar tata kelola jurnal terakreditasi.
              </p>

              <div className="subject-focus-title">Fokus Subjek:</div>
              <div className="tag-pills">
                <span className="tag-pill">Kajian Keislaman Multidisiplin</span>
                <span className="tag-pill">Studi Peradaban Islam</span>
                <span className="tag-pill">Geopolitik Palestina</span>
              </div>

              <div className="subject-focus-title">Fasilitas Jurnal:</div>
              <ul className="facility-list">
                <li className="facility-item"><IconCheck /> Pengurusan Legalitas e-ISSN</li>
                <li className="facility-item"><IconCheck /> Pengelolaan Open Journal System (OJS)</li>
                <li className="facility-item"><IconCheck /> Registrasi DOI (Digital Object Identifier)</li>
                <li className="facility-item"><IconCheck /> Aksesibilitas Terbuka (Open Access)</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card-surface service-card">
              <div className="service-header">
                <div className="service-icon" style={{ backgroundColor: 'var(--accent-gold)' }}>
                  <IconPeriodical />
                </div>
                <h3 className="service-title">3. Terbitan Berkala</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)' }}>
                Penerbitan buletin, majalah ilmiah, atau serial wacana secara berkala untuk instansi, lembaga kajian, maupun komunitas riset.
              </p>

              <div className="subject-focus-title">Peruntukan Institusi:</div>
              <div className="tag-pills">
                <span className="tag-pill">Lembaga Kajian & Riset</span>
                <span className="tag-pill">Instansi Pendidikan</span>
                <span className="tag-pill">Komunitas Akademis</span>
              </div>

              <div className="subject-focus-title">Fasilitas Serial:</div>
              <ul className="facility-list">
                <li className="facility-item"><IconCheck /> Penyuntingan Konseptual Redaksi</li>
                <li className="facility-item"><IconCheck /> Layout & Visual Editorial Professional</li>
                <li className="facility-item"><IconCheck /> Pengurusan ISSN Terbitan Berkala</li>
                <li className="facility-item"><IconCheck /> Manajemen Distribusi Digital & Cetak</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guide & Manuscript Submission Workflow */}
      <section id="panduan-penulis" className="workflow-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-badge">Panduan & Syarat Penulis</div>
            <h2 className="section-title">Ketentuan & Alur Pengajuan Naskah</h2>
            <p className="section-subtitle">
              Proses pendaftaran ISBN dan penerbitan dirancang secara rapi, sistematis, dan sesuai dengan standar Perpustakaan Nasional RI.
            </p>
          </div>

          {/* Requirements Box */}
          <div className="requirements-box">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-coklat)', marginBottom: '0.5rem' }}>
              Syarat & Dokumen Naskah Penulis
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Untuk memproses ISBN & Penerbitan, pastikan naskah Anda dilengkapi dengan kelengkapan dokumen berikut:
            </p>

            <div className="req-grid">
              <div className="req-card">
                <h4 style={{ color: 'var(--primary-coklat)' }}>1. Naskah Utuh</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', margin: 0 }}>
                  Terdiri atas Judul, Kata Pengantar, Daftar Isi, Isi Naskah, Daftar Pustaka, dan Profil Penulis secara lengkap.
                </p>
              </div>

              <div className="req-card">
                <h4 style={{ color: 'var(--primary-coklat)' }}>2. Surat Pernyataan Keaslian</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', margin: 0 }}>
                  Surat pernyataan bebas dari unsur plagiarisme (Disertai lampiran hasil cek Turnitin bila ada).
                </p>
              </div>

              <div className="req-card">
                <h4 style={{ color: 'var(--primary-coklat)' }}>3. Draft Cover & Imprint</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', margin: 0 }}>
                  Tim kami siap membantu menyusun halaman imprint (hak cipta) dan layout sesuai standar baku Perpusnas.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Workflow */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-coklat)' }}>Alur Kerja Penerbitan</h3>
          </div>

          <div className="timeline-flow">
            <div className="timeline-step">
              <div className="step-number">1</div>
              <h4>Pengajuan & Evaluasi Naskah</h4>
              <p>Penulis mengirimkan draf naskah lengkap beserta dokumen pendukung ke tim redaksi.</p>
            </div>

            <div className="timeline-step">
              <div className="step-number">2</div>
              <h4>Review & Penyuntingan</h4>
              <p>Tahap editing, proofreading, dan tata letak (layout) sesuai spesifikasi Perpusnas.</p>
            </div>

            <div className="timeline-step">
              <div className="step-number">3</div>
              <h4>Pengurusan ISBN / ISSN</h4>
              <p>Pendaftaran legalitas naskah resmi ke portal sistem Perpustakaan Nasional RI.</p>
            </div>

            <div className="timeline-step">
              <div className="step-number">4</div>
              <h4>Produksi & Publikasi</h4>
              <p>Pencetakan buku fisik berkualitas tinggi dan/atau aktivasi publikasi digital Open Access.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-accent" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }} onClick={() => setIsSubmitModalOpen(true)}>
              Ajukan Naskah Anda Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Catalog & Portfolio Section */}
      <section id="katalog" className="catalog-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-badge">Katalog Karya</div>
            <h2 className="section-title">Terbitan Terbaru Kami</h2>
            <p className="section-subtitle">
              Portofolio buku dan jurnal ilmiah pilihan terbitan PT Zaitun Kreasi Cendekia yang telah terdaftar di Perpusnas.
            </p>
          </div>

          {/* Catalog Controls Filter & Search */}
          <div className="catalog-controls">
            <div className="filter-tabs">
              {['Semua', 'Kajian Palestina', 'Pemikiran Islam', 'Jurnal Ilmiah'].map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="search-box">
              <span className="search-icon"><IconSearch /></span>
              <input
                type="text"
                className="form-input"
                placeholder="Cari judul, penulis, atau ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Catalog Grid Display */}
          {filteredCatalog.length > 0 ? (
            <div className="catalog-grid">
              {filteredCatalog.map(item => (
                <div key={item.id} className="catalog-card">
                  <div className="catalog-cover-wrapper">
                    <img src={item.cover} alt={item.title} className="catalog-cover-img" />
                  </div>
                  <div className="catalog-info">
                    <span className="catalog-category">{item.category}</span>
                    <h3 className="catalog-title">{item.title}</h3>
                    <div className="catalog-author">Penulis: <strong>{item.author}</strong></div>
                    <div className="catalog-isbn">No. ISBN: {item.isbn}</div>

                    <button
                      className="btn btn-cream"
                      style={{ marginTop: '1.25rem', width: '100%', fontSize: '0.88rem' }}
                      onClick={() => setSelectedBook(item)}
                    >
                      Lihat Detail Ringkasan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', backgroundColor: 'var(--bg-cream-card)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Tidak ditemukan terbitan yang sesuai dengan pencarian "{searchQuery}".
              </p>
              <button className="btn btn-outline" style={{ marginTop: '1rem' }} onClick={() => { setSearchQuery(''); setActiveCategory('Semua'); }}>
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container faq-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-badge">Pertanyaan Umum</div>
            <h2 className="section-title">Informasi & Tanya Jawab Penerbitan</h2>
          </div>

          {[
            {
              q: "Berapa lama proses pengurusan ISBN resmi di Perpusnas?",
              a: "Proses pengurusan ISBN diproses langsung melalui sistem pendaftaran resmi Perpusnas RI. Biasanya memakan waktu 3-7 hari kerja setelah seluruh berkas kelengkapan naskah dan surat pernyataan keaslian diverifikasi."
            },
            {
              q: "Apakah PT Zaitun Kreasi Cendekia menerima pengajuan jurnal ilmiah baru?",
              a: "Ya, kami melayani penerbitan jurnal ilmiah baru maupun pengelolaan jurnal yang sudah ada. Layanan mencakup pengurusan e-ISSN, setup Open Journal System (OJS), pendaftaran DOI, dan tata kelola menuju akreditasi nasional."
            },
            {
              q: "Apakah penulis perlu melampirkan bukti bebas plagiarisme?",
              a: "Kami sangat menyarankan penulis melampirkan hasil cek Turnitin (maksimal similarity index 20-25%). Jika penulis belum memiliki bukti cek plagiarisme, tim redaksi kami menyediakan fasilitas pemeriksaan Turnitin."
            },
            {
              q: "Apakah ada batas minimum jumlah cetak untuk buku ber-ISBN?",
              a: "Tidak ada batas minimum yang kaku. Kami melayani penerbitan cetak sesuai kebutuhan (Print on Demand) maupun cetak masal skala besar untuk kebutuhan akademis dan distribusi luas."
            }
          ].map((item, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <span>{item.q}</span>
                <IconChevronDown open={openFaq === idx} />
              </button>
              {openFaq === idx && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <img src="/Logo/PNG_Icon 4.png" alt="Zaitun Icon" style={{ height: '70px', width: 'auto' }} />
                <h3 style={{ margin: 0, fontFamily: 'var(--font-heading)' }}>PT ZAITUN KREASI CENDEKIA</h3>
              </div>
              <p style={{ fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                Menyajikan Literasi Berbobot, Menjaga Arah Peradaban.
              </p>
              <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                Mitra terpercaya penerbitan buku ber-ISBN, jurnal ilmiah terakreditasi, dan terbitan berkala keislaman serta geopolitik Palestina.
              </p>
            </div>

            <div>
              <h4 className="footer-title">Navigasi Landing</h4>
              <ul className="footer-links">
                <li><a href="#beranda">Beranda Utama</a></li>
                <li><a href="#tentang-kami">Tentang & Legalitas</a></li>
                <li><a href="#layanan">Layanan Penerbitan</a></li>
                <li><a href="#panduan-penulis">Panduan Penulis</a></li>
                <li><a href="#katalog">Katalog Terbitan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Subjek Fokus</h4>
              <ul className="footer-links">
                <li><a href="#layanan">Pemikiran Islam</a></li>
                <li><a href="#layanan">Studi Palestina</a></li>
                <li><a href="#layanan">Hukum & Ekonomi Syariah</a></li>
                <li><a href="#layanan">Jurnal Ilmiah OJS</a></li>
                <li><a href="#layanan">Terbitan Berkala</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title">Kontak Redaksi</h4>
              <p style={{ fontSize: '0.88rem', color: '#d1c5b4', marginBottom: '0.5rem' }}>
                <strong>Kantor:</strong> Klaras Grand Villege C1-1, Margajaya, Tanjungsari, Kab. Sumedang, Jawa Barat
              </p>
              <p style={{ fontSize: '0.88rem', color: '#d1c5b4', marginBottom: '0.5rem' }}>
                <strong>Email:</strong> redaksi@zaitunkreasicendekia.com
              </p>
              <p style={{ fontSize: '0.88rem', color: '#d1c5b4' }}>
                <strong>WhatsApp:</strong> +628-818-382-536
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} PT Zaitun Kreasi Cendekia. Hak Cipta Dilindungi Undang-Undang. Terdaftar Resmi di Perpustakaan Nasional Republik Indonesia.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/628818382536?text=Halo%20Redaksi%20PT%20Zaitun%20Kreasi%20Cendekia,%20saya%20ingin%20konsultasi%20penerbitan%20naskah."
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        title="Konsultasi Penerbitan via WhatsApp Redaksi"
      >
        <IconWhatsApp />
      </a>

      {/* Manuscript Submission Form Modal */}
      {isSubmitModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsSubmitModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ padding: '1.75rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-coklat)' }}>Form Pengajuan Naskah & Konsultasi</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Isi form berikut untuk terhubung langsung dengan Tim Redaksi Zaitun Kreasi Cendekia</p>
              </div>
              <button onClick={() => setIsSubmitModalOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)' }}>
                <IconX />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} style={{ padding: '1.75rem' }}>
              <div className="form-group">
                <label className="form-label">Nama Lengkap Penulis / Instansi *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="Contoh: Dr. Lorem Ipsum, S.Kom, M.Kom"
                  value={submitForm.name}
                  onChange={(e) => setSubmitForm({ ...submitForm, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Email Resmi *</label>
                  <input
                    type="email"
                    className="form-input"
                    required
                    placeholder="penulis@email.com"
                    value={submitForm.email}
                    onChange={(e) => setSubmitForm({ ...submitForm, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">No. WhatsApp / Telepon *</label>
                  <input
                    type="tel"
                    className="form-input"
                    required
                    placeholder="081234567890"
                    value={submitForm.phone}
                    onChange={(e) => setSubmitForm({ ...submitForm, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Jenis Layanan Penerbitan *</label>
                <select
                  className="form-select"
                  value={submitForm.category}
                  onChange={(e) => setSubmitForm({ ...submitForm, category: e.target.value })}
                >
                  <option value="Penerbitan Buku Ber-ISBN">Penerbitan Buku Ber-ISBN</option>
                  <option value="Penerbitan Jurnal Ilmiah">Penerbitan Jurnal Ilmiah (e-ISSN / OJS)</option>
                  <option value="Terbitan Berkala">Terbitan Berkala (Buletin / Serial Wacana)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Judul Naskah / Terbitan *</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="Judul naskah yang diajukan"
                  value={submitForm.title}
                  onChange={(e) => setSubmitForm({ ...submitForm, title: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Ringkasan / Abstrak Naskah *</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  required
                  placeholder="Jelaskan ringkasan topik, fokus kajian, dan status draft naskah..."
                  value={submitForm.summary}
                  onChange={(e) => setSubmitForm({ ...submitForm, summary: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="btn btn-outline" onClick={() => setIsSubmitModalOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary" disabled={formSubmitted}>
                  {formSubmitted ? 'Menghubungkan Redaksi...' : 'Kirim & Konsultasi Redaksi'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Selected Book Detail Modal */}
      {selectedBook && (
        <div className="modal-backdrop" onClick={() => setSelectedBook(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="catalog-category">{selectedBook.category}</span>
              <button onClick={() => setSelectedBook(null)} style={{ background: 'none', border: 'none' }}>
                <IconX />
              </button>
            </div>
            <div style={{ padding: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 160px', textAlign: 'center' }}>
                <img src={selectedBook.cover} alt={selectedBook.title} style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }} />
              </div>
              <div style={{ flex: 1, minWidth: '220px' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-coklat)', marginBottom: '0.5rem' }}>{selectedBook.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Penulis: <strong>{selectedBook.author}</strong></p>
                <p style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: 'var(--primary-coklat-dark)', backgroundColor: 'var(--bg-cream)', padding: '0.25rem 0.5rem', borderRadius: '4px', display: 'inline-block' }}>
                  No. ISBN / ISSN: {selectedBook.isbn}
                </p>
                <p style={{ fontSize: '0.92rem', marginTop: '1rem', lineHeight: '1.6', color: 'var(--text-body)' }}>
                  {selectedBook.synopsis}
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a
                    href={`https://wa.me/628818382536?text=Halo%20Redaksi,%20saya%20tertarik%20dengan%20terbitan:%20${encodeURIComponent(selectedBook.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    Tanyakan Pemesanan / Informasi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
