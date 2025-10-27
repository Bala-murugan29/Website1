import React, { useState, useEffect } from "react";
// import local images from project root
import mlaimImg from "../../maliam.jpeg";
import balamCertImg from "../../Balamuruganmaliamcollege_pages-to-jpg-0001.jpg";
import productCertImg from "../../ProductandInnovationChallenge-Round2-certificate_page-0001.jpg";

type Achievement = {
  id: string;
  type: "offline" | "online";
  title: string;
  date: string;
  summary: string;
  photo?: string;
  cert: string;
  logoColor?: string;
  logoSvg?: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    id: "offline-1",
    type: "offline",
    title: "Project Exhibition - Technovation",
    date: "27/09/25",
    summary: "Technovation — Secured 3rd place at Maliam Engg college.",
    // Place these files into `public/images/achievements/`
    // Photo provided at project root: /maliam.jpeg — imported above so Vite bundles it
    photo: mlaimImg,
    cert: balamCertImg,
  },
  {
    id: "online-1",
    type: "online",
    title: "Online Event",
    date: "27/09/25",
    summary: "Participated in Product & Innovation Challenge — Certificate awarded.",
    cert: productCertImg,
    logoColor: "bg-[#00E0B8]",
    // simplified icon (document) instead of star
  },
];
export const AchievementsSection: React.FC = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8">Achievements</h2>

        <div className="space-y-6">
          {achievements.map((a) => (
            <article key={a.id} className="glass-card p-4 md:p-6 rounded-lg shadow-sm">
              {a.type === "offline" ? (
                // Offline: 2-column layout (photo + certificate)
                <div className="flex flex-col md:flex-row items-stretch gap-4">
                  {/* Left: photo with caption below */}
                  <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="w-full h-56 md:h-52 overflow-hidden rounded-md">
                      <button
                        onClick={() => a.photo && setLightboxSrc(a.photo)}
                        aria-label={`${a.title} photo`}
                        className="w-full h-full block"
                      >
                        <img
                          src={a.photo}
                          alt={`${a.title} photo`}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23222"/><text x="50%" y="50%" fill="%23fff" font-size="24" text-anchor="middle" alignment-baseline="middle">No image</text></svg>';
                          }}
                        />
                      </button>
                    </div>
                    <div className="mt-3 text-center text-sm text-muted-foreground">
                      <div className="font-medium text-foreground">{a.title}</div>
                      <div className="text-xs">{a.date}</div>
                    </div>
                  </div>

                  {/* Right: certificate + description */}
                  <div className="w-full md:w-1/2 flex flex-col justify-between">
                    <div className="w-full mb-4">
                      <div className="w-full h-64 md:h-72 overflow-y-auto rounded-md bg-muted/20">
                        <img src={a.cert} alt={`${a.title} certificate`} className="w-full h-auto object-contain" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">{a.title}</h3>
                      <div className="text-sm text-muted-foreground">{a.date}</div>
                      <p className="mt-2 text-sm text-foreground">{a.summary}</p>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() => setLightboxSrc(a.cert)}
                          className="inline-flex items-center px-3 py-1.5 rounded-md bg-primary text-white hover:opacity-90 transition"
                        >
                          View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Online: 1-column layout (full-width certificate with description below)
                <div className="flex flex-col">
                  <div className="w-full overflow-y-auto rounded-md mb-4 bg-muted/20" style={{ maxHeight: '80vh' }}>
                    <img src={a.cert} alt={`${a.title} certificate`} className="w-full h-auto object-contain" />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">{a.title}</h3>
                    <div className="text-sm text-muted-foreground">{a.date}</div>
                    <p className="mt-2 text-sm text-foreground">{a.summary}</p>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => setLightboxSrc(a.cert)}
                        className="inline-flex items-center px-3 py-1.5 rounded-md bg-primary text-white hover:opacity-90 transition"
                      >
                        View Certificate
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {lightboxSrc && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" onClick={() => setLightboxSrc(null)}>
          <div className="max-w-[90vw] max-h-[90vh] overflow-y-auto rounded-md bg-white/5" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt="Preview" className="object-contain max-w-full max-h-[90vh] rounded-md" />
            <div className="mt-3 text-right">
              <button onClick={() => setLightboxSrc(null)} className="px-3 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AchievementsSection;
