import React, { useEffect, useState } from "react";

/**
 * Athan Website – bilingual, minimal, with gentle decorative graphics.
 * This is a ready-to-deploy Next.js page.
 */

function RadishSVG() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="radishG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b23a48"/>
          <stop offset="100%" stopColor="#8e2433"/>
        </linearGradient>
        <linearGradient id="leafG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4c6b50"/>
          <stop offset="100%" stopColor="#6f8f60"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="75" rx="24" ry="28" fill="url(#radishG)" opacity="0.95"/>
      <path d="M58 50 C40 40, 50 20, 60 16 C70 12, 82 24, 74 38 C70 44, 64 48, 58 50Z" fill="url(#leafG)"/>
      <path d="M62 48 C78 40, 88 28, 88 20 C78 18, 68 24, 64 30 C60 36, 60 44, 62 48Z" fill="url(#leafG)"/>
      <path d="M60 103 L58 112" stroke="#8e2433" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function AmbientBG() {
  return (
    <svg className="bg-wash" viewBox="0 0 800 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.18">
        <circle cx="120" cy="140" r="120" fill="#c6b67e"/>
        <circle cx="680" cy="420" r="160" fill="#5f6848"/>
        <circle cx="420" cy="80" r="100" fill="#a2a08d"/>
      </g>
    </svg>
  );
}

function LeafSVG() {
  return (
    <svg viewBox="0 0 120 80" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 C 20 10, 80 10, 110 40 C 80 70, 20 70, 10 40 Z" fill="#6f8f60" opacity="0.8"/>
      <path d="M10 40 C 30 35, 90 35, 110 40" stroke="#4c6b50" strokeWidth="2" fill="none"/>
    </svg>
  );
}

