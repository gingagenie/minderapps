import { Wrench, FileText, DollarSign, Mail } from "lucide-react";

const NAVY = "#1e293b";
const ASSETMINDER_URL = "https://assetminder-frontend.onrender.com";

function Header() {
  return (
    <header style={{ backgroundColor: NAVY }}>
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <span className="text-white text-2xl font-bold tracking-tight">
            Minder<span className="text-slate-300">Apps</span>
          </span>
          <p className="text-slate-400 text-sm mt-0.5">
            Simple tools. Real impact. Built for business.
          </p>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: NAVY }} className="pb-20 pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          The tools small businesses have been waiting for
        </h1>
        <p className="mt-5 text-lg text-slate-300 leading-relaxed">
          Built by real business owners, for real business owners. Simple,
          focused apps that solve real problems.
        </p>
      </div>
    </section>
  );
}

interface AppCardProps {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  learnMoreUrl?: string;
}

function AppCard({
  icon,
  name,
  tagline,
  description,
  status,
  learnMoreUrl,
}: AppCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col p-6">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: "#f1f5f9" }}
      >
        <div style={{ color: NAVY }}>{icon}</div>
      </div>

      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold text-slate-900">{name}</h3>
        {status === "live" ? (
          <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Available Now
          </span>
        ) : (
          <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
            Coming Soon
          </span>
        )}
      </div>

      <p className="text-base font-semibold text-slate-700 mb-2">{tagline}</p>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">
        {description}
      </p>

      {status === "live" && learnMoreUrl && (
        <div className="mt-5">
          <a
            href={learnMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Learn More →
          </a>
        </div>
      )}
    </div>
  );
}

function AppsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Jobber Compatible Apps</h2>
          <p className="mt-3 text-slate-500 text-base">
            Each app solves a unique problem to save you time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <AppCard
            icon={<Wrench size={24} />}
            name="AssetMinder"
            tagline="Give your clients a portal they'll never forget"
            description="Branded client portal showing full service history by asset. PDF reports. Compliance ready."
            status="live"
            learnMoreUrl={ASSETMINDER_URL}
          />
          <AppCard
            icon={<FileText size={24} />}
            name="ContractMinder"
            tagline="Stop spending weeks on contract renewals"
            description="Automatically detects recurring contracts from your Jobber history and renews them all in one click."
            status="coming-soon"
          />
          <AppCard
            icon={<DollarSign size={24} />}
            name="InvoiceMinder"
            tagline="Get paid. Automatically."
            description="Automated payment chasing that escalates until they pay — then sends them on their way."
            status="coming-soon"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          MinderApps is a platform that empowers small businesses to harness the
          tools that big businesses use. By doing this we aim to lift users up
          with us as we grow. Helping people to help people is our mantra.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Mail size={14} />
          <a
            href="mailto:support@minderapps.io"
            className="hover:text-white transition-colors"
          >
            support@minderapps.io
          </a>
        </div>
        <p className="text-slate-500 text-sm">© 2026 MinderApps</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <Header />
      <Hero />
      <AppsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
