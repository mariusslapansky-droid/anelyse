import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CreditCard,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Truck,
  User,
} from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import collectionSignature from "@/assets/collection-signature.jpg";
import collectionPure from "@/assets/collection-pure.jpg";
import macroLash from "@/assets/macro-lash.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ANELYSÉ Lashes — Extensii de gene premium & eco" },
      {
        name: "description",
        content:
          "Magazin online ANELYSÉ Lashes: gama premium SIGNATURE și gama eco PURE. Trays, adezivi și accesorii pentru lash artiste.",
      },
      { property: "og:title", content: "ANELYSÉ Lashes — Extensii de gene premium & eco" },
      {
        property: "og:description",
        content:
          "Două game de extensii de gene lucrate manual: SIGNATURE, dramatic și dens, și PURE, ușor și vegan.",
      },
    ],
  }),
  component: Index,
});

type Product = {
  id: string;
  name: string;
  line: "Signature" | "Pure";
  spec: string;
  price: number;
  rating: string;
  image: string;
};

const products: Product[] = [
  {
    id: "velvet-curl",
    name: "Velvet Curl CC",
    line: "Signature",
    spec: "13 mm · 0.20 · curl CC",
    price: 168,
    rating: "★★★★★",
    image: product1,
  },
  {
    id: "midnight-wing",
    name: "Midnight Wing",
    line: "Signature",
    spec: "15 mm · 0.25 · volume",
    price: 184,
    rating: "★★★★★",
    image: product2,
  },
  {
    id: "whisper-wisp",
    name: "Whisper Wisp",
    line: "Pure",
    spec: "11 mm · 0.15 · eco",
    price: 112,
    rating: "★★★★☆",
    image: product3,
  },
  {
    id: "petale-soft",
    name: "Pétale Soft",
    line: "Pure",
    spec: "12 mm · 0.18 · vegan",
    price: 124,
    rating: "★★★★★",
    image: product4,
  },
];

const testimonials = [
  {
    quote:
      "Cea mai bună retenție pe care am obținut-o vreodată. Colecția Signature este absolut senzațională.",
    author: "Maria",
    role: "Lash Artist · București",
  },
  {
    quote:
      "Evantaiele se deschid perfect, nu se destramă și rămân impecabile până la refill. Clientele observă diferența.",
    author: "Ioana",
    role: "Trainer & Lash Artist · Cluj",
  },
  {
    quote:
      "Gama Pure este exact ce cereau clientele mele: ultra-ușoară, naturală și vegană, fără să pierdem din lux.",
    author: "Alexandra",
    role: "Studio Owner · Timișoara",
  },
];

const usps = [
  { icon: Truck, label: "Livrare gratuită peste 350 RON" },
  { icon: ShieldCheck, label: "Plăți securizate" },
  { icon: RotateCcw, label: "Retur în 30 de zile" },
];

