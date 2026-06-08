import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const PROJECTS = [
  {
    id: "easy-run-club",
    title: "Easy Run Club",
    category: "Web Sitesi & Üyelik Sistemi",
    description: "İstanbul koşu topluluğu için etkinlik yönetimi, üyelik sistemi ve Strava entegrasyonlu platform.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    url: "https://easyruntr.com",
  },
];

export default function PortfoyPage() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Badge variant="outline" className="mb-6">Portfolyo</Badge>

        <h1 className="font-display font-bold text-5xl sm:text-6xl text-white max-w-2xl">
          Yaptığımız<br />
          <span className="text-lime">işler.</span>
        </h1>

        <p className="mt-6 text-gray-light font-body text-lg max-w-xl">
          Her proje, müşterimizin büyümesine katkı sağlayan bir adım.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Card key={project.id} variant="bordered" className="flex flex-col group">
              <div className="h-48 bg-gray-mid mb-4 flex items-center justify-center">
                <span className="text-gray-light text-sm font-body">Görsel yakında</span>
              </div>
              <Badge variant="dark" className="self-start mb-3">{project.category}</Badge>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-lime transition-colors mb-2">
                {project.title}
              </h3>
              <p className="font-body text-gray-light text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-body text-gray-light border border-gray-mid px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-lime text-sm font-body hover:underline"
                >
                  Siteyi Gör →
                </a>
              )}
            </Card>
          ))}

          {/* Placeholder */}
          <Card variant="bordered" className="flex flex-col items-center justify-center min-h-64 border-dashed">
            <p className="font-display font-bold text-gray-light text-lg mb-2">Senin projen?</p>
            <p className="font-body text-gray-light text-sm text-center mb-4">
              Portfolyomuz büyüyor. Bir sonraki proje senin olabilir.
            </p>
            <Button href="/iletisim" variant="outline" size="sm">İletişime Geç</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
