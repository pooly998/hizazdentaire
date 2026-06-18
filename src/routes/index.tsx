import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.webp";
import reception from "@/assets/reception.webp";
import cabinet1 from "@/assets/cabinet-1.webp";
import cabinet2 from "@/assets/cabinet-2.webp";
import serviceWhitening from "@/assets/service-whitening.jpg";
import serviceImplants from "@/assets/service-implants.jpg";
import servicePediatric from "@/assets/service-pediatric.jpg";
import { useState, useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Sparkles,
  Smile,
  ShieldCheck,
  Stethoscope,
  Baby,
  HeartPulse,
  CalendarCheck,
  Check,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Centre Dentaire Benguerir — Dr. Maroine El Hizaz" },
      {
        name: "description",
        content:
          "Cabinet dentaire à Benguerir dirigé par Dr. Maroine El Hizaz. Soins dentaires modernes, équipe accueillante et matériel de pointe. Prise de rendez-vous au 05 29 26 55 80.",
      },
    ],
  }),
});

const services = [
  { icon: Smile, title: "Esthétique dentaire", desc: "Facettes, blanchiment et sourire sur-mesure." },
  { icon: ShieldCheck, title: "Soins conservateurs", desc: "Caries, dévitalisations et soins préventifs." },
  { icon: Sparkles, title: "Prothèses dentaires", desc: "Couronnes, bridges et prothèses adjointes." },
  { icon: Stethoscope, title: "Chirurgie & implants", desc: "Extractions, implants et chirurgie buccale." },
  { icon: HeartPulse, title: "Parodontie", desc: "Traitement des gencives et détartrage profond." },
  { icon: Baby, title: "Dentisterie pédiatrique", desc: "Soins doux et rassurants pour les enfants." },
];

const hours = [
  { d: "Lundi", h: "9h – 20h" },
  { d: "Mardi", h: "9h – 20h" },
  { d: "Mercredi", h: "9h – 20h" },
  { d: "Jeudi", h: "9h – 20h" },
  { d: "Vendredi", h: "9h – 20h" },
  { d: "Samedi", h: "9h – 14h" },
  { d: "Dimanche", h: "Fermé" },
];

