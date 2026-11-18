import { useEffect, useRef, useState } from 'react';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 12h14M12 5.5l6.5 6.5-6.5 6.5" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.8 14.7 9.3 22.2 12l-7.5 2.7L12 22.2l-2.7-7.5L1.8 12l7.5-2.7L12 1.8Z" />
    </svg>
  );
}

function Mascot({ gaze }) {
  return (
    <svg className="mascot-svg" viewBox="0 0 620 520" role="img" aria-label="Maskot SUKA yang melihat ke arah kursor">
      <defs>
        <radialGradient id="halo" cx="48%" cy="42%" r="65%">
          <stop offset="0" stopColor="#55e7dc" />
          <stop offset="1" stopColor="#00a99f" />
        </radialGradient>
        <linearGradient id="body" x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.72" stopColor="#f8f8ff" />
          <stop offset="1" stopColor="#dce8f4" />
        </linearGradient>
        <radialGradient id="iris" cx="35%" cy="28%" r="75%">
          <stop offset="0" stopColor="#21e4d4" />
          <stop offset="0.55" stopColor="#00bcb4" />
          <stop offset="1" stopColor="#006b78" />
        </radialGradient>
        <linearGradient id="paw" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#dfe8f4" />
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <circle cx="310" cy="260" r="238" fill="url(#halo)" />
      <ellipse cx="310" cy="478" rx="240" ry="20" fill="#087e83" opacity=".18" filter="url(#softShadow)" />
      <g className="antenna antenna-left">
        <path d="M205 112 174 58" stroke="url(#body)" strokeWidth="30" strokeLinecap="round" />
        <circle cx="160" cy="43" r="42" fill="url(#body)" />
      </g>
      <g className="antenna antenna-right">
        <path d="m412 112 36-55" stroke="url(#body)" strokeWidth="30" strokeLinecap="round" />
        <circle cx="464" cy="42" r="42" fill="url(#body)" />
      </g>
      <path d="M75 474c8-144 82-267 235-267s227 123 235 267c-37 22-103 31-235 31S112 496 75 474Z" fill="url(#body)" />
      <ellipse cx="218" cy="282" rx="77" ry="86" fill="url(#iris)" />
      <ellipse cx="402" cy="282" rx="77" ry="86" fill="url(#iris)" />
      <g className="pupil" style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }}>
        <ellipse cx="218" cy="286" rx="43" ry="49" fill="#003b49" />
        <ellipse cx="402" cy="286" rx="43" ry="49" fill="#003b49" />
      </g>
      <circle cx={218 + gaze.x - 12} cy={255 + gaze.y - 7} r="17" fill="#fff" />
      <circle cx={402 + gaze.x - 12} cy={255 + gaze.y - 7} r="17" fill="#fff" />
      <path d="M279 360q31 19 62 0 8 39-31 48-39-9-31-48Z" fill="#004957" />
      <path d="M119 333q-18 8-26 25M131 348q-17 8-23 23M501 333q18 8 26 25M489 348q17 8 23 23" fill="none" stroke="#12d5c7" strokeWidth="10" strokeLinecap="round" />
      <g fill="url(#paw)">
        <ellipse cx="177" cy="451" rx="49" ry="42" />
        <ellipse cx="225" cy="453" rx="42" ry="42" />
        <ellipse cx="265" cy="452" rx="34" ry="39" />
        <ellipse cx="443" cy="451" rx="49" ry="42" />
        <ellipse cx="395" cy="453" rx="42" ry="42" />
        <ellipse cx="355" cy="452" rx="34" ry="39" />
      </g>
    </svg>
  );
}

export default function App() {
  const mascotRef = useRef(null);
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const moveEyes = (event) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.53;
      const dx = (event.clientX - centerX) / (window.innerWidth * 0.42);
      const dy = (event.clientY - centerY) / (window.innerHeight * 0.42);
      const clamp = (value) => Math.max(-1, Math.min(1, value));
      setGaze({ x: clamp(dx) * 17, y: clamp(dy) * 13 });
    };

    const resetEyes = () => setGaze({ x: 0, y: 0 });
    window.addEventListener('pointermove', moveEyes, { passive: true });
    window.addEventListener('blur', resetEyes);
    return () => {
      window.removeEventListener('pointermove', moveEyes);
      window.removeEventListener('blur', resetEyes);
    };
  }, []);

  const submitQuestion = (event) => {
    event.preventDefault();
    if (!question.trim()) return;
    // Belum ada endpoint chat yang terhubung; pertanyaan dipertahankan agar siap diintegrasikan.
    document.getElementById('question-input')?.focus();
  };

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="SUKA beranda">
          <span className="brand-mark"><span className="brand-face">●</span></span>
          <span>SUKA</span>
        </a>
        <nav className="main-nav" aria-label="Navigasi utama">
          <a className="nav-link active" href="#beranda">Beranda</a>
          <a className="nav-link" href="#fitur">Fitur</a>
          <a className="nav-link" href="#solusi">Solusi</a>
          <a className="nav-link" href="#wawasan">Wawasan</a>
        </nav>
        <div className="header-actions">
          <a className="login-button" href="#masuk">Masuk</a>
          <a className="start-button" href="#mulai">Mulai Gratis</a>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-copy">
          <div className="eyebrow"><SparkleIcon /> <span>AI Business Partner</span></div>
          <h1>Bangun bisnis<br />lebih <span>jelas.</span></h1>
          <p className="hero-description">Teman berpikir untuk memahami tantangan, menemukan peluang, dan mengambil langkah bisnis dengan lebih yakin.</p>
          <div className="trust-note"><span className="trust-dot" /> Mulai dari pertanyaan yang sedang kamu hadapi.</div>
        </div>

        <div className="mascot-stage" ref={mascotRef}>
          <div className="mascot-glow" />
          <div className="mascot-float"><Mascot gaze={gaze} /></div>
          <span className="mascot-caption">SUKA siap membantu bisnismu</span>
        </div>
      </section>

      <form className="question-bar" onSubmit={submitQuestion}>
        <label className="sr-only" htmlFor="question-input">Tanyakan tentang bisnismu</label>
        <input
          id="question-input"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Tanyakan apa pun tentang bisnis kamu..."
        />
        <button type="submit" aria-label="Kirim pertanyaan"><ArrowIcon /></button>
      </form>

      <section className="below-fold" id="fitur">
        <span className="section-kicker">Pikirkan langkah berikutnya</span>
        <h2>Bisnis lebih jelas, dimulai dari percakapan.</h2>
        <p>SUKA membantu menyusun pikiran menjadi langkah yang bisa kamu jalankan.</p>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} SUKA AI</span>
        <span>Partner berpikir untuk perjalanan bisnismu.</span>
      </footer>
      <div className="landscape landscape-back" />
      <div className="landscape landscape-front" />
    </main>
  );
}