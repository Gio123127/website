/**
 * Gallery data — the single source for the /gallery grid and every
 * /gallery/[slug] detail page.
 *
 * Photos are Gulshan's own work, optimised into /public/photos (EXIF/GPS
 * stripped for privacy). Titles + categories below are a best-effort FIRST PASS
 * from the photos — Photo filenames carried no labels, and gel/acrylic/BIAB or
 * the exact art piece can't always be told apart from an image.
 *
 * TODO (client input): review titles + categories; the supplied photos are
 * almost all nail work — only one lash photo was provided, so the "Lashes"
 * filter is thin. More lash photos would balance the gallery.
 */

export const galleryCategories = ["Nails", "Nail art", "Lashes"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  slug: string;
  title: string;
  category: GalleryCategory;
  src: string;
};

export const gallery: GalleryItem[] = [
  { slug: "soft-blush-1", title: "Soft blush manicure", category: "Nails", src: "/photos/Photo1.jpg" },
  { slug: "classic-lash-2", title: "Classic lash set", category: "Lashes", src: "/photos/Photo2.jpg" },
  { slug: "cherry-red-pedicure-3", title: "Cherry red pedicure", category: "Nails", src: "/photos/Photo3.jpg" },
  { slug: "pretty-pink-french-4", title: "Pretty pink French", category: "Nails", src: "/photos/Photo4.jpg" },
  { slug: "french-tips-5", title: "Delicate French tips", category: "Nails", src: "/photos/Photo5.jpg" },
  { slug: "warm-beige-almond-6", title: "Warm beige almond", category: "Nails", src: "/photos/Photo6.jpg" },
  { slug: "soft-pink-pedicure-7", title: "Soft pink pedicure", category: "Nails", src: "/photos/Photo7.jpg" },
  { slug: "lilac-gel-8", title: "Lilac gel set", category: "Nails", src: "/photos/Photo8.jpg" },
  { slug: "glossy-neutral-9", title: "Glossy neutral set", category: "Nails", src: "/photos/Photo9.jpg" },
  { slug: "latte-10", title: "Latte set", category: "Nails", src: "/photos/Photo10.jpg" },
  { slug: "mixed-brights-11", title: "Mixed brights set", category: "Nail art", src: "/photos/Photo11.jpg" },
  { slug: "neon-almond-12", title: "Neon almond set", category: "Nail art", src: "/photos/Photo12.jpg" },
  { slug: "milky-white-13", title: "Milky white set", category: "Nails", src: "/photos/Photo13.jpg" },
  { slug: "natural-beige-14", title: "Natural beige set", category: "Nails", src: "/photos/Photo14.jpg" },
  { slug: "smoky-statement-15", title: "Smoky statement set", category: "Nail art", src: "/photos/Photo15.jpg" },
  { slug: "stiletto-art-16", title: "Stiletto art set", category: "Nail art", src: "/photos/Photo16.jpg" },
  { slug: "clean-neutral-17", title: "Clean neutral set", category: "Nails", src: "/photos/Photo17.jpg" },
  { slug: "neutral-almond-18", title: "Neutral almond set", category: "Nails", src: "/photos/Photo18.jpg" },
  { slug: "classic-french-19", title: "Classic French set", category: "Nails", src: "/photos/Photo19.jpg" },
  { slug: "soft-pink-20", title: "Soft pink set", category: "Nails", src: "/photos/Photo20.jpg" },
  { slug: "french-ombre-21", title: "French ombré set", category: "Nails", src: "/photos/Photo21.jpg" },
  { slug: "blush-gel-22", title: "Blush gel set", category: "Nails", src: "/photos/Photo22.jpg" },
  { slug: "bubblegum-23", title: "Bubblegum set", category: "Nails", src: "/photos/Photo23.jpg" },
  { slug: "rosy-blush-24", title: "Rosy blush set", category: "Nails", src: "/photos/Photo24.jpg" },
  { slug: "pink-french-25", title: "Pink French set", category: "Nails", src: "/photos/Photo25.jpg" },
  { slug: "warm-neutral-26", title: "Warm neutral set", category: "Nails", src: "/photos/Photo26.jpg" },
  { slug: "pink-white-27", title: "Pink & white set", category: "Nails", src: "/photos/Photo27.jpg" },
  { slug: "baby-pink-28", title: "Baby pink set", category: "Nails", src: "/photos/Photo28.jpg" },
  { slug: "soft-almond-29", title: "Soft almond set", category: "Nails", src: "/photos/Photo29.jpg" },
  { slug: "hot-pink-30", title: "Hot pink set", category: "Nails", src: "/photos/Photo30.jpg" },
  { slug: "purple-gel-31", title: "Purple gel set", category: "Nails", src: "/photos/Photo31.jpg" },
  { slug: "white-design-32", title: "White design set", category: "Nail art", src: "/photos/Photo32.jpg" },
  { slug: "soft-milky-33", title: "Soft milky set", category: "Nails", src: "/photos/Photo33.jpg" },
  { slug: "natural-set-34", title: "Natural set", category: "Nails", src: "/photos/Photo34.jpg" },
  { slug: "multicolour-glam-35", title: "Multicolour glam set", category: "Nail art", src: "/photos/Photo35.jpg" },
  { slug: "plum-gel-36", title: "Plum gel set", category: "Nails", src: "/photos/Photo36.jpg" },
  { slug: "polished-neutral-37", title: "Polished neutral set", category: "Nails", src: "/photos/Photo37.jpg" },
  { slug: "sunny-yellow-38", title: "Sunny yellow set", category: "Nail art", src: "/photos/Photo38.jpg" },
  { slug: "soft-beige-39", title: "Soft beige set", category: "Nails", src: "/photos/Photo39.jpg" },
  { slug: "yellow-floral-40", title: "Yellow floral set", category: "Nail art", src: "/photos/Photo40.jpg" },
  { slug: "pink-gel-41", title: "Pink gel set", category: "Nails", src: "/photos/Photo41.jpg" },
  { slug: "crisp-white-42", title: "Crisp white set", category: "Nails", src: "/photos/Photo42.jpg" },
  { slug: "sunset-tips-43", title: "Sunset tips set", category: "Nail art", src: "/photos/Photo43.jpg" },
  { slug: "soft-natural-44", title: "Soft natural set", category: "Nails", src: "/photos/Photo44.jpg" },
  { slug: "glossy-set-45", title: "Glossy set & polish", category: "Nails", src: "/photos/Photo45.jpg" },
];

export function getGalleryItem(slug: string): GalleryItem | undefined {
  return gallery.find((item) => item.slug === slug);
}

export function relatedItems(item: GalleryItem, count = 4): GalleryItem[] {
  return gallery
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, count);
}

export function categoryCount(category: GalleryCategory): number {
  return gallery.filter((i) => i.category === category).length;
}
