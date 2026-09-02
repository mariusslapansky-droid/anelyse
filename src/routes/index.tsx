import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import collectionSignature from "@/assets/collection-signature.jpg";
import collectionPure from "@/assets/collection-pure.jpg";
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

function Index() {
  const [bag, setBag] = useState<Record<string, number>>({});
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-cream/70 hover:text-brasslight text-[13px] tracking-[0.15em] uppercase transition-colors">
              Cont
            </button>
            <button className="relative border border-brass/50 px-5 py-2.5 text-brasslight text-[12px] tracking-[0.2em] uppercase hover:bg-brass hover:text-velvet transition-colors">
              Coș
              {bagCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brass text-velvet text-[10px] w-5 h-5 grid place-items-center rounded-full">
                  {bagCount}
                </span>
              )}
            </button>
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-brass text-[12px] tracking-[0.45em] uppercase mb-7">
              Atelierul genelor de lux
            </p>
            <h1 className="font-serif text-cream text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Privirea, <span className="italic text-brasslight">iluminată</span> de lumină
              de catifea.
            </h1>
            <p className="mt-8 text-ash text-lg font-light leading-relaxed max-w-md">
              Extensii finisate manual, în două game — opulenta{" "}
              <span className="text-cream">SIGNATURE</span> și ușoara{" "}
              <span className="text-cream">PURE</span>. Purtate ca o ținută de seară.
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
                <span className="block font-serif text-2xl text-cream">Manual</span>
                <span className="text-[11px] tracking-[0.2em] uppercase">Finisate</span>
              </div>
              <div className="w-px h-9 bg-brass/30" />
              <div>
                <span className="block font-serif text-2xl text-cream">6–8</span>
                <span className="text-[11px] tracking-[0.2em] uppercase">Săptămâni</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={heroPortrait}
              alt="Portret editorial cu extensii de gene ANELYSÉ pe fundal de catifea"
              width={1088}
              height={1280}
              className="w-full aspect-[4/5] object-cover rounded-sm hairline"
            />
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-velvet py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-4">Două game</p>
              <h2 className="font-serif text-cream text-5xl tracking-tight">Colecțiile</h2>
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
              className="group relative overflow-hidden bg-wine hairline rounded-sm p-10 min-h-[340px] flex flex-col justify-end"
            >
              <img
                src={collectionSignature}
                alt="Extensii de gene ANELYSÉ SIGNATURE pe mătase de culoare prună"
                loading="lazy"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/50 to-transparent" />
              <div className="relative">
                <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-velvet bg-brass px-3 py-1">
                  Premium
                </span>
                <h3 className="mt-5 font-serif text-4xl text-cream group-hover:text-brasslight transition-colors">
                  ANELYSÉ Signature
                </h3>
                <p className="mt-3 text-cream/70 font-light text-sm max-w-xs">
                  Volume dense, sculptate, în evantaie așezate manual.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-brasslight text-[12px] tracking-[0.2em] uppercase">
                  Explorează →
                </span>
              </div>
            </a>

            <a
              id="pure"
              href="#produse"
              className="group relative overflow-hidden bg-plum hairline rounded-sm p-10 min-h-[340px] flex flex-col justify-end"
            >
              <img
                src={collectionPure}
                alt="Extensii de gene eco ANELYSÉ PURE pe in natural"
                loading="lazy"
                width={912}
                height={912}
                className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velvet via-velvet/55 to-transparent" />
              <div className="relative">
                <span className="inline-block text-[11px] tracking-[0.35em] uppercase text-velvet bg-brass px-3 py-1">
                  Eco
                </span>
                <h3 className="mt-5 font-serif text-4xl text-cream group-hover:text-brasslight transition-colors">
                  ANELYSÉ Pure
                </h3>
                <p className="mt-3 text-cream/70 font-light text-sm max-w-xs">
                  Fire ușoare ca pana, vegane și fără cruzime.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-brasslight text-[12px] tracking-[0.2em] uppercase">
                  Explorează →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="produse" className="bg-plum py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-4">Cele mai dorite</p>
            <h2 className="font-serif text-cream text-5xl tracking-tight">Piese semnătură</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-velvet/60 hairline rounded-sm overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} — extensii de gene ANELYSÉ ${product.line}`}
                    loading="lazy"
                    width={800}
                    height={900}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
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
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-serif text-2xl text-brasslight">
                      {product.price} RON
                    </span>
                    <button
                      onClick={() => addToBag(product.id)}
                      className="text-[11px] tracking-[0.2em] uppercase text-cream/70 hover:text-brasslight border-b border-brass/40 pb-0.5 transition-colors"
                    >
                      {bag[product.id] ? `În coș (${bag[product.id]})` : "Adaugă"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEC COMPARISON */}
      <section className="bg-velvet py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-brass text-[12px] tracking-[0.4em] uppercase mb-4">
              Pentru lash artiste
            </p>
            <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight tracking-tight">
              Curl, grosime și lungime, fără aproximări
            </h2>
            <p className="mt-6 text-ash font-light leading-relaxed max-w-md">
              Fiecare tray ANELYSÉ vine cu fișă tehnică. Compari firele, construiești mapping-ul
              și repeți tehnica identic — de la un look natural până la volume sculptate.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="hairline rounded-sm overflow-hidden">
              {[
                ["Parametru", "Signature", "Pure"],
                ["Curls", "B · C · CC · D", "C · CC"],
                ["Grosimi", "0.05 – 0.25 mm", "0.07 – 0.18 mm"],
                ["Lungimi", "8 – 15 mm", "9 – 13 mm"],
                ["Finisaj", "Lucios, mătase", "Mat, PBT vegan"],
              ].map((row, index) => (
                <div
                  key={row[0]}
                  className={`grid grid-cols-3 ${
                    index === 0
                      ? "bg-plum text-[11px] tracking-[0.2em] uppercase text-cream/60"
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
      <section id="jurnal" className="bg-plum py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brass text-[12px] tracking-[0.45em] uppercase mb-6">
            Jurnalul ANELYSÉ
          </p>
          <h2 className="font-serif text-cream text-4xl lg:text-5xl leading-tight tracking-tight">
            În spatele <span className="italic text-brasslight">fiecărui</span> fir
          </h2>
          <p className="mt-6 text-ash font-light max-w-lg mx-auto">
            Ritualuri de îngrijire, tehnici din atelier și filozofia luxului ușor — de două ori
            pe lună.
          </p>
          <form
            className="mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(event) => {
              event.preventDefault();
              if (email.trim()) setSubscribed(true);
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Adresa ta de email"
              className="flex-1 bg-transparent border border-cream/25 px-5 py-3.5 text-cream placeholder-ash/60 text-sm focus:outline-none focus:border-brass"
            />
            <button className="bg-brass text-velvet px-7 py-3.5 text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-brasslight transition-colors">
              Abonează-mă
            </button>
          </form>
          {subscribed && (
            <p className="mt-4 text-brasslight text-[12px] tracking-[0.2em] uppercase">
              Mulțumim — ești pe listă.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-velvet border-t border-brass/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
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
                  Fără cruzime
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
