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
    <svg className="mascot-svg" viewBox="0 0 1536 1024" role="img" aria-label="Maskot SUKA 3D dengan mata yang mengikuti gerakan pointer">
      <defs>
        <linearGradient id="suka-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22e8dc" />
          <stop offset=".55" stopColor="#0acfc6" />
          <stop offset="1" stopColor="#05bdb8" />
        </linearGradient>
        <linearGradient id="suka-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#b9e0ee" />
          <stop offset="1" stopColor="#f2fafd" />
        </linearGradient>
        <radialGradient id="suka-body" cx=".45" cy=".3" r=".85">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".6" stopColor="#f1f0fb" />
          <stop offset="1" stopColor="#d3d4ec" />
        </radialGradient>
        <radialGradient id="suka-ball" cx=".4" cy=".3" r=".8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".65" stopColor="#f3f2fc" />
          <stop offset="1" stopColor="#cfd0ea" />
        </radialGradient>
        <linearGradient id="suka-stalk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#e4e4f5" />
          <stop offset=".5" stopColor="#f7f6fd" />
          <stop offset="1" stopColor="#d2d3ea" />
        </linearGradient>
        <radialGradient id="suka-paw" cx=".45" cy=".3" r=".9">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".7" stopColor="#f0effa" />
          <stop offset="1" stopColor="#d0d1ea" />
        </radialGradient>
        {/* [ADDED] Deep glossy eyes to match the supplied 3D mascot material. */}
        <radialGradient id="suka-iris" cx=".32" cy=".22" r=".82">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".12" stopColor="#a9fff7" />
          <stop offset=".38" stopColor="#25ded3" />
          <stop offset=".72" stopColor="#007e8c" />
          <stop offset="1" stopColor="#003d55" />
        </radialGradient>
        <radialGradient id="suka-pupil" cx=".35" cy=".28" r=".75">
          <stop offset="0" stopColor="#08798a" />
          <stop offset=".45" stopColor="#003c58" />
          <stop offset="1" stopColor="#001c35" />
        </radialGradient>
        <linearGradient id="suka-mouth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00394a" />
          <stop offset="1" stopColor="#087c83" />
        </linearGradient>
        <filter id="suka-soft" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#4a4f9a" floodOpacity=".22" />
        </filter>
        <filter id="suka-eye-shadow" x="-35%" y="-35%" width="170%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="13" result="blur" />
          <feOffset dy="10" result="offset" />
          <feComponentTransfer in="offset" result="shadow">
            <feFuncA type="linear" slope=".32" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="suka-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="12" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="suka-cut">
          <rect x="0" y="0" width="1536" height="965" />
        </clipPath>
      </defs>

      {/* [ADDED] Face motion: smooth gaze tracking and a gentle automatic blink. */}
      <style>{`
        .suka-eye-gaze { transition: transform .18s ease-out; }
        .suka-blink {
          transform-box: fill-box;
          transform-origin: center;
          animation: suka-blink 5.2s infinite;
        }
        @keyframes suka-blink {
          0%, 93%, 100% { transform: scaleY(0); }
          94.5%, 96% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .suka-eye-gaze { transition: none; }
          .suka-blink { animation: none; }
        }
      `}</style>

      <g clipPath="url(#suka-cut)">
        <circle cx="748" cy="597" r="512" fill="url(#suka-teal)" />
      </g>
      <path d="M93 965 C200 850 420 822 750 820 C1080 822 1300 850 1432 965 Z" fill="url(#suka-base)" />

      <path d="M548 292 L662 258 L690 325 L570 358 Z" fill="url(#suka-stalk)" />
      <path d="M855 345 L905 275 L985 372 L962 410 Z" fill="url(#suka-stalk)" />

      <path d="M300 700 C300 520 520 332 735 322 C950 330 1162 540 1155 740 C1150 812 1100 842 1050 842 L410 842 C345 832 300 782 300 700 Z" fill="url(#suka-body)" filter="url(#suka-soft)" />
      <path d="M420 520 C480 430 590 360 700 345" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" opacity=".7" />

      <ellipse cx="575" cy="175" rx="121" ry="118" fill="url(#suka-ball)" filter="url(#suka-soft)" />
      <ellipse cx="992" cy="248" rx="124" ry="118" fill="url(#suka-ball)" filter="url(#suka-soft)" />
      <path d="M510 130 C530 95 565 78 600 80" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" opacity=".8" />
      <path d="M925 205 C945 165 985 148 1025 155" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" opacity=".8" />

      <g stroke="#19dccb" strokeWidth="18" strokeLinecap="round" fill="none">
        <line x1="380" y1="655" x2="410" y2="633" />
        <line x1="403" y1="682" x2="436" y2="660" />
        <line x1="1070" y1="703" x2="1104" y2="725" />
        <line x1="1062" y1="730" x2="1086" y2="747" />
      </g>

      {/* [ADDED] Eye sockets create physical recesses in the soft 3D face. */}
      <g filter="url(#suka-eye-shadow)">
        <ellipse cx="625" cy="565" rx="104" ry="125" fill="#a8a9ca" opacity=".52" />
        <ellipse cx="845" cy="565" rx="104" ry="125" fill="#a8a9ca" opacity=".52" />
        <ellipse cx="625" cy="558" rx="91" ry="111" fill="url(#suka-iris)" />
        <ellipse cx="845" cy="558" rx="91" ry="111" fill="url(#suka-iris)" />
      </g>

      {/* [ADDED] Pupils move together with pointer gaze while remaining inside the irises. */}
      <g className="suka-eye-gaze" style={{ transform: `translate(${gaze.x * 2.1}px, ${gaze.y * 2.1}px)` }}>
        <ellipse cx="625" cy="570" rx="49" ry="69" fill="url(#suka-pupil)" />
        <ellipse cx="845" cy="570" rx="49" ry="69" fill="url(#suka-pupil)" />
        <ellipse cx="625" cy="548" rx="20" ry="27" fill="#ffffff" opacity=".96" />
        <ellipse cx="845" cy="548" rx="20" ry="27" fill="#ffffff" opacity=".96" />
        <circle cx="655" cy="594" r="10" fill="#9bfff5" opacity=".55" />
        <circle cx="875" cy="594" r="10" fill="#9bfff5" opacity=".55" />
      </g>

      {/* [ADDED] A soft eyelid layer gives the character a natural periodic blink. */}
      <g className="suka-blink">
        <ellipse cx="625" cy="558" rx="94" ry="113" fill="#f4f3fc" />
        <ellipse cx="845" cy="558" rx="94" ry="113" fill="#f4f3fc" />
      </g>

      {/* [ADDED] Small curved mouth with an inner highlight. */}
      <path d="M690 710 Q735 755 780 710 Q777 775 735 781 Q693 775 690 710Z" fill="#002f43" opacity=".16" transform="translate(0 8)" />
      <path d="M690 710 Q735 755 780 710 Q777 775 735 781 Q693 775 690 710Z" fill="url(#suka-mouth)" />
      <path d="M711 728 Q735 745 759 728" fill="none" stroke="#7cf4e8" strokeWidth="8" strokeLinecap="round" opacity=".55" />

      <g filter="url(#suka-soft)">
        <path d="M347 825 C345 760 410 710 490 712 C570 712 640 760 633 825 C630 870 585 895 545 878 C520 892 465 895 450 880 C400 895 350 870 347 825 Z" fill="url(#suka-paw)" />
        <path d="M452 790 C450 830 455 860 458 880 M560 790 C560 830 555 855 548 878" fill="none" stroke="#cdcde8" strokeWidth="7" strokeLinecap="round" />
      </g>
      <g filter="url(#suka-soft)" transform="translate(485 5)">
        <path d="M347 825 C345 760 410 710 490 712 C570 712 640 760 633 825 C630 870 585 895 545 878 C520 892 465 895 450 880 C400 895 350 870 347 825 Z" fill="url(#suka-paw)" />
        <path d="M452 790 C450 830 455 860 458 880 M560 790 C560 830 555 855 548 878" fill="none" stroke="#cdcde8" strokeWidth="7" strokeLinecap="round" />
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
