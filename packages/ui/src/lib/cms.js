import { executeQuery } from '@datocms/cda-client';
import { createClient } from '@sanity/client';

const fallbackLayout = {
  logo: { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80', alt: 'Brand logo' },
  logoDark: { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80', alt: 'Brand logo dark' },
};

const fallbackBrands = [
  {
    id: 'brand-aurora',
    slug: 'aurora',
    name: 'Aurora Studio',
    brandName: 'Aurora Studio',
    productType: 'Lifestyle',
    featuresSubtitle: 'Elegant experiences for modern retail brands.',
    featuresHeadline: 'Built for growth, clarity, and conversion.',
    accentColor: { hex: '#7c3aed' },
    brandLogo: fallbackLayout.logo,
    brandLogoDark: fallbackLayout.logoDark,
    images: [{ url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80', alt: 'Aurora product', width: 1200, height: 800 }],
    features: [
      { label: 'Modular layouts' },
      { label: 'International-ready structure' },
      { label: 'Performance by default' },
    ],
    actions: [{ label: 'Learn more', url: '#', variant: 'primary' }],
    reviews: {
      title: 'Customer reviews',
      reviews: [{ reviewerName: 'Maria G.', reviewDate: '2025-05-12', reviewScore: 5, body: 'A polished brand presence that feels premium.', avatar: { url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80', alt: 'Maria avatar', width: 80, height: 80 } }],
    },
    description: 'Aurora Studio helps premium brands present products and stories with clarity, speed, and a high-conversion design system.',
    _seoMetaTags: [
      { tag: 'title', attributes: { name: 'title' }, content: 'Aurora Studio | Premium retail experiences' },
      { tag: 'meta', attributes: { name: 'description' }, content: 'Premium retail experiences with a conversion-focused brand story.' },
    ],
  },
  {
    id: 'brand-nova',
    slug: 'nova',
    name: 'Nova Commerce',
    brandName: 'Nova Commerce',
    productType: 'Commerce',
    featuresSubtitle: 'Discovery, trust, and purchase journeys designed for scale.',
    featuresHeadline: 'A modern storefront for growing audiences.',
    accentColor: { hex: '#0ea5e9' },
    brandLogo: fallbackLayout.logo,
    brandLogoDark: fallbackLayout.logoDark,
    images: [{ url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80', alt: 'Nova storefront', width: 1200, height: 800 }],
    features: [
      { label: 'Frictionless UX' },
      { label: 'Localized pages' },
      { label: 'SEO-first structure' },
    ],
    actions: [{ label: 'See platform', url: '#', variant: 'secondary' }],
    reviews: {
      title: 'Customer reviews',
      reviews: [{ reviewerName: 'Daniel R.', reviewDate: '2025-04-19', reviewScore: 5, body: 'The structure and UX made it easier to scale internationally.', avatar: { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', alt: 'Daniel avatar', width: 80, height: 80 } }],
    },
    description: 'Nova Commerce gives product-led teams a lightweight storefront that balances performance, storytelling, and trust.',
    _seoMetaTags: [
      { tag: 'title', attributes: { name: 'title' }, content: 'Nova Commerce | Commerce experiences that convert' },
      { tag: 'meta', attributes: { name: 'description' }, content: 'Commerce experiences designed to convert more visitors into loyal customers.' },
    ],
  },
];

const fallbackHome = {
  _seoMetaTags: [
    { tag: 'title', attributes: { name: 'title' }, content: 'SEO técnico en Colombia | Auditoría y posicionamiento web' },
    { tag: 'meta', attributes: { name: 'description' }, content: 'SEO técnico en Colombia para mejorar rastreo, velocidad, arquitectura y posicionamiento web. Auditorías SEO y estrategia medible.' },
  ],
  sections: [
    { id: 'heading-1', _modelApiKey: 'heading', index: '01', label: 'SEO técnico' },
    { id: 'hero-1', _modelApiKey: 'hero_section', heroTitle: 'SEO técnico que convierte búsquedas en crecimiento', heroSubtitle: 'Ayudo a empresas en Colombia a resolver problemas de rastreo, indexación, arquitectura web, velocidad y datos estructurados para ganar visibilidad en Google. El objetivo no es solo atraer tráfico: es construir una web que los buscadores entiendan y las personas quieran usar.', heroImage: { url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80', alt: 'Análisis técnico de posicionamiento web y SEO' }, ctas: [{ label: 'Solicitar auditoría SEO', url: '#contact', variant: 'primary' }, { label: 'Ver servicios SEO', url: '#servicios-seo', variant: 'secondary' }] },
    { id: 'brands-1', _modelApiKey: 'brands_section', brands: fallbackBrands },
    { id: 'contact-1', _modelApiKey: 'contact_section', displayOptions: 'default', title: '¿Tu web está preparada para posicionar?', subtitle: 'Cuéntame qué quieres mejorar y recibirás una primera orientación sobre SEO técnico, auditoría y posicionamiento web.', submitUrl: '#', submitLabel: 'Solicitar diagnóstico', messagePlaceholder: 'Describe tu web y objetivo de negocio', messageLabel: '¿En qué necesitas ayuda?', logos: [{ lightModeImage: fallbackLayout.logo, darkModeImage: fallbackLayout.logoDark }, { lightModeImage: fallbackLayout.logoDark, darkModeImage: fallbackLayout.logo }], emailPlaceholder: 'Tu correo electrónico', emailLabel: 'Correo electrónico', companyTitle: 'SEO técnico en Colombia', companyLogo: { darkModeImage: fallbackLayout.logoDark, lightModeImage: fallbackLayout.logo } },
  ],
};

const fallbackContactForm = {
  ctaForm: {
    displayOptions: 'default',
    title: 'Let’s build your next launch',
    subtitle: 'Tell us what you are growing next.',
    submitUrl: '#',
    submitLabel: 'Send inquiry',
    messagePlaceholder: 'How can we help?',
    messageLabel: 'Message',
    logos: [{ lightModeImage: fallbackLayout.logo, darkModeImage: fallbackLayout.logoDark }, { lightModeImage: fallbackLayout.logoDark, darkModeImage: fallbackLayout.logo }],
    emailPlaceholder: 'Email',
    emailLabel: 'Email',
    companyTitle: 'SEO técnico en Colombia',
    companyLogo: { darkModeImage: fallbackLayout.logoDark, lightModeImage: fallbackLayout.logo },
  },
};

function buildFallbackResult(query = '', variables = {}) {
  const slug = variables.slug || 'aurora';
  const brand = fallbackBrands.find((item) => item.slug === slug) || fallbackBrands[0];

  if (query.includes('allBrands')) {
    return { allBrands: fallbackBrands, home: fallbackHome, layout: fallbackLayout };
  }

  if (query.includes('brand') && query.includes('contactForm')) {
    return { brand, contactForm: fallbackContactForm, layout: fallbackLayout };
  }

  if (query.includes('home')) {
    return { home: fallbackHome, layout: fallbackLayout };
  }

  if (query.includes('_site') || query.includes('theme') || query.includes('layout')) {
    return {
      _site: {
        faviconMetaTags: [],
        globalSeo: { siteName: 'SEO Técnico' },
      },
      theme: { font: 'Inter, sans-serif', webpageWidth: 1280 },
      layout: {
        ...fallbackLayout,
        navLinks: [
          { label: 'About', slug: 'about' },
          { label: 'Brands', slug: 'brands' },
        ],
        copyrightText: 'All rights reserved',
      },
    };
  }

  return {
    _site: { globalSeo: { siteName: 'SEO Técnico' }, faviconMetaTags: [] },
    layout: {
      ...fallbackLayout,
      navLinks: [
        { label: 'About', slug: 'about' },
        { label: 'Brands', slug: 'brands' },
      ],
      copyrightText: 'All rights reserved',
    },
    home: fallbackHome,
    allBrands: fallbackBrands,
    brand,
    contactForm: fallbackContactForm,
  };
}

export default async function queryCMS(query, variables = {}) {
  const sanityProjectId = import.meta.env.SANITY_PROJECT_ID;
  const sanityDataset = import.meta.env.SANITY_DATASET;
  const sanityToken = import.meta.env.SANITY_API_TOKEN;
  const datocmsToken = import.meta.env.DATOCMS_API_TOKEN;

  if (sanityProjectId && sanityDataset) {
    try {
      const client = createClient({
        projectId: sanityProjectId,
        dataset: sanityDataset,
        token: sanityToken,
        useCdn: false,
        apiVersion: '2024-01-01',
      });

      if (query.includes('allBrands')) {
        const brands = await client.fetch(`*[_type == "brand"]|order(_createdAt asc){ _id, slug, name, productType, accentColor, images, brandLogo, brandLogoDark, description, featuresSubtitle, featuresHeadline, features, actions, reviews, _seoMetaTags }`);
        return {
          allBrands: brands?.length ? brands : fallbackBrands,
          home: fallbackHome,
          layout: fallbackLayout,
        };
      }

      if (query.includes('brand') && variables.slug) {
        const brand = await client.fetch(`*[_type == "brand" && slug.current == $slug][0]{ _id, slug, name, productType, accentColor, images, brandLogo, brandLogoDark, description, featuresSubtitle, featuresHeadline, features, actions, reviews, _seoMetaTags }`, { slug: variables.slug });
        return {
          brand: brand || fallbackBrands.find((item) => item.slug === variables.slug) || fallbackBrands[0],
          contactForm: fallbackContactForm,
          layout: fallbackLayout,
        };
      }

      if (query.includes('home')) {
        return { home: fallbackHome, layout: fallbackLayout };
      }

      return buildFallbackResult(query, variables);
    } catch (error) {
      console.warn('Sanity query failed, falling back to local demo data:', error);
      return buildFallbackResult(query, variables);
    }
  }

  if (datocmsToken) {
    try {
      const result = await executeQuery(query, {
        token: datocmsToken,
        variables,
        includeDrafts: true,
      });
      return result;
    } catch (error) {
      console.error('Error querying DatoCMS:', error);
      return buildFallbackResult(query, variables);
    }
  }

  return buildFallbackResult(query, variables);
}