function RootSVG() {
  return (
    <svg viewBox="0 0 140 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="10" width="40" height="40" rx="8" fill="#c6b67e"/>
      <path d="M70 50 C 68 70, 60 85, 50 100" stroke="#b49a5a" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M70 50 C 75 72, 85 90, 96 110" stroke="#b49a5a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function HerbSVG({ small }: { small?: boolean }) {
  const scale = small ? 0.8 : 1;
  const w = 100 * scale;
  const h = 120 * scale;
  return (
    <svg viewBox="0 0 100 120" width={w} height={h} xmlns="http://www.w3.org/2000/svg">
      <path d="M50 110 L50 20" stroke="#5f6848" strokeWidth="3" strokeLinecap="round"/>
      {[20,35,50,65,80,95].map((y,i)=> (
        <path key={i} d={`M50 ${y} C ${40 - i*2} ${y-8}, ${30 - i*2} ${y-14}, ${24 - i*2} ${y-18}`} stroke="#6f8f60" strokeWidth="3" fill="none"/>
      ))}
    </svg>
  );
}

// Featured central graphic (abstract, fallback artwork)
function FeaturedGraphic() {
  return (
    <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="featured-graphic">
      <rect x="0" y="0" width="800" height="400" fill="#f3ecdf" rx="24"/>
      <g>
        <circle cx="160" cy="220" r="90" fill="#5f6848" opacity="0.35"/>
        <circle cx="640" cy="160" r="110" fill="#c6b67e" opacity="0.4"/>
        <path d="M120 260 C 200 200, 320 220, 420 180" stroke="#1e3b2c" strokeWidth="2" opacity="0.25" fill="none"/>
        <path d="M420 180 C 520 140, 640 160, 700 200" stroke="#1e3b2c" strokeWidth="2" opacity="0.2" fill="none"/>
        <circle cx="400" cy="200" r="6" fill="#1e3b2c" opacity="0.5"/>
      </g>
    </svg>
  );
}

function PictureWithFallback({ srcHint, alt }: { srcHint: string; alt: string }) {
  const [ok, setOk] = React.useState(true);
  return ok ? (
    <img
      src={srcHint}
      alt={alt}
      onError={() => setOk(false)}
      style={{ width: '100%', height: 'auto', borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,.06)' }}
    />
  ) : (
    <FeaturedGraphic />
  );
}

// Footer radish – inline, mono-color variant to avoid external asset issues
function FooterRadish() {
  return (
    <div className="footer-radish reveal-on-scroll" aria-hidden>
      <div style={{ width: 56, height: 56, opacity: 0.7 }}>
        <RadishMonoSVG color="#1e3b2c" />
      </div>
    </div>
  );
}

function RadishMonoSVG({ color = '#1e3b2c' }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke={color} strokeWidth="2">
        <ellipse cx="60" cy="75" rx="24" ry="28" fill={color} />
        <path d="M58 50 C40 40, 50 20, 60 16 C70 12, 82 24, 74 38 C70 44, 64 48, 58 50Z" fill={color} opacity="0.9" />
        <path d="M62 48 C78 40, 88 28, 88 20 C78 18, 68 24, 64 30 C60 36, 60 44, 62 48Z" fill={color} opacity="0.85" />
        <path d="M60 103 L58 112" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/* ================= Interlude Graphic (roots • fish • dolma) ================= */
function FishSVG() {
  return (
    <svg viewBox="0 0 160 80" width="160" height="80" xmlns="http://www.w3.org/2000/svg">
      <g className="fish-swim" fill="#5f6848" opacity="0.9">
        <path d="M20 40 C 45 20, 85 20, 110 40 C 85 60, 45 60, 20 40 Z"/>
        <path d="M110 40 L145 60 L145 20 Z"/>
        <circle cx="36" cy="38" r="3" fill="#f3ecdf"/>
      </g>
    </svg>
  );
}

function DolmaBadge() {
  return (
    <svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
      <g className="dolma-pulse">
        <circle cx="60" cy="60" r="56" fill="#f3ecdf"/>
        <path d="M30 70 C 40 40, 80 40, 90 70 C 70 82, 50 82, 30 70 Z" fill="#6f8f60"/>
        <path d="M35 64 C 50 60, 70 60, 85 64" stroke="#4c6b50" strokeWidth="2" fill="none"/>
      </g>
    </svg>
  );
}

function RootsBackground() {
  return (
    <svg viewBox="0 0 800 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="800" height="220" fill="#f6f1e9"/>
      <g stroke="#b49a5a" strokeWidth="2" fill="none" opacity="0.7" className="root-grow">
        <path d="M50 20 C 80 50, 120 70, 150 100 C 130 140, 90 160, 70 200"/>
        <path d="M220 10 C 250 40, 300 60, 340 90 C 320 120, 280 150, 260 190"/>
        <path d="M420 25 C 450 55, 500 75, 540 110 C 520 140, 480 165, 460 200"/>
        <path d="M600 15 C 640 40, 700 60, 740 90 C 720 130, 680 160, 660 200"/>
      </g>
    </svg>
  );
}

function InterludeGraphic() {
  return (
    <div className="interlude-composition">
      <RootsBackground />
      <div className="interlude-row">
        <FishSVG />
        <DolmaBadge />
        <FishSVG />
      </div>
    </div>
  );
}

function InterludeWithFallback({ srcHint }: { srcHint: string }) {
  const [ok, setOk] = React.useState(true);
  return ok ? (
    <img
      src={srcHint}
      alt="dolma artwork"
      onError={() => setOk(False)}
      style={{ width: '100%', height: 'auto', borderRadius: 24, boxShadow: '0 10px 30px rgba(0,0,0,.06)' }}
    />
  ) : (
    <InterludeGraphic />
  );
}

export default function Home() {
  const [lang, setLang] = useState<'el' | 'en'>('el');
  const [submitted, setSubmitted] = useState(false);

  const t = copy[lang];

  useEffect(() => {
    const results: { name: string; pass: boolean }[] = [];
    const assert = (name: string, cond: any) => results.push({ name, pass: !!cond });

    assert("radish-exists", document.querySelector("#radish-icon") !== null);
    const sel = document.querySelector("#people-select");
    assert(
      "people-select-10",
      sel && sel.tagName === "SELECT" && sel.querySelectorAll("option[data-n]").length === 10
    );
    assert("section-hero", document.querySelector("section[data-sec='hero']"));
    assert("section-philosophy", document.querySelector("section[data-sec='philosophy']"));
    assert("section-menu", document.querySelector("section[data-sec='menu']"));
    assert("section-hours", document.querySelector("section[data-sec='hours']"));
    assert("section-graphic", document.querySelector("section[data-sec='graphic']"));
    assert("section-reservations", document.querySelector("section[data-sec='reservations']"));
    assert("veg-decorations>=3", document.querySelectorAll(".veg").length >= 3);
    assert("lang-toggle", document.querySelector('[data-test="lang-toggle"]'));
    assert("date-input-present", document.querySelector('input[type="date"]'));
    assert("footer-radish", document.querySelector('.footer-radish'));
    const footerTagline = Array.from(document.querySelectorAll('footer p')).some(p => /crafted by nature/i.test(p.textContent || ''));
    assert("footer-tagline-present", footerTagline);

    console.log("[Athan self-tests]", { total: results.length, passed: results.filter(r=>r.pass).length, results });
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal-on-scroll')) as HTMLElement[];
    if (!('IntersectionObserver' in window) || els.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <style>{css}</style>

      <div style={styles.topbar}>
        <button data-test="lang-toggle" onClick={() => setLang(lang === 'el' ? 'en' : 'el')} style={styles.langBtn}>
          {lang === 'el' ? 'EN' : 'ΕΛ'}
        </button>
      </div>

      <section data-sec="hero" style={styles.hero}>
        <div id="radish-icon" className="radish-float" aria-hidden>
          <RadishSVG />
        </div>
        <AmbientBG />
        <div className="veg veg-leaf reveal-on-scroll" aria-hidden><LeafSVG /></div>
        <div className="veg veg-herb reveal-on-scroll" aria-hidden><HerbSVG /></div>

        <h1 style={styles.h1}>athan.</h1>
        <p style={styles.tagline}>{t.tagline}</p>
        <p style={styles.subtag}>{t.subtag}</p>
        <a href="#reservations" style={styles.ctaBtn}>{t.cta}</a>
      </section>

      <section data-sec="philosophy" style={styles.sectionCentered}>
        <h2 style={styles.h2}>{t.philosophy.title}</h2>
        <p style={styles.p} dangerouslySetInnerHTML={{ __html: t.philosophy.p1 }} />
        <p style={{ ...styles.p, marginTop: 24 }} dangerouslySetInnerHTML={{ __html: t.philosophy.p2 }} />
        <p style={{ ...styles.p, marginTop: 24, fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: t.philosophy.p3 }} />
      </section>

      <section data-sec="menu" style={{ ...styles.sectionCentered, position: 'relative' }}>
        <h2 style={styles.h2}>{t.menu.title}</h2>
        <p style={styles.p} dangerouslySetInnerHTML={{ __html: t.menu.p1 }} />
        <p style={{ ...styles.p, marginTop: 24 }} dangerouslySetInnerHTML={{ __html: t.menu.p2 }} />
        <div className="veg veg-root reveal-on-scroll" aria-hidden><RootSVG /></div>
      </section>

      <section data-sec="hours" style={styles.hoursSec}>
        <div style={styles.hoursCard}>
          <h3 style={styles.h3}>{t.hours.title}</h3>
          <p style={styles.p}>{t.hours.line1}</p>
          <p style={{ ...styles.p, opacity: .8 }}>{t.hours.line2}</p>
          <p style={{ ...styles.p, marginTop: 8, fontSize: 14, color: '#6b6b6b' }}>{t.hours.note}</p>
        </div>
      </section>

      {/* Decorative Graphic Section (centered) */}
      <section data-sec="graphic" style={styles.graphicSec}>
        <div className="graphic-wrap reveal-on-scroll" aria-hidden>
          <PictureWithFallback srcHint="/images/Social_media_post_template_v3.jpg" alt="dolma artwork" />
        </div>
      </section>

      {/* Interlude between Hours and Reservations */}
      <section data-sec="interlude" style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 24px' }}>
        <div className="reveal-on-scroll">
          <PictureWithFallback srcHint="/images/post_design_02.png" alt="Sustainably served by Athan" />
        </div>
      </section>

      <section id="reservations" data-sec="reservations" style={{ ...styles.reservationsGrid, position: 'relative' }}>
        <div className="veg veg-herb-small reveal-on-scroll" aria-hidden><HerbSVG small /></div>
        <div>
          <h2 style={styles.h2}>{t.res.title}</h2>
          <p style={styles.p} dangerouslySetInnerHTML={{ __html: t.res.p1 }} />
          <p style={{ ...styles.p, marginTop: 24 }} dangerouslySetInnerHTML={{ __html: t.res.p2 }} />
          <p style={{ ...styles.p, marginTop: 24, fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: t.res.p3 }} />
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder={t.form.name} required style={styles.input} />
          <input type="email" placeholder="Email" required style={styles.input} />
          <input type="tel" placeholder={t.form.phone} required style={styles.input} />
          <select id="people-select" required style={styles.input} defaultValue="">
            <option value="" disabled>{t.form.people}</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1} data-n>
                {i + 1}
              </option>
            ))}
          </select>
          <input type="date" required style={styles.input} aria-label={t.form.date} onChange={(e)=>{
            const v = e.currentTarget.value;
            if(!v) return;
            const d = new Date(v + 'T12:00:00');
            const day = d.getDay(); // 5 = Friday
            if(day !== 5){
              e.currentTarget.setCustomValidity(t.form.dateError);
              e.currentTarget.reportValidity();
              e.currentTarget.value = '';
            } else {
              e.currentTarget.setCustomValidity('');
            }
          }} />
          <small style={{ color: '#466154', opacity: .9 }}>{t.res.fridayOnly}</small>
          <textarea placeholder={t.form.allergies} style={{ ...styles.input, height: 120 }} />
          <button type="submit" style={styles.submitBtn}>{t.form.submit}</button>
          {submitted && (
            <p style={{ marginTop: 8, fontSize: 14, color: '#466154' }}>
              {t.form.thanks}
            </p>
          )}
        </form>
      </section>

      <footer style={styles.footer}>
        <p style={styles.footerBrand}>athan.</p>
        <FooterRadish />
        <p>{t.footer.tagline}</p>
        <p style={{ color: "#6b6b6b", marginTop: 12 }}>{t.footer.sub}</p>
        <div style={{ marginTop: 12 }}>
          <a href="https://www.instagram.com/athan_athens" style={styles.link}>Instagram</a>
          <span style={{ opacity: 0.5, margin: "0 8px" }}>·</span>
          <a href="mailto:info@athan.com" style={styles.link}>Email</a>
        </div>
      </footer>
    </div>
  );
}

const copy = {
  el: {
    tagline: 'crafted by nature, shared at the table',
    subtag: 'rooted in balance — not vegetarian, just thoughtful.',
    cta: 'Κράτηση',
    philosophy: {
      title: 'Η Φιλοσοφία',
      p1: 'Το <em>athan.</em> είναι μια κουζίνα αφιερωμένη στη φυσικότητα και την εποχικότητα. Κάθε πιάτο γεννιέται από τους ρυθμούς της φύσης — χωρίς υπερβολές, χωρίς σπατάλη.',
      p2: 'Μαγειρεύουμε με σεβασμό στη γη, χρησιμοποιώντας βιολογικά προϊόντα από μικρούς παραγωγούς και εφαρμόζοντας πρακτικές που τιμούν το περιβάλλον: ζυμώσεις, επαναχρησιμοποίηση, μηδενικά απόβλητα.',
      p3: 'Δεν είμαστε χορτοφαγικό project· είμαστε ένα βιώσιμο project. Οι πρωτεΐνες που χρησιμοποιούμε επιλέγονται προσεκτικά, με σεβασμό στη γη και στους κύκλους της.',
    },
    menu: {
      title: 'Το Μενού',
      p1: 'Το μενού του <em>athan.</em> ακολουθεί τους ρυθμούς της φύσης. Δεν υπάρχει σταθερή φόρμα — μόνο μια διαρκής συνομιλία με την εποχη και τα υλικά της.',
      p2: 'Η εμπειρία είναι <strong>sharing style</strong>· το φαγητό τοποθετείται στο κέντρο του τραπεζιού, για να το μοιραζόμαστε.',
    },
    hours: {
      title: 'Ώρες & Ημέρα',
      line1: 'Κρατήσεις: μόνο Παρασκευή',
      line2: 'Ώρες: 19:00 – 23:00',
      note: 'Επικοινωνία: Instagram @athan_athens & info@athan.com. Η τοποθεσία/ώρες ενδέχεται να διαφέρουν σε ειδικά events.'
    },
    res: {
      title: 'Reservations',
      p1: 'Οι κρατήσεις γίνονται αποκλειστικά μέσω της φόρμας. Κάθε εμπειρία στο <em>athan.</em> είναι διαφορετική∙ μικρή, ήρεμη και φτιαγμένη για να μοιράζεται.',
      p2: 'Κατά την κράτηση μπορείτε να σημειώσετε αλλεργίες ή δυσανεξίες. Η επιβεβαίωση γίνεται προσωπικά — με ανθρώπινη επικοινωνία.',
      p3: 'Για ιδιωτικά dinners, επικοινωνήστε μέσω email: <a href="mailto:info@athan.com">info@athan.com</a>',
      fridayOnly: 'Οι κρατήσεις πραγματοποιούνται αποκλειστικά Παρασκευές.'
    },
    form: {
      name: 'Ονοματεπώνυμο',
      phone: 'Τηλέφωνο',
      people: 'Αριθμός ατόμων',
      allergies: 'Αλλεργίες ή Δυσανεξίες',
      date: 'Ημερομηνία (Παρασκευές μόνο)',
      dateError: 'Παρακαλώ επιλέξτε Παρασκευή.',
      submit: 'Υποβολή Κράτησης',
      thanks: 'Ευχαριστούμε πολύ. Θα επικοινωνήσουμε σύντομα.',
    },
    footer: {
      tagline: 'crafted by nature, shared at the table',
      sub: 'Sustainably cooked in Athens, Greece.'
    }
  },
  en: {
    tagline: 'crafted by nature, shared at the table',
    subtag: 'rooted in balance — not vegetarian, just thoughtful.',
    cta: 'Book a table',
    philosophy: {
      title: 'Philosophy',
      p1: '<em>athan.</em> is a kitchen dedicated to naturalness and seasonality. Every dish follows the rhythms of nature — with no excess and no waste.',
      p2: 'We cook with respect for the land, using organic produce from small growers and practices that honour the environment: ferments, reuse, zero waste.',
      p3: "We're not a vegetarian project; we're a sustainable one. The proteins we use are chosen carefully, with respect for the earth and its cycles.",
    },
    menu: {
      title: 'The Menu',
      p1: "The <em>athan.</em> menu follows nature's rhythm. There is no fixed format — only an ongoing conversation with the season and its ingredients.",
      p2: 'The experience is <strong>sharing style</strong>: food is placed at the centre of the table, to be shared.',
    },
    hours: {
      title: 'Hours & Day',
      line1: 'Reservations: Fridays only',
      line2: 'Hours: 19:00 – 23:00',
      note: 'Contact: Instagram @athan_athens & info@athan.com. Location/hours may vary for special events.'
    },
    res: {
      title: 'Reservations',
      p1: 'Reservations are made exclusively through the form. Each experience at <em>athan.</em> is intimate and designed to be shared.',
      p2: 'When booking, you can note any allergies or intolerances. Confirmation is personal — through direct communication.',
      p3: 'For private dinners, please email: <a href="mailto:info@athan.com">info@athan.com</a>',
      fridayOnly: 'Bookings are available on Fridays only.'
    },
    form: {
      name: 'Full name',
      phone: 'Phone number',
      people: 'Number of guests',
      allergies: 'Allergies or intolerances',
      date: 'Date (Fridays only)',
      dateError: 'Please select a Friday.',
      submit: 'Submit reservation',
      thanks: "Thank you. We'll be in touch soon.",
    },
    footer: {
      tagline: 'crafted by nature, shared at the table',
      sub: 'Sustainably cooked in Athens, Greece.'
    }
  }
} as const;

const styles: { [k: string]: React.CSSProperties } = {
  page: {
    background: "#f6f1e9",
    color: "#1e3b2c",
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    letterSpacing: "0.02em",
    overflowX: "hidden",
  },
  topbar: { position: 'fixed', top: 10, right: 10, zIndex: 10 },
  langBtn: { background: '#f0eadf', border: '1px solid #d8d3c6', borderRadius: 999, padding: '6px 10px', cursor: 'pointer' },
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 16px",
  },
  h1: { fontFamily: "'Playfair Display', serif", fontSize: 72, margin: 0, marginBottom: 16, zIndex: 2 },
  tagline: { fontStyle: "italic", fontSize: 18, marginTop: 0, marginBottom: 12, zIndex: 2 },
  subtag: { fontSize: 14, marginTop: 0, marginBottom: 28, zIndex: 2 },
  ctaBtn: {
    display: "inline-block",
    background: "#1e3b2c",
    color: "#f6f1e9",
    padding: "12px 24px",
    borderRadius: 999,
    textDecoration: "none",
    zIndex: 2,
  },
  sectionCentered: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "96px 24px",
    lineHeight: 1.8,
    textAlign: "center",
  },
  h2: { fontFamily: "'Playfair Display', serif", fontSize: 28, marginBottom: 24 },
  h3: { fontFamily: "'Playfair Display', serif", fontSize: 22, margin: 0, marginBottom: 8 },
  p: { fontSize: 16 },
  hoursSec: { maxWidth: 1000, margin: '0 auto', padding: '24px', display: 'grid', placeItems: 'center' },
  hoursCard: { background: '#fff', borderRadius: 20, padding: '24px 28px', boxShadow: '0 6px 18px rgba(0,0,0,.05)', textAlign: 'center' },
  graphicSec: { maxWidth: 1000, margin: '0 auto', padding: '48px 24px' },
  reservationsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 32,
    maxWidth: 1100,
    margin: "0 auto",
    padding: "96px 24px",
  },
  form: { background: "#fff", borderRadius: 20, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", padding: 24, display: "grid", gap: 12 },
  input: { border: "1px solid #d8d3c6", borderRadius: 10, padding: 12, fontSize: 15 },
  submitBtn: { background: "#1e3b2c", color: "#f6f1e9", padding: 14, border: 0, borderRadius: 999, cursor: "pointer" },
  footer: { textAlign: "center", padding: "64px 16px", fontSize: 14 },
  footerBrand: { fontFamily: "'Playfair Display', serif", marginBottom: 8 },
  link: { color: '#1e3b2c', textDecoration: 'underline' },
};

