// Single source of truth for all site content, in English (en) and Spanish (es).
//
// - `business` holds language-neutral facts (phone, address, license, etc.).
// - `content.en` / `content.es` hold all translatable copy.
// - Components read the active language via the useLang() hook (see src/i18n).
//
// To edit copy: change the matching string in BOTH `en` and `es`.

import {
  AirVent,
  Award,
  CalendarCheck,
  ClipboardCheck,
  Clock,
  Droplets,
  Factory,
  Gauge,
  Refrigerator,
  ScanSearch,
  ShieldCheck,
  Snowflake,
  Store,
  ThermometerSnowflake,
  Users,
  Warehouse,
  Wrench,
} from 'lucide-react'

// ---------------------------------------------------------------------------
// Language-neutral business facts
// ---------------------------------------------------------------------------
export const business = {
  name: 'Strong Services USA',
  yearsInBusiness: 30,
  license: 'CAC1817892',
  phone: '(305) 267-4960',
  phoneHref: 'tel:+13052674960',
  email: 'Info@StrongServicesUSA.com',
  emailHref: 'mailto:Info@StrongServicesUSA.com',
  address: {
    line1: '13816 SW 142 Ave, Suite #33',
    city: 'Miami',
    state: 'FL',
    zip: '33186',
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=13816+SW+142+Ave+Suite+33+Miami+FL+33186',
  // Interactive map embed (no API key required).
  mapEmbedUrl:
    'https://maps.google.com/maps?q=13816%20SW%20142%20Ave%20Suite%2033%20Miami%20FL%2033186&output=embed',
  facebook: 'https://www.facebook.com/strongservicesusa/',
  counties: ['Miami-Dade', 'Broward', 'Palm Beach'],
}

// Icons are shared across languages, keyed by slug so translated lists stay
// in sync without duplicating icon references.
const ICONS = {
  // What we do
  evaluation: ScanSearch,
  inspection: ClipboardCheck,
  maintenance: CalendarCheck,
  installation: Wrench,
  // Specialties
  'ac-ventilation': AirVent,
  'blast-freezers': ThermometerSnowflake,
  'cold-storage': Warehouse,
  'controlled-atmosphere': Gauge,
  'cooling-towers': Factory,
  'ice-machines': Snowflake,
  'supermarket-restaurant': Store,
  'walk-in': Refrigerator,
  'water-chillers': Droplets,
}
const withIcons = (list) => list.map((s) => ({ ...s, icon: ICONS[s.slug] }))

const TRUST_ICONS = [Users, Award, ShieldCheck, Clock]
const withTrustIcons = (list) => list.map((p, i) => ({ ...p, icon: TRUST_ICONS[i] }))

// Equipment brands shown on the original site's "Badges" strip, plus the
// residential and commercial brand lists from the Services page.
const BADGE_BRANDS = ['Trane', 'Carrier', 'Rheem', 'Lennox', 'Goodman', 'American Standard', 'Coleman']
const RESIDENTIAL_BRANDS = ['Trane', 'Rheem', 'Lennox', 'Carrier', 'Goodman']
const COMMERCIAL_BRANDS = ['True', 'Bohn / Heatcraft', 'Copeland', 'Tecumseh', 'Danfoss']

const years = `${business.yearsInBusiness}+`

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------
const en = {
  tagline: 'Refrigeration and air conditioning specialists serving South Florida.',
  serviceArea: 'Miami-Dade · Broward · Palm Beach',

  nav: [
    { label: 'Home', to: '/' },
    {
      label: 'Services',
      to: '/services',
      children: [
        { label: 'Residential', to: '/services#residential' },
        { label: 'Commercial', to: '/services#commercial' },
      ],
    },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
  ],


  hero: {
    eyebrow: 'Family-Owned · Miami, FL',
    headlineLead: 'Turn to Us for Your',
    headlineAccent: 'Refrigeration and Air Conditioning Needs',
    body: 'If you need help with your residential or commercial AC and refrigeration units, turn to Strong Services USA in Miami, FL. We are a family-owned professional air conditioning and refrigeration company that has been in business for more than 30 years.',
    primaryCta: { label: 'Request Service', to: '/contact' },
    secondaryCta: { label: 'Our Services', to: '/services' },
    yearsLabel: 'Years in Business',
    emergency: '24/7 Service',
    photoAlt: 'Strong Services USA crew craning a commercial refrigeration unit onto a roof',
  },

  trustPoints: withTrustIcons([
    { label: 'Family-Owned' },
    { label: `${years} Years Experience` },
    { label: `License ${business.license}` },
    { label: 'Available 24/7' },
  ]),

  intro: {
    eyebrow: 'Who We Are',
    heading: 'Quality service, with honesty and professionalism guaranteed',
    body: [
      'Our main goal is to satisfy our customers and provide the best quality service, with honesty and professionalism guaranteed.',
      'It is our company’s passion to work on projects that challenge us so we can put our knowledge and experience into practice. We are here to lend you a hand!',
    ],
  },

  assistance: {
    eyebrow: 'Our Promise',
    heading: 'Assistance Without Limits',
    body: 'Our crew understands how important air conditioners and refrigerators are in your home or business. That is why our skilled technicians will treat your unit as their own, assisting you without limits until the job is done successfully. We do this to earn your trust so you can be part of our family in the long run.',
    photoAlt: 'Strong Services USA technician servicing a unit',
    learnMore: 'More about us',
  },

  whatWeDo: {
    eyebrow: 'What We Do',
    heading: 'Service and maintenance for peak efficiency',
    body: 'Our technicians offer a range of services and maintenance contracts that will ensure maximum efficiency of all of your refrigeration and air conditioning equipment. Apart from selling units, we also do:',
    more: 'These are just the beginning. Our team can do more.',
    viewAll: 'Explore our services',
    services: withIcons([
      {
        slug: 'evaluation',
        title: 'Evaluation & Diagnosis',
        summary: 'A thorough evaluation and diagnosis of your air and ventilation system.',
      },
      {
        slug: 'inspection',
        title: 'Inspection of Units',
        summary: 'Detailed inspections that catch problems early and keep your units running.',
      },
      {
        slug: 'maintenance',
        title: 'Monthly Partial Maintenance',
        summary: 'Monthly partial maintenance agreements that keep your equipment up to date.',
      },
      {
        slug: 'installation',
        title: 'Service & Installation',
        summary: 'Professional service and installation of new and existing equipment.',
      },
    ]),
  },

  specialties: {
    eyebrow: 'We Specialize In',
    heading: 'Cooling expertise for every kind of equipment',
    body: 'We are specialists in cooling equipment and all air distribution systems, for homes, businesses, and industrial facilities.',
    items: withIcons([
      { slug: 'ac-ventilation', title: 'Air Conditioning and Ventilation Systems' },
      { slug: 'blast-freezers', title: 'Blast Freezers' },
      { slug: 'cold-storage', title: 'Cold Storage and Food Preparation Areas' },
      { slug: 'controlled-atmosphere', title: 'Controlled Atmosphere Environments' },
      { slug: 'cooling-towers', title: 'Cooling Towers' },
      { slug: 'ice-machines', title: 'Ice Machines' },
      { slug: 'supermarket-restaurant', title: 'Supermarket and Restaurant Equipment Repair' },
      { slug: 'walk-in', title: 'Walk-In Coolers and Freezers' },
      { slug: 'water-chillers', title: 'Water Chillers' },
    ]),
  },

  credentials: {
    eyebrow: 'Our Credentials',
    heading: 'Licensed, insured, and ready for any job',
    body: 'Our company has all the necessary licenses and insurance to perform any kind of job. For us, no job is too big or too small. We are open to new residential, commercial, and industrial customers.',
    licenseLabel: 'State License',
    points: ['Fully licensed and insured', 'Residential, commercial & industrial', 'No job too big or too small'],
  },

  ygrene: {
    badge: 'Certified & Approved',
    heading: 'Ygrene Program Financing',
    body: 'Our business is certified and approved to work with the Ygrene Program. This program helps home and business owners replace their equipment with new, more efficient units, providing a more affordable way to finance home improvements.',
  },

  brands: {
    eyebrow: 'Brands We Work With',
    heading: 'Trained on all major brands',
    list: BADGE_BRANDS,
  },

  cta: {
    heading: 'Always at Your Service',
    body: 'Our team is here to assist you 24/7! We are specialists in cooling equipment and all air distribution systems. If you need our services, do not hesitate to contact us.',
    callToday: 'Call Today to Set an Appointment',
    request: 'Send a Message',
  },

  servicesPage: {
    eyebrow: 'Our Services',
    title: 'Maintaining the Efficiency of Your AC & Refrigeration Units',
    subtitle:
      'Installation, replacement, repair, and maintenance for homes and businesses across Miami-Dade, Broward, and Palm Beach County.',
    jump: { residential: 'Residential', commercial: 'Commercial' },

    residential: {
      eyebrow: 'Residential',
      heading: 'New Installation & Replacement',
      body: [
        'If your air conditioning unit is more than 10 years old, you should consider replacing it with a new one. The equipment being manufactured today is much more efficient than the one you have now, so it will provide a more pleasant environment along with savings.',
        'If you need to replace your equipment, one of our trained technicians can look at your building capacity and tell you if you need a unit that is the same size, smaller, or larger.',
        'A unit that is not the correct size will work harder and less efficiently, and it can lead to more electricity consumption.',
      ],
      tipLabel: 'Rule of thumb',
      tip: 'Units older than 10 years are usually worth replacing.',
      photoAlt: 'Cutaway view of a modern residential AC condenser',
      reme: {
        eyebrow: 'We Highly Recommend',
        heading: 'REME HALO® In-Duct Air Purifier',
        body: [
          'The REME HALO in-duct air purifier is the next generation of indoor air quality (IAQ) technology, capable of purifying every cubic inch of air that your central air conditioning system reaches.',
          'Designed to eliminate sick building syndrome risks by reducing odors and air pollutants, the REME HALO is the best solution for whole-house and building air purification. Invented to recreate nature’s process of purifying the air, it’s like bringing fresh outdoor air inside without ever having to open your windows.',
        ],
        effectiveLabel: 'Effective against all three categories of indoor air pollutants:',
        pollutants: ['Particulates', 'Microbial', 'Gases'],
        allergy:
          'You can now reduce common allergy triggers from particulates such as pollen, mold spores, dander, and dust.',
      },
      ratesHeading: 'Unbeatable rates, fast service',
      rates:
        'We offer unbeatable rates for our A/C installation service while providing fast and reliable service in Dade, Broward, and Palm Beach County.',
      brandsHeading: 'We work with all major brands',
      brandsNote: 'Trane, Rheem, Lennox, Carrier, Goodman, and many others.',
      brands: RESIDENTIAL_BRANDS,
    },

    commercial: {
      eyebrow: 'Commercial',
      heading: 'Reliable, same-day emergency service',
      body: [
        'We offer reliable, same-day emergency service to get your business equipment working properly again, whether you need new units or repairs to existing ones.',
        'Our team of trained technicians can come to you ASAP to diagnose and fix your problem, and can help with all your refrigeration and air conditioning needs, including:',
      ],
      equipment: [
        'Cooling Towers',
        'Heat Pumps',
        'Water Chillers',
        'Walk-In Coolers',
        'Blast Freezers',
        'Ice Machines',
        'Display Coolers',
      ],
      photoAlts: ['Commercial refrigeration unit installed on a rooftop', 'Technicians installing a Carrier rooftop unit'],
      pm: {
        eyebrow: 'Monthly Partial Maintenance (PM)',
        heading: 'Maintenance that protects your bottom line',
        body: [
          'Regular and continual servicing and maintenance of your refrigeration and air conditioning equipment is essential to the success and profitability of your business.',
          'That is why we have developed a monthly partial maintenance system (PM) with many of our clients. At a reasonable price, you can keep your equipment up to date: each month our technicians visit your business and perform the partial maintenance following a detailed plan, ensuring that all units work properly.',
        ],
        checklistTitle: 'Each monthly visit includes, among others:',
        checklist: [
          'General inspection of all units',
          'Flushing drain lines',
          'Changing air filters',
          'Checking pressures and refrigerants',
          'External cleaning of the equipment',
          'Any problem found is reported to you and fixed with your authorization',
        ],
      },
      eco: 'We are committed to promoting environmentally friendly and low-energy solutions, minimizing capital and maintenance costs.',
      brandsHeading: 'Trained on all major commercial brands',
      brandsNote: 'True, Bohn/Heatcraft, Copeland, Tecumseh, Danfoss, and many others.',
      brands: COMMERCIAL_BRANDS,
    },

    advantages: {
      eyebrow: 'More Advantages',
      heading: 'Certified to work with the Ygrene Program',
      body: 'Our company is certified and approved to work with the Ygrene Program. This program helps home and business owners replace their equipment with new ones that are more efficient, providing a more affordable way to finance your home improvements.',
    },
  },

  portfolio: {
    eyebrow: 'Our Work',
    heading: 'Projects we’re proud of',
    subtitle:
      'A look at the commercial refrigeration, air conditioning, and service work our team delivers across South Florida.',
    categories: ['All', 'Commercial Refrigeration', 'Commercial AC', 'Cooling Towers', 'Service & Repair'],
    empty: 'No projects in this category yet — check back soon.',
    // Photos are real Strong Services USA jobs from the original site.
    // Titles/descriptions describe what each photo shows; add locations and
    // dates once the client confirms them.
    projects: [
      {
        id: 'rooftop-crane-lift',
        image: '/images/hero.jpg',
        title: 'Rooftop Refrigeration Unit Crane Lift',
        category: 'Commercial Refrigeration',
        description:
          'Craning a large commercial refrigeration unit onto its rooftop rails and guiding it into place.',
      },
      {
        id: 'rooftop-condensing-unit',
        image: '/images/rooftop-unit.jpg',
        title: 'Rooftop Condensing Unit Installation',
        category: 'Commercial Refrigeration',
        description:
          'A commercial condensing unit installed on an elevated rooftop stand, piped and ready for service.',
      },
      {
        id: 'unit-staging',
        image: '/images/unit-sunset.jpg',
        title: 'Commercial Unit Staging',
        category: 'Commercial Refrigeration',
        description: 'A new refrigeration unit staged on site and prepared for installation.',
      },
      {
        id: 'carrier-rtu',
        image: '/images/carrier-install.jpg',
        title: 'Carrier WeatherMaker Rooftop Unit',
        category: 'Commercial AC',
        description: 'Setting and connecting a Carrier WeatherMaker packaged rooftop unit for a commercial client.',
      },
      {
        id: 'cooling-tower-piping',
        image: '/images/cooling-tower.jpg',
        title: 'Cooling Tower Piping',
        category: 'Cooling Towers',
        description: 'Supply and return piping between cooling towers, color-coded for clear, safe maintenance.',
      },
      {
        id: 'on-site-diagnosis',
        image: '/images/technician.jpg',
        title: 'On-Site Diagnosis & Repair',
        category: 'Service & Repair',
        description: 'One of our technicians diagnosing a unit on site — we stay until the job is done right.',
      },
    ],
  },

  about: {
    eyebrow: 'About Us',
    heading: 'Professional Air Conditioning and Refrigeration Contractor',
    lead: 'A family-owned Miami company with more than 30 years in the business.',
    body: [
      'Here at Strong Services USA in Miami, FL, we are a family-owned company that offers professional refrigeration and air conditioning services. Our founders have been in this business for more than 30 years.',
      'We enjoy being challenged by our projects so we can apply our expertise. Our team strives to bring satisfaction by doing the best that we can, ensuring an honest and professional job.',
    ],
    photoAlt: 'Commercial refrigeration unit ready for installation at sunset',
    valuesEyebrow: 'What Drives Us',
    valuesHeading: 'The way we work',
    values: [
      {
        title: 'Family-Owned',
        description: 'We treat every customer like part of the family — and earn that trust for the long run.',
      },
      {
        title: 'Honesty & Professionalism',
        description: 'Honest recommendations and professional work, guaranteed on every job.',
      },
      {
        title: 'Up for a Challenge',
        description: 'We love projects that challenge us and put our knowledge and experience into practice.',
      },
      {
        title: 'Until the Job Is Done',
        description: 'Our technicians treat your unit as their own and stay with it until it’s fixed right.',
      },
    ],
    servicesHeading: 'Our Services',
    servicesIntro: 'Our team can do:',
    services: [
      'Evaluation and Diagnosis of Air and Ventilation Systems',
      'Inspection of Units',
      'Partial Monthly Maintenance Agreements',
      'Sales',
      'Service and Installation',
    ],
    servicesMore: 'These are just part of what we can do.',
    specialistsHeading: 'We Are Specialists In',
    specialists: [
      'All Air Distribution Systems',
      'Cooling Towers',
      'Ice Machines',
      'Walk-In Coolers',
      'Walk-In Freezers',
      'Water Chillers',
    ],
    ygrene: {
      heading: 'Certified to Work With the Ygrene Program',
      body: 'The Ygrene Program helps residential and commercial property owners get new, more efficient equipment in place of the older units they own. Our company is certified and approved to work with this program and help provide you with more affordable ways of upgrading your equipment.',
    },
    credentials: {
      years: 'Years in Business',
      license: 'State License',
      area: 'Counties Served',
      areaValue: '3',
    },
    cta: {
      heading: 'Contact Us',
      body: 'We look forward to hearing from you. If you have any questions or concerns, do not hesitate to get in touch with us.',
    },
  },

  contact: {
    eyebrow: 'Contact Us',
    title: 'Call Us Anytime for AC and Refrigeration Solutions',
    subtitle: 'Service in Dade, Broward, and Palm Beach County — 24 hours a day, 7 days a week.',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    hours: 'Hours',
    hoursValue: 'Open 24/7',
    mapTitle: 'Map to Strong Services USA',
  },

  form: {
    heading: 'Send us a message',
    fullName: 'Full name',
    fullNamePlaceholder: 'Jane Doe',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    phone: 'Phone',
    phonePlaceholder: '(305) 000-0000',
    phoneInvalid: 'Please enter a valid 10-digit US phone number.',
    emailInvalid: 'Please enter a valid email address, like you@email.com.',
    didYouMean: 'Did you mean',
    company: 'Company',
    companyPlaceholder: 'Your business name',
    model: 'Model / Product',
    modelPlaceholder: 'e.g. walk-in cooler, rooftop unit',
    message: 'Message',
    messagePlaceholder: 'Tell us about your equipment and what you need…',
    optional: 'optional',
    send: 'Send Message',
    sending: 'Sending…',
    success: 'Thanks! Your message was sent — we’ll get back to you shortly.',
    error: 'Sorry, something went wrong sending your message. Please try again or call us.',
    callNote: 'Need help right away? Call us — we’re available 24/7.',
  },

  footer: {
    siteLinks: 'Site Links',
    getInTouch: 'Get In Touch!',
    serviceArea: 'Service Area',
    followUs: 'Follow us on Facebook',
    rightsReserved: 'All rights reserved.',
    license: 'License #',
    available: 'Available 24/7',
  },
}

// ---------------------------------------------------------------------------
// Spanish
// ---------------------------------------------------------------------------
const es = {
  tagline: 'Especialistas en refrigeración y aire acondicionado al servicio del sur de la Florida.',
  serviceArea: 'Miami-Dade · Broward · Palm Beach',

  nav: [
    { label: 'Inicio', to: '/' },
    {
      label: 'Servicios',
      to: '/services',
      children: [
        { label: 'Residencial', to: '/services#residential' },
        { label: 'Comercial', to: '/services#commercial' },
      ],
    },
    { label: 'Portafolio', to: '/portfolio' },
    { label: 'Nosotros', to: '/about' },
    { label: 'Contacto', to: '/contact' },
  ],


  hero: {
    eyebrow: 'Empresa Familiar · Miami, FL',
    headlineLead: 'Cuente con Nosotros para Sus',
    headlineAccent: 'Necesidades de Refrigeración y Aire Acondicionado',
    body: 'Si necesita ayuda con sus equipos de aire acondicionado y refrigeración residenciales o comerciales, cuente con Strong Services USA en Miami, FL. Somos una empresa familiar de aire acondicionado y refrigeración con más de 30 años en el negocio.',
    primaryCta: { label: 'Solicitar Servicio', to: '/contact' },
    secondaryCta: { label: 'Nuestros Servicios', to: '/services' },
    yearsLabel: 'Años en el Negocio',
    emergency: 'Servicio 24/7',
    photoAlt: 'Equipo de Strong Services USA subiendo con grúa una unidad de refrigeración comercial a un techo',
  },

  trustPoints: withTrustIcons([
    { label: 'Empresa Familiar' },
    { label: `${years} Años de Experiencia` },
    { label: `Licencia ${business.license}` },
    { label: 'Disponibles 24/7' },
  ]),

  intro: {
    eyebrow: 'Quiénes Somos',
    heading: 'Servicio de calidad, con honestidad y profesionalismo garantizados',
    body: [
      'Nuestro objetivo principal es satisfacer a nuestros clientes y brindar un servicio de la mejor calidad, con honestidad y profesionalismo garantizados.',
      'Es la pasión de nuestra empresa trabajar en proyectos que nos desafíen para poner en práctica nuestro conocimiento y experiencia. ¡Estamos aquí para echarle una mano!',
    ],
  },

  assistance: {
    eyebrow: 'Nuestra Promesa',
    heading: 'Asistencia Sin Límites',
    body: 'Nuestro equipo entiende lo importantes que son los aires acondicionados y refrigeradores en su hogar o negocio. Por eso, nuestros técnicos calificados tratarán su equipo como si fuera propio, ayudándole sin límites hasta terminar el trabajo con éxito. Lo hacemos para ganarnos su confianza y que forme parte de nuestra familia a largo plazo.',
    photoAlt: 'Técnico de Strong Services USA dando servicio a un equipo',
    learnMore: 'Más sobre nosotros',
  },

  whatWeDo: {
    eyebrow: 'Lo Que Hacemos',
    heading: 'Servicio y mantenimiento para máxima eficiencia',
    body: 'Nuestros técnicos ofrecen una variedad de servicios y contratos de mantenimiento que garantizan la máxima eficiencia de todos sus equipos de refrigeración y aire acondicionado. Además de vender equipos, también ofrecemos:',
    more: 'Esto es solo el comienzo. Nuestro equipo puede hacer más.',
    viewAll: 'Explore nuestros servicios',
    services: withIcons([
      {
        slug: 'evaluation',
        title: 'Evaluación y Diagnóstico',
        summary: 'Evaluación y diagnóstico completo de su sistema de aire y ventilación.',
      },
      {
        slug: 'inspection',
        title: 'Inspección de Equipos',
        summary: 'Inspecciones detalladas que detectan problemas a tiempo y mantienen sus equipos funcionando.',
      },
      {
        slug: 'maintenance',
        title: 'Mantenimiento Parcial Mensual',
        summary: 'Acuerdos de mantenimiento parcial mensual que mantienen sus equipos al día.',
      },
      {
        slug: 'installation',
        title: 'Servicio e Instalación',
        summary: 'Servicio e instalación profesional de equipos nuevos y existentes.',
      },
    ]),
  },

  specialties: {
    eyebrow: 'Nos Especializamos En',
    heading: 'Experiencia en enfriamiento para todo tipo de equipo',
    body: 'Somos especialistas en equipos de enfriamiento y en todos los sistemas de distribución de aire, para hogares, negocios e instalaciones industriales.',
    items: withIcons([
      { slug: 'ac-ventilation', title: 'Sistemas de Aire Acondicionado y Ventilación' },
      { slug: 'blast-freezers', title: 'Congeladores de Choque (Blast Freezers)' },
      { slug: 'cold-storage', title: 'Almacenamiento en Frío y Áreas de Preparación de Alimentos' },
      { slug: 'controlled-atmosphere', title: 'Ambientes de Atmósfera Controlada' },
      { slug: 'cooling-towers', title: 'Torres de Enfriamiento' },
      { slug: 'ice-machines', title: 'Máquinas de Hielo' },
      { slug: 'supermarket-restaurant', title: 'Reparación de Equipos de Supermercados y Restaurantes' },
      { slug: 'walk-in', title: 'Cuartos Fríos y Congeladores Walk-In' },
      { slug: 'water-chillers', title: 'Enfriadores de Agua (Chillers)' },
    ]),
  },

  credentials: {
    eyebrow: 'Nuestras Credenciales',
    heading: 'Licenciados, asegurados y listos para cualquier trabajo',
    body: 'Nuestra empresa cuenta con todas las licencias y seguros necesarios para realizar cualquier tipo de trabajo. Para nosotros, ningún trabajo es demasiado grande ni demasiado pequeño. Estamos abiertos a nuevos clientes residenciales, comerciales e industriales.',
    licenseLabel: 'Licencia Estatal',
    points: [
      'Totalmente licenciados y asegurados',
      'Residencial, comercial e industrial',
      'Ningún trabajo es demasiado grande o pequeño',
    ],
  },

  ygrene: {
    badge: 'Certificados y Aprobados',
    heading: 'Financiamiento con el Programa Ygrene',
    body: 'Nuestra empresa está certificada y aprobada para trabajar con el Programa Ygrene. Este programa ayuda a propietarios de viviendas y negocios a reemplazar sus equipos por unos nuevos y más eficientes, ofreciendo una forma más accesible de financiar sus mejoras.',
  },

  brands: {
    eyebrow: 'Marcas Con Las Que Trabajamos',
    heading: 'Capacitados en todas las marcas principales',
    list: BADGE_BRANDS,
  },

  cta: {
    heading: 'Siempre a Su Servicio',
    body: '¡Nuestro equipo está aquí para ayudarle 24/7! Somos especialistas en equipos de enfriamiento y en todos los sistemas de distribución de aire. Si necesita nuestros servicios, no dude en contactarnos.',
    callToday: 'Llame Hoy para Hacer una Cita',
    request: 'Enviar un Mensaje',
  },

  servicesPage: {
    eyebrow: 'Nuestros Servicios',
    title: 'Manteniendo la Eficiencia de Sus Equipos de A/C y Refrigeración',
    subtitle:
      'Instalación, reemplazo, reparación y mantenimiento para hogares y negocios en los condados de Miami-Dade, Broward y Palm Beach.',
    jump: { residential: 'Residencial', commercial: 'Comercial' },

    residential: {
      eyebrow: 'Residencial',
      heading: 'Instalación Nueva y Reemplazo',
      body: [
        'Si su unidad de aire acondicionado tiene más de 10 años, debería considerar reemplazarla por una nueva. Los equipos que se fabrican hoy son mucho más eficientes que el que tiene ahora, por lo que le brindarán un ambiente más agradable además de ahorros.',
        'Si necesita reemplazar su equipo, uno de nuestros técnicos capacitados puede evaluar la capacidad de su edificio y decirle si necesita una unidad del mismo tamaño, más pequeña o más grande.',
        'Una unidad que no tiene el tamaño correcto trabajará más y con menos eficiencia, lo que puede aumentar el consumo de electricidad.',
      ],
      tipLabel: 'Regla general',
      tip: 'Las unidades con más de 10 años normalmente vale la pena reemplazarlas.',
      photoAlt: 'Vista interior de un condensador de aire acondicionado residencial moderno',
      reme: {
        eyebrow: 'Le Recomendamos',
        heading: 'Purificador de Aire en Ducto REME HALO®',
        body: [
          'El purificador de aire en ducto REME HALO es la nueva generación de tecnología de calidad del aire interior (IAQ), capaz de purificar cada pulgada cúbica de aire que alcanza su sistema de aire acondicionado central.',
          'Diseñado para eliminar los riesgos del síndrome del edificio enfermo reduciendo olores y contaminantes del aire, el REME HALO es la mejor solución para purificar el aire de toda la casa o edificio. Creado para recrear el proceso natural de purificación del aire, es como traer aire fresco del exterior sin tener que abrir las ventanas.',
        ],
        effectiveLabel: 'Eficaz contra las tres categorías de contaminantes del aire interior:',
        pollutants: ['Partículas', 'Microbios', 'Gases'],
        allergy:
          'Ahora puede reducir los desencadenantes comunes de alergias causados por partículas como polen, esporas de moho, caspa de mascotas y polvo.',
      },
      ratesHeading: 'Precios inmejorables, servicio rápido',
      rates:
        'Ofrecemos precios inmejorables en nuestro servicio de instalación de A/C, con un servicio rápido y confiable en los condados de Dade, Broward y Palm Beach.',
      brandsHeading: 'Trabajamos con todas las marcas principales',
      brandsNote: 'Trane, Rheem, Lennox, Carrier, Goodman y muchas otras.',
      brands: RESIDENTIAL_BRANDS,
    },

    commercial: {
      eyebrow: 'Comercial',
      heading: 'Servicio de emergencia confiable el mismo día',
      body: [
        'Ofrecemos servicio de emergencia confiable el mismo día para que los equipos de su negocio vuelvan a funcionar correctamente, ya sea que necesite unidades nuevas o reparar las existentes.',
        'Nuestro equipo de técnicos capacitados puede llegar lo antes posible para diagnosticar y resolver su problema, y puede ayudarle con todas sus necesidades de refrigeración y aire acondicionado, incluyendo:',
      ],
      equipment: [
        'Torres de Enfriamiento',
        'Bombas de Calor',
        'Enfriadores de Agua',
        'Cuartos Fríos Walk-In',
        'Congeladores de Choque',
        'Máquinas de Hielo',
        'Vitrinas Refrigeradas',
      ],
      photoAlts: [
        'Unidad de refrigeración comercial instalada en un techo',
        'Técnicos instalando una unidad Carrier en un techo',
      ],
      pm: {
        eyebrow: 'Mantenimiento Parcial Mensual (PM)',
        heading: 'Mantenimiento que protege sus ganancias',
        body: [
          'El servicio y mantenimiento regular y continuo de sus equipos de refrigeración y aire acondicionado es esencial para el éxito y la rentabilidad de su negocio.',
          'Por eso hemos desarrollado un sistema de mantenimiento parcial mensual (PM) con muchos de nuestros clientes. A un precio razonable, puede mantener sus equipos al día: cada mes nuestros técnicos visitan su negocio y realizan el mantenimiento parcial siguiendo un plan detallado, asegurando que todas las unidades funcionen correctamente.',
        ],
        checklistTitle: 'Cada visita mensual incluye, entre otros:',
        checklist: [
          'Inspección general de todas las unidades',
          'Limpieza de las líneas de drenaje',
          'Cambio de filtros de aire',
          'Revisión de presiones y refrigerantes',
          'Limpieza externa de los equipos',
          'Cualquier problema encontrado se le comunica y se repara con su autorización',
        ],
      },
      eco: 'Estamos comprometidos con promover soluciones ecológicas y de bajo consumo energético, minimizando los costos de capital y mantenimiento.',
      brandsHeading: 'Capacitados en todas las marcas comerciales principales',
      brandsNote: 'True, Bohn/Heatcraft, Copeland, Tecumseh, Danfoss y muchas otras.',
      brands: COMMERCIAL_BRANDS,
    },

    advantages: {
      eyebrow: 'Más Ventajas',
      heading: 'Certificados para trabajar con el Programa Ygrene',
      body: 'Nuestra empresa está certificada y aprobada para trabajar con el Programa Ygrene. Este programa ayuda a propietarios de viviendas y negocios a reemplazar sus equipos por unos nuevos y más eficientes, ofreciendo una forma más accesible de financiar sus mejoras.',
    },
  },

  portfolio: {
    eyebrow: 'Nuestro Trabajo',
    heading: 'Proyectos de los que estamos orgullosos',
    subtitle:
      'Un vistazo a los trabajos de refrigeración comercial, aire acondicionado y servicio que nuestro equipo realiza en el sur de la Florida.',
    categories: ['Todos', 'Refrigeración Comercial', 'A/C Comercial', 'Torres de Enfriamiento', 'Servicio y Reparación'],
    empty: 'Aún no hay proyectos en esta categoría — vuelva pronto.',
    projects: [
      {
        id: 'rooftop-crane-lift',
        image: '/images/hero.jpg',
        title: 'Izado con Grúa de Unidad de Refrigeración',
        category: 'Refrigeración Comercial',
        description:
          'Subiendo con grúa una gran unidad de refrigeración comercial a sus rieles en el techo y guiándola a su lugar.',
      },
      {
        id: 'rooftop-condensing-unit',
        image: '/images/rooftop-unit.jpg',
        title: 'Instalación de Unidad Condensadora en Techo',
        category: 'Refrigeración Comercial',
        description:
          'Unidad condensadora comercial instalada sobre una base elevada en el techo, conectada y lista para servicio.',
      },
      {
        id: 'unit-staging',
        image: '/images/unit-sunset.jpg',
        title: 'Preparación de Unidad Comercial',
        category: 'Refrigeración Comercial',
        description: 'Una nueva unidad de refrigeración ubicada en el sitio y preparada para su instalación.',
      },
      {
        id: 'carrier-rtu',
        image: '/images/carrier-install.jpg',
        title: 'Unidad de Techo Carrier WeatherMaker',
        category: 'A/C Comercial',
        description: 'Instalación y conexión de una unidad de techo Carrier WeatherMaker para un cliente comercial.',
      },
      {
        id: 'cooling-tower-piping',
        image: '/images/cooling-tower.jpg',
        title: 'Tubería de Torres de Enfriamiento',
        category: 'Torres de Enfriamiento',
        description: 'Tuberías de suministro y retorno entre torres de enfriamiento, codificadas por color para un mantenimiento claro y seguro.',
      },
      {
        id: 'on-site-diagnosis',
        image: '/images/technician.jpg',
        title: 'Diagnóstico y Reparación en Sitio',
        category: 'Servicio y Reparación',
        description: 'Uno de nuestros técnicos diagnosticando un equipo en sitio — no nos vamos hasta dejarlo bien.',
      },
    ],
  },

  about: {
    eyebrow: 'Nosotros',
    heading: 'Contratista Profesional de Aire Acondicionado y Refrigeración',
    lead: 'Una empresa familiar de Miami con más de 30 años en el negocio.',
    body: [
      'Aquí en Strong Services USA en Miami, FL, somos una empresa familiar que ofrece servicios profesionales de refrigeración y aire acondicionado. Nuestros fundadores llevan más de 30 años en este negocio.',
      'Disfrutamos los desafíos de nuestros proyectos porque nos permiten aplicar nuestra experiencia. Nuestro equipo se esfuerza por brindar satisfacción haciendo lo mejor posible, asegurando un trabajo honesto y profesional.',
    ],
    photoAlt: 'Unidad de refrigeración comercial lista para instalar al atardecer',
    valuesEyebrow: 'Lo Que Nos Impulsa',
    valuesHeading: 'Nuestra forma de trabajar',
    values: [
      {
        title: 'Empresa Familiar',
        description: 'Tratamos a cada cliente como parte de la familia y nos ganamos esa confianza a largo plazo.',
      },
      {
        title: 'Honestidad y Profesionalismo',
        description: 'Recomendaciones honestas y trabajo profesional, garantizados en cada trabajo.',
      },
      {
        title: 'Nos Gustan los Retos',
        description: 'Disfrutamos los proyectos que nos desafían y ponen en práctica nuestro conocimiento.',
      },
      {
        title: 'Hasta Terminar el Trabajo',
        description: 'Nuestros técnicos tratan su equipo como propio y no se van hasta dejarlo bien.',
      },
    ],
    servicesHeading: 'Nuestros Servicios',
    servicesIntro: 'Nuestro equipo ofrece:',
    services: [
      'Evaluación y Diagnóstico de Sistemas de Aire y Ventilación',
      'Inspección de Equipos',
      'Acuerdos de Mantenimiento Parcial Mensual',
      'Ventas',
      'Servicio e Instalación',
    ],
    servicesMore: 'Esto es solo parte de lo que podemos hacer.',
    specialistsHeading: 'Somos Especialistas En',
    specialists: [
      'Todos los Sistemas de Distribución de Aire',
      'Torres de Enfriamiento',
      'Máquinas de Hielo',
      'Cuartos Fríos Walk-In',
      'Congeladores Walk-In',
      'Enfriadores de Agua',
    ],
    ygrene: {
      heading: 'Certificados para Trabajar con el Programa Ygrene',
      body: 'El Programa Ygrene ayuda a propietarios residenciales y comerciales a obtener equipos nuevos y más eficientes en lugar de los equipos antiguos que tienen. Nuestra empresa está certificada y aprobada para trabajar con este programa y ayudarle con formas más accesibles de actualizar sus equipos.',
    },
    credentials: {
      years: 'Años en el Negocio',
      license: 'Licencia Estatal',
      area: 'Condados Atendidos',
      areaValue: '3',
    },
    cta: {
      heading: 'Contáctenos',
      body: 'Esperamos saber de usted. Si tiene alguna pregunta o inquietud, no dude en comunicarse con nosotros.',
    },
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Llámenos en Cualquier Momento para Soluciones de A/C y Refrigeración',
    subtitle: 'Servicio en los condados de Dade, Broward y Palm Beach — las 24 horas, los 7 días de la semana.',
    phone: 'Teléfono',
    email: 'Correo',
    address: 'Dirección',
    hours: 'Horario',
    hoursValue: 'Abierto 24/7',
    mapTitle: 'Mapa a Strong Services USA',
  },

  form: {
    heading: 'Envíenos un mensaje',
    fullName: 'Nombre completo',
    fullNamePlaceholder: 'Juan Pérez',
    email: 'Correo electrónico',
    emailPlaceholder: 'correo@ejemplo.com',
    phone: 'Teléfono',
    phonePlaceholder: '(305) 000-0000',
    phoneInvalid: 'Ingrese un número de teléfono válido de 10 dígitos.',
    emailInvalid: 'Ingrese un correo electrónico válido, como correo@ejemplo.com.',
    didYouMean: '¿Quiso decir',
    company: 'Empresa',
    companyPlaceholder: 'Nombre de su negocio',
    model: 'Modelo / Producto',
    modelPlaceholder: 'ej. cuarto frío, unidad de techo',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntenos sobre su equipo y lo que necesita…',
    optional: 'opcional',
    send: 'Enviar Mensaje',
    sending: 'Enviando…',
    success: '¡Gracias! Su mensaje fue enviado — le responderemos pronto.',
    error: 'Lo sentimos, hubo un problema al enviar su mensaje. Inténtelo de nuevo o llámenos.',
    callNote: '¿Necesita ayuda de inmediato? Llámenos — estamos disponibles 24/7.',
  },

  footer: {
    siteLinks: 'Enlaces',
    getInTouch: '¡Contáctenos!',
    serviceArea: 'Área de Servicio',
    followUs: 'Síganos en Facebook',
    rightsReserved: 'Todos los derechos reservados.',
    license: 'Licencia #',
    available: 'Disponibles 24/7',
  },
}

export const content = { en, es }

export const languageNames = { en: 'English', es: 'Español' }
