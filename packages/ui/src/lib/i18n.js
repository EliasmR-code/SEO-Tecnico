export default async function getAvailableLocales() {
  const configuredLocales = import.meta.env.PUBLIC_LOCALES || import.meta.env.SANITY_LOCALES || 'en,fr,de,nl,pl';
  return configuredLocales
    .split(',')
    .map((locale) => locale.trim())
    .filter(Boolean);
}

export async function getFallbackLocale() {
  const locales = await getAvailableLocales();
  return locales[0] || 'en';
}

export function getLocaleSlug(locale, path) {
  const slug = path.split('/').slice(2).join('/');
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}
