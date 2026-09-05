import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/categorie/$slug")({
  head: ({ params }) => {
    const label = prettify(params.slug);
    return {
      meta: [
        { title: `${label} — ANELYSÉ Lashes` },
        {
          name: "description",
          content: `Descoperă ${label} în catalogul ANELYSÉ Lashes: produse premium și eco pentru lash artiste.`,
        },
        { property: "og:title", content: `${label} — ANELYSÉ Lashes` },
        {
          property: "og:description",
          content: `Descoperă ${label} în catalogul ANELYSÉ Lashes.`,
        },
      ],
    };
  },
  component: CategoryPage,
});

const labels: Record<string, string> = {
  signature: "ANELYSÉ Signature",
  pure: "ANELYSÉ Pure",
  "fir-cu-fir": "Fir cu fir (Clasic)",
  volum: "Volum (2D – 6D)",
  "mega-volum": "Mega Volum (8D+)",
  "pre-made-fans": "Pre-made Fans",
  "adeziv-uscare-rapida": "Adeziv Uscare Rapidă (0.5 – 1 sec)",
  "adeziv-uscare-medie": "Adeziv Uscare Medie (1 – 2 sec)",
  "adeziv-clear": "Adeziv Transparent (Clear)",
  "lash-foam": "Șampon / Lash Foam",
  primer: "Primer",
  superbonder: "Superbonder",
  "remover-crema": "Remover Cremă",
  "remover-gel": "Remover Gel",
  "curatare-pensete": "Soluții curățare pensete",
  "pensete-volum": "Pensete Volum & Mega Volum",
  "pensete-izolare": "Pensete Izolare",
  "pensete-clasic": "Pensete Fir cu Fir",
  "suporturi-pensete": "Huse & Suporturi magnetice",
  "plasturi-hidrogel": "Plasturi cu Hidrogel",
  "benzi-medicale": "Benzi Medicale (Tapes)",
  "periute-microbrush": "Periuțe & Microbrush-uri",
  "accesorii-adeziv": "Accesorii Adeziv",
  dezinfectanti: "Dezinfectanți & Sterilizare",
  "lash-boards": "Palete de lucru (Lash Boards)",
  "echipamente-salon": "Echipamente Salon",
  "discovery-kit": "Discovery Kit",
  "kit-incepatori": "Kit Începători / Classic 1D",
  "kit-volum-rusesc": "Kit Avansați / Volum Rusesc",
  "kit-academii": "Kit pentru Academii",
  "sistem-retentie": "Sistem Retenție Maximă",
  "pachet-arhitectura-privirii": "Pachetul „Arhitectura Privirii”",
  "bundle-consumabile": "Bundle Consumabile (5+1 Gratuit)",
  "oferta-lunii": "Oferta Lunii",
  sale: "Last Chance / Sale",
  "cursuri-baza": "Cursuri de Bază (1–3D)",
  "masterclass-volum": "Masterclass Volum & Mega-Volum",
  evenimente: "Calendar Evenimente",
  "ghid-retentie": "Ghidul de Retenție Definitiv",
  "fise-tehnice": "Fișa Tehnică a Produselor",
  "scheme-mapping": "Scheme de Mapping",
  "tutoriale-video": "Tutoriale Video",
  blog: "Totul despre Extensii de Gene",
  faq: "Întrebări Frecvente",
};

function prettify(slug: string): string {
  if (labels[slug]) return labels[slug];
  if (slug.startsWith("curbura-"))
    return `Curbura ${slug.replace("curbura-", "").toUpperCase()}`;
  if (slug.startsWith("grosime-"))
    return `Grosime 0.${slug.replace("grosime-", "")}mm`;
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function CategoryPage() {
  const { slug } = Route.useParams();
  const title = prettify(slug);

  return (
    <div className="min-h-screen bg-velvet text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-cream/60 hover:text-brasslight transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
          Înapoi la magazin
        </Link>

        <p className="mt-10 text-[11px] tracking-[0.35em] uppercase text-brass">
          Catalog ANELYSÉ
        </p>
        <h1 className="mt-4 font-serif text-4xl lg:text-6xl text-cream">{title}</h1>
        <p className="mt-6 max-w-xl text-cream/60 leading-relaxed">
          Selecția {title} este în curs de curatare. Produsele acestei categorii
          vor fi disponibile în curând — lasă-ne adresa de email pe pagina
          principală și te anunțăm la lansare.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-brass/60 px-6 py-3 text-[12px] tracking-[0.2em] uppercase text-brasslight hover:bg-brass hover:text-velvet transition-colors"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.25} />
            Vezi produsele disponibile
          </Link>
        </div>
      </div>
    </div>
  );
}
