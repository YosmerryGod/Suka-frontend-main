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
        {/* [MODIFIED] Layered lighting creates a rounded, glossy 3D material instead of a flat gradient. */}
        <radialGradient id="halo" cx="48%" cy="42%" r="65%">
          <stop offset="0" stopColor="#55e7dc" />
          <stop offset="1" stopColor="#00a99f" />
        </radialGradient>
        <linearGradient id="body" x1="0.12" y1="0.02" x2="0.86" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.32" stopColor="#fbfcff" />
          <stop offset="0.72" stopColor="#e9edf8" />
          <stop offset="1" stopColor="#aebed3" />
        </linearGradient>
        <radialGradient id="bodyLight" cx="38%" cy="13%" r="78%">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".98" />
          <stop offset=".48" stopColor="#ffffff" stopOpacity=".28" />
          <stop offset="1" stopColor="#b6c8df" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bodyRim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
          <stop offset=".45" stopColor="#ffffff" stopOpacity=".12" />
          <stop offset="1" stopColor="#7289a9" stopOpacity=".48" />
        </linearGradient>
        <radialGradient id="iris" cx="35%" cy="24%" r="82%">
          <stop offset="0" stopColor="#08717d" />
          <stop offset=".42" stopColor="#005b6c" />
          <stop offset=".76" stopColor="#00b9b1" />
          <stop offset="1" stopColor="#27e8d8" />
        </radialGradient>
        <radialGradient id="eyeDepth" cx="50%" cy="65%" r="58%">
          <stop offset="0" stopColor="#001f35" stopOpacity=".52" />
          <stop offset=".72" stopColor="#001f35" stopOpacity=".08" />
          <stop offset="1" stopColor="#001f35" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="antennaStem" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".48" stopColor="#f0f1fc" />
          <stop offset="1" stopColor="#aabbd2" />
        </linearGradient>
        <radialGradient id="antennaOrb" cx="32%" cy="22%" r="78%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".42" stopColor="#f4ffff" />
          <stop offset=".76" stopColor="#a8f8f0" />
          <stop offset="1" stopColor="#36cfc9" />
        </radialGradient>
        <linearGradient id="paw" x1="0" y1="0" x2=".8" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".5" stopColor="#f4f6ff" />
          <stop offset="1" stopColor="#b4c3d9" />
        </linearGradient>
        <radialGradient id="pawLight" cx="32%" cy="12%" r="90%">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
          <stop offset=".55" stopColor="#ffffff" stopOpacity=".12" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="mouth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#003e50" />
          <stop offset=".65" stopColor="#006a78" />
          <stop offset="1" stopColor="#19cbbd" />
        </linearGradient>
        <filter id="bodyShadow" x="-35%" y="-35%" width="170%" height="190%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="13" result="blur" />
          <feOffset dy="13" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".25" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orbGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="9" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="eyeShadow" x="-25%" y="-25%" width="150%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
          <feOffset dy="4" result="offset" />
          <feComponentTransfer>
            <feFuncA type="linear" slope=".34" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="170%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* [MODIFIED] Ambient halo and contact shadow give the mascot a clearer sense of depth. */}
      <circle cx="310" cy="260" r="238" fill="url(#halo)" />
      <ellipse cx="310" cy="477" rx="230" ry="25" fill="#004c55" opacity=".28" filter="url(#softShadow)" />

      {/* [MODIFIED] Antennae now use shaded stems, glossy orb highlights, and a soft cyan glow. */}
      <g className="antenna antenna-left">
        <path d="M205 112 174 58" stroke="#8299b4" strokeWidth="34" strokeLinecap="round" opacity=".2" />
        <path d="M205 108 174 58" stroke="url(#antennaStem)" strokeWidth="30" strokeLinecap="round" />
        <path d="M198 99 173 59" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity=".72" />
        <circle cx="160" cy="43" r="43" fill="#16dcd0" opacity=".25" filter="url(#orbGlow)" />
        <circle cx="160" cy="43" r="42" fill="url(#antennaOrb)" />
        <ellipse cx="148" cy="27" rx="13" ry="8" fill="#ffffff" opacity=".72" />
      </g>
      <g className="antenna antenna-right">
        <path d="m412 112 36-55" stroke="#8299b4" strokeWidth="34" strokeLinecap="round" opacity=".2" />
        <path d="m412 108 36-55" stroke="url(#antennaStem)" strokeWidth="30" strokeLinecap="round" />
        <path d="m419 99 28-42" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity=".72" />
        <circle cx="464" cy="42" r="43" fill="#16dcd0" opacity=".25" filter="url(#orbGlow)" />
        <circle cx="464" cy="42" r="42" fill="url(#antennaOrb)" />
        <ellipse cx="452" cy="26" rx="13" ry="8" fill="#ffffff" opacity=".72" />
      </g>

      {/* [MODIFIED] Main head receives a cast shadow, layered surface light, and a fine rim highlight. */}
      <g filter="url(#bodyShadow)">
        <path d="M75 474c8-144 82-267 235-267s227 123 235 267c-37 22-103 31-235 31S112 496 75 474Z" fill="url(#body)" />
        <path d="M75 474c8-144 82-267 235-267s227 123 235 267c-37 22-103 31-235 31S112 496 75 474Z" fill="url(#bodyLight)" />
        <path d="M83 453c15-124 84-233 227-233s212 109 227 233" fill="none" stroke="url(#bodyRim)" strokeWidth="8" strokeLinecap="round" opacity=".85" />
        <path d="M94 465c38 26 111 34 216 34s178-8 216-34" fill="none" stroke="#8da2bf" strokeWidth="5" opacity=".2" />
      </g>

      {/* [MODIFIED] Eye sockets and irises have recessed shadows, glossy depth, and layered reflections. */}
      <g filter="url(#eyeShadow)">
        <ellipse cx="218" cy="282" rx="82" ry="91" fill="#b4c4d8" opacity=".42" />
        <ellipse cx="402" cy="282" rx="82" ry="91" fill="#b4c4d8" opacity=".42" />
        <ellipse cx="218" cy="280" rx="77" ry="86" fill="url(#iris)" />
        <ellipse cx="402" cy="280" rx="77" ry="86" fill="url(#iris)" />
        <ellipse cx="218" cy="280" rx="77" ry="86" fill="url(#eyeDepth)" />
        <ellipse cx="402" cy="280" rx="77" ry="86" fill="url(#eyeDepth)" />
      </g>
      <g className="pupil" style={{ transform: `translate(${gaze.x}px, ${gaze.y}px)` }}>
        <ellipse cx="218" cy="286" rx="43" ry="49" fill="#003b49" opacity=".88" />
        <ellipse cx="402" cy="286" rx="43" ry="49" fill="#003b49" opacity=".88" />
      </g>
      <circle cx={218 + gaze.x - 12} cy={255 + gaze.y - 7} r="18" fill="#ffffff" />
      <circle cx={402 + gaze.x - 12} cy={255 + gaze.y - 7} r="18" fill="#ffffff" />
      <circle cx={218 + gaze.x + 18} cy={292 + gaze.y + 20} r="7" fill="#9bfff4" opacity=".36" />
      <circle cx={402 + gaze.x + 18} cy={292 + gaze.y + 20} r="7" fill="#9bfff4" opacity=".36" />

      {/* [MODIFIED] Mouth has a subtle inner gradient to read as a rounded opening. */}
      <path d="M279 360q31 19 62 0 8 39-31 48-39-9-31-48Z" fill="#003c4b" opacity=".18" transform="translate(0 3)" />
      <path d="M279 360q31 19 62 0 8 39-31 48-39-9-31-48Z" fill="url(#mouth)" />
      <ellipse cx="310" cy="392" rx="18" ry="7" fill="#5cf4df" opacity=".2" />

      {/* [MODIFIED] Cheek details are cleaner and softly illuminated. */}
      <path d="M119 333q-18 8-26 25M131 348q-17 8-23 23M501 333q18 8 26 25M489 348q17 8 23 23" fill="none" stroke="#12cfc3" strokeWidth="10" strokeLinecap="round" />
      <path d="M118 331q-9 5-13 12M502 331q9 5 13 12" fill="none" stroke="#aafff6" strokeWidth="3" strokeLinecap="round" opacity=".75" />

      {/* [MODIFIED] Paws use individual highlights and contact shadows to appear softly rounded. */}
      <g filter="url(#eyeShadow)">
        <g fill="url(#paw)">
          <ellipse cx="177" cy="451" rx="49" ry="42" />
          <ellipse cx="225" cy="453" rx="42" ry="42" />
          <ellipse cx="265" cy="452" rx="34" ry="39" />
          <ellipse cx="443" cy="451" rx="49" ry="42" />
          <ellipse cx="395" cy="453" rx="42" ry="42" />
          <ellipse cx="355" cy="452" rx="34" ry="39" />
        </g>
        <g fill="url(#pawLight)">
          <ellipse cx="177" cy="451" rx="49" ry="42" />
          <ellipse cx="225" cy="453" rx="42" ry="42" />
          <ellipse cx="265" cy="452" rx="34" ry="39" />
          <ellipse cx="443" cy="451" rx="49" ry="42" />
          <ellipse cx="395" cy="453" rx="42" ry="42" />
          <ellipse cx="355" cy="452" rx="34" ry="39" />
        </g>
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