const reviews = [
  {
    text: "Bon dentiste et équipe très accueillante, je recommande.",
    author: "Patient vérifié",
  },
  {
    text: "Personnel très professionnel et accueillant. Le cabinet est propre et bien équipé. Le dentiste prend le temps d'expliquer et met à l'aise. Je recommande vivement !",
    author: "Patient vérifié",
  },
  {
    text: "Je vous recommande ce cabinet de dentiste.",
    author: "Patient vérifié",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <ServiceFeature
        eyebrow="Esthétique"
        title="Blanchiment & sourire éclatant"
        desc="Redonnez tout son éclat à votre sourire grâce à nos protocoles de blanchiment professionnel, doux pour l'émail et aux résultats visibles dès la première séance."
        bullets={["Blanchiment au fauteuil", "Facettes céramiques", "Protocoles sans douleur"]}
        image={serviceWhitening}
        alt="Blanchiment dentaire"
      />
      <About />
      <ServiceFeature
        eyebrow="Chirurgie"
        title="Implants dentaires de haute précision"
        desc="Retrouvez le confort de mâcher et de sourire grâce à des implants posés avec un matériel de dernière génération et un suivi personnalisé à chaque étape."
        bullets={["Implants titane premium", "Planification numérique", "Pose mini-invasive"]}
        image={serviceImplants}
        alt="Implant dentaire"
        reverse
      />
      <Gallery />
      <ServiceFeature
        eyebrow="Enfants"
        title="Dentisterie pédiatrique tout en douceur"
        desc="Un accueil chaleureux et ludique pour que vos enfants vivent leurs soins dentaires en toute sérénité, et adoptent dès le plus jeune âge les bons réflexes."
        bullets={["Approche rassurante", "Prévention & scellements", "Suivi orthodontique"]}
        image={servicePediatric}
        alt="Dentisterie pédiatrique"
      />
      <Reviews />
      <Visit />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Logo Dr. Maroine El Hizaz" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">Centre Dentaire Benguerir</div>
            <div className="text-xs text-muted-foreground">Dr. Maroine El Hizaz</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#about" className="hover:text-foreground transition">Cabinet</a>
          <a href="#avis" className="hover:text-foreground transition">Avis</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="tel:+212529265580"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition"
          >
            <Phone className="h-4 w-4" /> 05 29 26 55 80
          </a>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-[var(--gold-foreground)] shadow-sm hover:opacity-90 transition"
            style={{ background: "var(--gradient-gold)" }}
          >
            <CalendarCheck className="h-4 w-4" /> Réserver
          </button>
        </div>
        <ReservationDialog open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}

function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0, r: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const runAway = () => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const maxX = Math.max(rect.width - 120, 60);
    const maxY = Math.max(rect.height - 120, 60);
    const x = (Math.random() - 0.5) * maxX * 0.8;
    const y = (Math.random() - 0.5) * maxY * 0.8;
    const r = (Math.random() - 0.5) * 60;
    setPos({ x, y, r });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      ref={containerRef}
      style={{ background: "var(--gradient-hero)" }}
    >
      <button
        onClick={runAway}
        aria-label="Dent flottante"
        className="absolute z-20 left-1/2 top-1/2 cursor-pointer select-none text-5xl md:text-6xl text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform duration-300"
        style={{
          transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) rotate(${pos.r}deg)`,
          transition: "transform 0.45s cubic-bezier(.34,1.56,.64,1)",
          animation: "floatTooth 6s ease-in-out infinite",
        }}
      >
        <span role="img" aria-label="tooth">🦷</span>
      </button>
      <style>{`
        @keyframes floatTooth {
          0%, 100% { translate: 0 0; }
          25% { translate: 12px -22px; }
          50% { translate: -8px -36px; }
          75% { translate: -18px -14px; }
        }
      `}</style>
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 60%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="text-[var(--primary-foreground)]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" /> Cabinet dentaire à Benguerir
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
            Un sourire <span style={{ color: "var(--gold)" }} className="font-medium">éclatant</span>,
            <br />
            des soins d'exception.
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-white/75 leading-relaxed">
            Dr. Maroine El Hizaz et son équipe vous accueillent dans un cabinet
            moderne au cœur de Benguerir pour des soins dentaires complets,
            doux et personnalisés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+212529265580"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--gold-foreground)] shadow-lg hover:opacity-90 transition"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone className="h-4 w-4" /> Prendre rendez-vous
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Nos services
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
            <div className="flex items-center gap-1 text-[var(--gold)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span>5,0 / 5 — 14 avis Google</span>
          </div>
        </div>
        <div className="relative">
          <div
            className="relative rounded-3xl overflow-hidden border border-white/10"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img src={reception} alt="Réception du cabinet dentaire" className="w-full h-[500px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-background p-5 shadow-xl border border-border max-w-[220px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full grid place-items-center" style={{ background: "var(--gradient-gold)" }}>
                <Clock className="h-5 w-5 text-[var(--gold-foreground)]" />
              </div>
              <div className="text-xs">
                <div className="font-medium">Ouvert aujourd'hui</div>
                <div className="text-muted-foreground">9h – 20h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: "5,0", l: "Note Google" },
    { v: "14+", l: "Avis patients" },
    { v: "6j/7", l: "Disponibilité" },
    { v: "100%", l: "Équipement moderne" },
  ];
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-3xl font-light text-primary">{s.v}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Nos soins</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">
          Une expertise complète pour toute la famille
        </h2>
        <p className="mt-4 text-muted-foreground">
          Du soin courant aux traitements esthétiques et chirurgicaux, nous
          proposons une prise en charge globale dans un environnement
          confortable.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-7 hover:border-[var(--gold)] hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className="h-12 w-12 rounded-xl grid place-items-center mb-5 text-[var(--gold-foreground)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={cabinet1} alt="Salle de soins" className="rounded-2xl object-cover h-64 w-full" />
          <img src={cabinet2} alt="Cabinet dentaire" className="rounded-2xl object-cover h-64 w-full mt-8" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Le cabinet</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">
            Dr. Maroine El Hizaz
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Notre cabinet associe un savoir-faire rigoureux à un matériel de
            dernière génération pour offrir à chaque patient une expérience
            sereine. L'écoute, la pédagogie et l'hygiène sont au cœur de notre
            approche.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Équipement de pointe et stérilisation rigoureuse",
              "Équipe bienveillante et à l'écoute",
              "Devis transparents et plans de traitement personnalisés",
              "Accueil chaleureux pour adultes et enfants",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Cabinet</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">Un environnement moderne</h2>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-4">
        <img src={reception} alt="Accueil" className="rounded-2xl object-cover h-80 w-full md:col-span-2" />
        <img src={cabinet1} alt="Salle de soins équipée" className="rounded-2xl object-cover h-80 w-full" />
        <img src={cabinet2} alt="Cabinet de soins" className="rounded-2xl object-cover h-80 w-full" />
        <div className="rounded-2xl p-8 md:col-span-2 text-[var(--primary-foreground)] flex flex-col justify-center" style={{ background: "var(--gradient-hero)" }}>
          <Sparkles className="h-8 w-8 text-[var(--gold)]" />
          <p className="mt-4 text-xl font-light leading-snug">
            « Le dentiste prend le temps d'expliquer et met à l'aise. Je
            recommande vivement ! »
          </p>
          <span className="mt-3 text-sm text-white/60">— Avis Google</span>
        </div>
      </div>
    </section>
  );
}

function ServiceFeature({
  eyebrow,
  title,
  desc,
  bullets,
  image,
  alt,
  reverse,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  alt: string;
  reverse?: boolean;
}) {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className={reverse ? "md:order-2" : ""}>
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{eyebrow}</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">{title}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{desc}</p>
          <ul className="mt-6 space-y-3 text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 h-5 w-5 rounded-full grid place-items-center text-[var(--gold-foreground)]" style={{ background: "var(--gradient-gold)" }}>
                  <Check className="h-3 w-3" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={reverse ? "md:order-1" : ""}>
          <div
            className="relative rounded-3xl overflow-hidden border border-border"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img src={image} alt={alt} loading="lazy" width={1024} height={1024} className="w-full h-[420px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReservationDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim();
    const p = phone.trim();
    if (n.length < 2 || n.length > 80) return setError("Veuillez entrer un nom valide.");
    if (!/^[+\d\s()-]{6,20}$/.test(p)) return setError("Veuillez entrer un numéro de téléphone valide.");
    const safeNote = note.trim().slice(0, 300);
    const msg =
      `Nouvelle demande de rendez-vous — Centre Dentaire Benguerir\n\n` +
      `Nom: ${n}\nTéléphone: ${p}` +
      (safeNote ? `\nMessage: ${safeNote}` : "");
    const url = `https://wa.me/212626870600?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setName(""); setPhone(""); setNote(""); setError("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm animate-fade-in p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-3xl bg-background border border-border p-7 shadow-2xl animate-scale-in"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Rendez-vous</span>
            <h3 className="mt-1 text-2xl font-light">Réservez votre consultation</h3>
            <p className="mt-1 text-sm text-muted-foreground">Nous vous recontactons via WhatsApp.</p>
          </div>
          <button onClick={onClose} aria-label="Fermer" className="rounded-full p-2 hover:bg-secondary transition">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Nom complet *</label>
            <input
              required
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Téléphone *</label>
            <input
              required
              type="tel"
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              placeholder="06 00 00 00 00"
            />
          </div>
          <div>
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message (optionnel)</label>
            <textarea
              maxLength={300}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              placeholder="Motif de la visite, disponibilités…"
            />
          </div>
          {error && <p className="text-xs text-destructive">{error}</p>}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[var(--gold-foreground)] shadow-md hover:opacity-90 transition"
            style={{ background: "var(--gradient-gold)" }}
          >
            <CalendarCheck className="h-4 w-4" /> Envoyer via WhatsApp
          </button>
          <p className="text-[11px] text-muted-foreground text-center">
            En envoyant, vous serez redirigé vers WhatsApp pour confirmer.
          </p>
        </form>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section id="avis" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Témoignages</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">
            5,0 / 5 sur Google
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1 text-[var(--gold)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border p-7">
              <div className="flex gap-1 text-[var(--gold)]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-foreground/85 leading-relaxed">"{r.text}"</p>
              <p className="mt-5 text-xs text-muted-foreground">— {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12">
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Nous rendre visite</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-tight">Prendre rendez-vous</h2>
        <p className="mt-4 text-muted-foreground">
          Notre équipe vous répond du lundi au samedi. Appelez-nous pour
          planifier votre consultation.
        </p>
        <div className="mt-8 space-y-5">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full grid place-items-center text-[var(--gold-foreground)]" style={{ background: "var(--gradient-gold)" }}>
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Téléphone</div>
              <a href="tel:+212529265580" className="text-lg font-medium hover:text-[var(--gold)]">05 29 26 55 80</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full grid place-items-center text-[var(--gold-foreground)]" style={{ background: "var(--gradient-gold)" }}>
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Adresse</div>
              <div className="text-base">Immeuble 1, Étage 1, Av. Mohamed V, Ben Guerir</div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full grid place-items-center text-[var(--gold-foreground)]" style={{ background: "var(--gradient-gold)" }}>
              <Clock className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Horaires</div>
              <ul className="text-sm divide-y divide-border">
                {hours.map((h) => (
                  <li key={h.d} className="flex justify-between py-1.5">
                    <span>{h.d}</span>
                    <span className="text-muted-foreground">{h.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl overflow-hidden border border-border min-h-[420px]" style={{ boxShadow: "var(--shadow-elegant)" }}>
        <iframe
          title="Plan du cabinet"
          src="https://www.google.com/maps?q=Av.+Mohamed+V,+Ben+Guerir&output=embed"
          className="w-full h-full min-h-[420px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[var(--primary-foreground)]/80">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-9 w-9 rounded-full" />
          <div className="text-sm">
            <div className="font-medium text-white">Centre Dentaire Benguerir</div>
            <div className="text-xs text-white/60">Dr. Maroine El Hizaz</div>
          </div>
        </div>
        <p className="text-xs text-white/60">© {new Date().getFullYear()} Centre Dentaire Benguerir. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