const css = `
  @media (min-width: 900px) {
    .split { grid-template-columns: 1fr 1fr; }
  }

  .bg-wash { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
  .radish-float { position: absolute; top: 96px; left: 50%; transform: translateX(-50%); z-index: 1; animation: float 6s ease-in-out infinite; }

  .reveal-on-scroll { opacity: 0; transform: translateY(12px) scale(.98); transition: opacity .8s ease, transform .8s ease; }
  .reveal-on-scroll.visible { opacity: 1; transform: translateY(0) scale(1); }

  .veg { position: absolute; z-index: 1; }
  .veg-leaf { top: 18%; left: 8%; width: 92px; animation: sway 7s ease-in-out infinite; }
  .veg-herb { bottom: 12%; right: 10%; width: 84px; animation: bob 8s ease-in-out infinite; }
  .veg-root { bottom: -10px; left: 6%; width: 120px; opacity: .6; animation: rise 10s ease-in-out infinite alternate; }
  .veg-herb-small { top: 8px; right: 8px; width: 64px; opacity: .6; animation: bob 9s ease-in-out infinite; }

  .featured-graphic { width: 100%; height: auto; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,.06); animation: graphicDrift 14s ease-in-out infinite alternate; }
  .graphic-wrap { filter: saturate(1.05); }

  .interlude-composition { background: #fff; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,.06); overflow: hidden; }
  .interlude-row { display: flex; gap: 24px; justify-content: center; align-items: center; padding: 12px 0 24px; }

  .footer-radish { display: grid; place-items: center; margin: 8px 0 6px; animation: footerFloat 7s ease-in-out infinite; }

  @keyframes float {
    0% { transform: translate(-50%, 0px); }
    50% { transform: translate(-50%, -10px); }
    100% { transform: translate(-50%, 0px); }
  }
  @keyframes footerFloat {
    0% { transform: translateY(0); opacity: .0; }
    15% { opacity: .7; }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }
  @keyframes sway {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(-3deg); }
    100% { transform: rotate(0deg); }
  }
  @keyframes bob {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
  }
  @keyframes rise {
    0% { transform: translateY(0); }
    100% { transform: translateY(-6px); }
  }
  @keyframes graphicDrift {
    0% { transform: translateY(0) scale(1); }
    100% { transform: translateY(-4px) scale(1.005); }
  }
`;

export {};