function Index() {
  const [bag, setBag] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [slide, setSlide] = useState(0);

  const bagCount = useMemo(
    () => Object.values(bag).reduce((sum, qty) => sum + qty, 0),
    [bag],
  );
  const bagTotal = useMemo(
    () =>
      Object.entries(bag).reduce((sum, [id, qty]) => {
        const product = products.find((p) => p.id === id);
        return sum + (product ? product.price * qty : 0);
      }, 0),
    [bag],
  );

  const addToBag = (id: string) =>
    setBag((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  const active = testimonials[slide] ?? testimonials[0]!;

  return (
    <div className="bg-velvet">
      {/* NAV */}
      <header className="sticky top-0 z-30 bg-velvet/95 border-b border-brass/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="text-brass text-xl font-serif tracking-[0.35em]">ANELYSÉ</span>
            <span className="w-px h-5 bg-brass/40" />
            <span className="text-ash text-[11px] tracking-[0.4em] uppercase">Lashes</span>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-[13px] tracking-[0.15em] uppercase text-cream/80">
            <a className="hover:text-brasslight transition-colors" href="#signature">
              Signature
            </a>
            <a className="hover:text-brasslight transition-colors" href="#pure">
              Pure
            </a>
            <a className="hover:text-brasslight transition-colors" href="#produse">
              Produse
            </a>
            <a className="hover:text-brasslight transition-colors" href="#jurnal">
              Jurnal
            </a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              aria-label="Contul meu"
              className="group flex items-center gap-2 px-3 py-2 text-cream/70 hover:text-brasslight transition-colors"
            >
              <User className="w-[18px] h-[18px]" strokeWidth={1.25} />
              <span className="hidden sm:inline text-[12px] tracking-[0.2em] uppercase">
                Cont
              </span>
            </button>
            <button
              aria-label={`Coș de cumpărături, ${bagCount} produse`}
              className="relative flex items-center gap-2 border border-brass/50 px-4 sm:px-5 py-2.5 text-brasslight text-[12px] tracking-[0.2em] uppercase hover:bg-brass hover:text-velvet transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.25} />
              <span className="hidden sm:inline">Coș</span>
              {bagCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brass text-velvet text-[10px] w-5 h-5 grid place-items-center rounded-full">
                  {bagCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* USP BAR */}
        <div className="border-t border-brass/15 bg-plum/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex items-center justify-center gap-6 sm:gap-10 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-cream/65 overflow-x-auto">
            {usps.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 whitespace-nowrap">
                <Icon className="w-3.5 h-3.5 text-brass" strokeWidth={1.25} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {bagCount > 0 && (
          <div className="border-t border-brass/15 bg-plum/70">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-cream/80">
              <span>
                {bagCount} {bagCount === 1 ? "produs" : "produse"} în coș
              </span>
              <span className="text-brasslight">Total {bagTotal} RON</span>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="spotlight relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="text-brass text-[12px] tracking-[0.45em] uppercase mb-7">
              Arta privirii perfecte
            </p>
            <h1 className="font-serif text-cream text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Eleganță <span className="italic text-brasslight">absolută</span> la fiecare
              clipire.
            </h1>
            <p className="mt-8 text-ash text-lg font-light leading-relaxed max-w-md">
              Extensii de gene lucrate manual, concepute pentru a deveni semnătura ta. Alege
              intensitatea colecției de lux <span className="text-cream">SIGNATURE</span> sau
              naturalețea sustenabilă a gamei <span className="text-cream">PURE</span>. Un
              detaliu invizibil, prețios ca o rochie de seară.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                className="bg-brass text-velvet px-8 py-4 text-[13px] tracking-[0.2em] uppercase font-medium hover:bg-brasslight transition-colors"
                href="#signature"
              >
                Descoperă Signature
              </a>
              <a
                className="border border-cream/30 text-cream px-8 py-4 text-[13px] tracking-[0.2em] uppercase hover:border-brass hover:text-brasslight transition-colors"
                href="#pure"
              >
                Descoperă Pure
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-cream/60">
              <div>
                <span className="block font-serif text-2xl text-cream">120+</span>
                <span className="text-[11px] tracking-[0.2em] uppercase">Stiluri</span>
              </div>
              <div className="w-px h-9 bg-brass/30" />
              <div>
                <span className="block font-serif text-2xl text-cream">Lucrate</span>
                <span className="text-[11px] tracking-[0.2em] uppercase">Manual</span>
              </div>
              <div className="w-px h-9 bg-brass/30" />
              <div>
                <span className="block font-serif text-2xl text-cream">6–8 săptămâni</span>
                <span className="text-[11px] tracking-[0.2em] uppercase">Rezistență</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-sm hairline">
              <img
                src={heroPortrait}
                alt="Portret editorial cu extensii de gene ANELYSÉ pe fundal de catifea"
                width={1088}
                height={1280}
                className="w-full aspect-[4/5] object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-velvet py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-4">Universul ANELYSÉ</p>
              <h2 className="font-serif text-cream text-5xl tracking-tight">
                Două colecții. Aceeași viziune a excelenței.
              </h2>
            </div>
            <a
              className="hidden md:block text-cream/60 hover:text-brasslight text-[12px] tracking-[0.2em] uppercase transition-colors"
              href="#produse"
            >
              Vezi tot →
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              id="signature"
              href="#produse"
              className="group relative overflow-hidden bg-wine hairline rounded-sm p-10 min-h-[380px] flex flex-col justify-end"
            >
              <img
                src={collectionSignature}
                alt="Extensii de gene ANELYSÉ SIGNATURE pe mătase de culoare prună"
                loading="lazy"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/50 to-transparent" />
              <div className="relative">
                <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-velvet bg-brass px-3 py-1">
                  Luxury Collection
                </span>
                <h3 className="mt-5 font-serif text-4xl text-cream group-hover:text-brasslight transition-colors">
                  ANELYSÉ Signature
                </h3>
                <p className="mt-3 text-cream/70 font-light text-sm max-w-xs">
                  Volum dramatic și densitate magnetică. Evantaie sculptate și așezate
                  manual pentru o prezență impunătoare.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-brasslight text-[12px] tracking-[0.2em] uppercase">
                  Descoperă colecția
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
                </span>
              </div>
            </a>

            <a
              id="pure"
              href="#produse"
              className="group relative overflow-hidden bg-plum hairline rounded-sm p-10 min-h-[380px] flex flex-col justify-end"
            >
              <img
                src={collectionPure}
                alt="Extensii de gene eco ANELYSÉ PURE pe in natural"
                loading="lazy"
                width={912}
                height={912}
                className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/55 to-transparent" />
              <div className="relative">
                <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-velvet bg-brass px-3 py-1">
                  Eco-Conscious
                </span>
                <h3 className="mt-5 font-serif text-4xl text-cream group-hover:text-brasslight transition-colors">
                  ANELYSÉ Pure
                </h3>
                <p className="mt-3 text-cream/70 font-light text-sm max-w-xs">
                  Naturalețe absolută. Fire ultra-ușoare, 100% vegane și cruelty-free,
                  create pentru un lux sustenabil.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-brasslight text-[12px] tracking-[0.2em] uppercase">
                  Descoperă colecția
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP — MACRO BAND */}
      <section className="relative overflow-hidden">
        <img
          src={macroLash}
          alt="Macro cu textura firului unui evantai de gene ANELYSÉ"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-velvet via-velvet/85 to-velvet/25" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-40">
          <div className="max-w-xl">
            <p className="text-brass text-[12px] tracking-[0.45em] uppercase mb-6">
              Măiestria atelierului
            </p>
            <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight tracking-tight">
              Calitatea nu este o <span className="italic text-brasslight">coincidență</span>.
            </h2>
            <p className="mt-6 text-ash font-light leading-relaxed">
              Fiecare evantai este format și fixat la bază cu o precizie milimetrică: se
              deschide instant, își păstrează forma și nu se destramă nici după săptămâni de
              purtare. Fir cu fir, control pe fiecare tray — pentru ca rezultatul tău să fie
              mereu previzibil, impecabil, de lux.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="produse" className="bg-plum py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-4">Selecția exclusivistă</p>
            <h2 className="font-serif text-cream text-5xl tracking-tight">Piese semnătură</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-velvet/60 hairline rounded-sm overflow-hidden transition-shadow duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} — extensii de gene ANELYSÉ ${product.line}`}
                    loading="lazy"
                    width={800}
                    height={900}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                  <button
                    onClick={() => addToBag(product.id)}
                    className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 focus-visible:translate-y-0 transition-transform duration-500 ease-out bg-brass/95 text-velvet py-3.5 text-[11px] tracking-[0.25em] uppercase font-medium hidden sm:block"
                  >
                    {bag[product.id] ? `În coș (${bag[product.id]})` : "Adaugă în coș"}
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-brass">
                      {product.line}
                    </span>
                    <span className="text-brasslight text-sm">{product.rating}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-cream">{product.name}</h3>
                  <p className="mt-1 text-ash text-sm font-light">{product.spec}</p>
                  <span className="mt-5 block font-serif text-2xl text-brasslight">
                    {product.price} RON
                  </span>
                  <button
                    onClick={() => addToBag(product.id)}
                    className="mt-4 w-full border border-brass/45 text-cream/85 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-brass hover:text-velvet transition-colors"
                  >
                    {bag[product.id] ? `În coș (${bag[product.id]})` : "Adaugă în coș"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-velvet py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-10">
            Ce spun profesioniștii
          </p>
          <blockquote className="font-serif text-cream text-3xl lg:text-4xl leading-snug italic">
            „{active.quote}”
          </blockquote>
          <p className="mt-8 text-[11px] tracking-[0.28em] uppercase text-brasslight">
            {active.author}
          </p>
          <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-ash/80">
            {active.role}
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.author}
                aria-label={`Testimonial ${index + 1}`}
                onClick={() => setSlide(index)}
                className={`h-px transition-all duration-500 ${
                  index === slide ? "w-12 bg-brass" : "w-6 bg-cream/25 hover:bg-cream/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SPEC COMPARISON */}
      <section className="bg-plum py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-4">
              Dedicat lash artiștilor
            </p>
            <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight tracking-tight">
              Arhitectura privirii. Precizie fără compromisuri.
            </h2>
            <p className="mt-6 text-ash font-light leading-relaxed max-w-md">
              Fiecare paletă ANELYSÉ este un instrument de înaltă precizie, însoțit de o fișă
              tehnică detaliată. Compară firele, construiește mapping-uri impecabile și replică
              perfecțiunea de fiecare dată — de la seturi clasice și naturale, până la
              mega-volume sculptate.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="hairline rounded-sm overflow-hidden">
              {[
                ["Parametru", "Signature", "Pure"],
                ["Curls", "B · C · CC · D", "C · CC"],
                ["Grosimi", "0.05 – 0.25 mm", "0.07 – 0.18 mm"],
                ["Lungimi", "8 – 15 mm", "9 – 13 mm"],
                ["Finisaj", "Lucios, efect de mătase", "Mat, PBT premium vegan"],
              ].map((row, index) => (
                <div
                  key={row[0]}
                  className={`grid grid-cols-3 ${
                    index === 0
                      ? "bg-velvet text-[11px] tracking-[0.2em] uppercase text-cream/60"
                      : "border-t border-brass/15 text-sm"
                  }`}
                >
                  <div className="px-5 py-4 text-ash">{row[0]}</div>
                  <div className={`px-5 py-4 ${index === 0 ? "" : "text-cream"}`}>{row[1]}</div>
                  <div className={`px-5 py-4 ${index === 0 ? "" : "text-cream"}`}>{row[2]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="jurnal" className="bg-velvet py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brass text-[12px] tracking-[0.45em] uppercase mb-6">
            Jurnalul ANELYSÉ
          </p>
          <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight tracking-tight">
            În spatele <span className="italic text-brasslight">fiecărui</span> fir
          </h2>
          <p className="mt-6 text-ash font-light max-w-lg mx-auto">
            Abonează-te pentru acces prioritar la noile colecții și oferte secrete. Ritualuri
            de îngrijire, tehnici din atelier și filozofia luxului ușor — de două ori pe lună.
          </p>
          <form
            className="mt-10 max-w-md mx-auto"
            onSubmit={(event) => {
              event.preventDefault();
              if (email.trim()) setSubscribed(true);
            }}
          >
            <div className="flex items-center gap-3 border-b border-cream/25 focus-within:border-brass transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Adresa ta de email"
                className="flex-1 bg-transparent py-3.5 text-cream placeholder-ash/60 text-sm focus:outline-none"
              />
              <button
                aria-label="Abonează-te"
                className="text-brass hover:text-brasslight transition-colors p-2"
              >
                <ArrowRight className="w-5 h-5" strokeWidth={1.25} />
              </button>
            </div>
          </form>
          {subscribed && (
            <p className="mt-5 text-brasslight text-[12px] tracking-[0.2em] uppercase">
              Mulțumim — ești pe listă.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-plum border-t border-brass/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-brass text-lg font-serif tracking-[0.35em]">ANELYSÉ</span>
            <p className="mt-4 text-ash text-sm font-light leading-relaxed">
              Atelier de extensii de gene. Signature dramatic, Pure ușor ca pana.
            </p>
          </div>
          <div>
            <h4 className="text-cream text-[12px] tracking-[0.25em] uppercase mb-4">Magazin</h4>
            <ul className="space-y-2.5 text-ash text-sm">
              <li>
                <a href="#signature" className="hover:text-brasslight transition-colors">
                  Signature
                </a>
              </li>
              <li>
                <a href="#pure" className="hover:text-brasslight transition-colors">
                  Pure
                </a>
              </li>
              <li>
                <a href="#produse" className="hover:text-brasslight transition-colors">
                  Accesorii
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream text-[12px] tracking-[0.25em] uppercase mb-4">Brand</h4>
            <ul className="space-y-2.5 text-ash text-sm">
              <li>
                <a href="#jurnal" className="hover:text-brasslight transition-colors">
                  Povestea noastră
                </a>
              </li>
              <li>
                <a href="#jurnal" className="hover:text-brasslight transition-colors">
                  Jurnalul
                </a>
              </li>
              <li>
                <a href="#pure" className="hover:text-brasslight transition-colors">
                  Cruelty-free
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream text-[12px] tracking-[0.25em] uppercase mb-4">Suport</h4>
            <ul className="space-y-2.5 text-ash text-sm">
              <li>Livrare 1–3 zile în România</li>
              <li>Transport gratuit peste 350 RON</li>
              <li>Retur în 30 de zile</li>
              <li>hello@anelyse.ro</li>
            </ul>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="border-t border-brass/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <span className="text-ash/60 text-[10px] tracking-[0.28em] uppercase">
              Plăți securizate
            </span>
            <div className="flex items-center gap-3 opacity-45">
              {["Visa", "Mastercard", "Apple Pay", "Google Pay", "PayPal"].map((brand) => (
                <span
                  key={brand}
                  className="flex items-center gap-1.5 border border-cream/25 rounded-sm px-3 py-1.5 text-cream text-[10px] tracking-[0.15em] uppercase"
                >
                  <CreditCard className="w-3.5 h-3.5" strokeWidth={1.25} />
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brass/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-ash/70 text-[12px] tracking-[0.1em]">
            <span>© 2026 ANELYSÉ Lashes. Toate drepturile rezervate.</span>
            <span>Finisate manual în atelier</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
