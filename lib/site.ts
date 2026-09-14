import content from "@/content/content.json";

export type Talent = (typeof content.talents.list)[number];
export type FeaturedCourse = (typeof content.featured.items)[number];

export function waLink(message?: string) {
  const base = `https://wa.me/${content.site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function getTalent(slug: string) {
  return content.talents.list.find((t) => t.slug === slug);
}

export function getCourse(slug: string) {
  return content.featured.items.find((c) => c.slug === slug);
}

/** Quantidade de cursos únicos somando todas as áreas temáticas */
export function uniqueCourses() {
  return Array.from(new Set(content.areas.items.flatMap((a) => a.courses)));
}
