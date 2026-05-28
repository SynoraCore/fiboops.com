export type Locale = 'pt-BR' | 'en' | 'es';

type Messages = {
  nav: {
    ecosystem: string;
    infrastructure: string;
    technology: string;
    origin: string;
    contact: string;
    cta: string;
  };
  hero: {
    h1: string;
    subtitle: string;
    text: string;
    cta1: string;
    cta2: string;
    cta3: string;
    microcopy: string;
  };
};

export const messages: Record<Locale, Messages> = {
  'pt-BR': {
    nav: {
      ecosystem: 'Ecossistema',
      infrastructure: 'Infraestrutura',
      technology: 'Tecnologia',
      origin: 'Origem',
      contact: 'Contato',
      cta: 'Entrar em Contato'
    },
    hero: {
      h1: 'Synora by Fiboops',
      subtitle:
        'Ecossistema tecnológico baseado em inteligência artificial para automação, workflows inteligentes, mediação digital e infraestrutura operacional escalável.',
      text:
        'A Synora integra IA, automação e dados em uma única plataforma para transformar processos complexos em operações digitais inteligentes.',
      cta1: 'Conheça o Ecossistema',
      cta2: 'Explorar Soluções',
      cta3: 'Entrar em Contato',
      microcopy: 'Enterprise-ready • Modular • Cloud-first • Governance by design'
    }
  },
  en: {
    nav: {
      ecosystem: 'Ecosystem',
      infrastructure: 'Infrastructure',
      technology: 'Technology',
      origin: 'Origin',
      contact: 'Contact',
      cta: 'Contact Us'
    },
    hero: {
      h1: 'Synora by Fiboops',
      subtitle:
        'An AI-powered technology ecosystem for intelligent automation, enterprise workflows, digital mediation, and scalable operational infrastructure.',
      text:
        'Synora unifies AI, automation, and data into a single platform—turning complex processes into intelligent digital operations.',
      cta1: 'Discover the Ecosystem',
      cta2: 'Explore Solutions',
      cta3: 'Contact Us',
      microcopy: 'Enterprise-ready • Modular • Cloud-first • Governance by design'
    }
  },
  es: {
    nav: {
      ecosystem: 'Ecosistema',
      infrastructure: 'Infraestructura',
      technology: 'Tecnología',
      origin: 'Origen',
      contact: 'Contacto',
      cta: 'Contactar'
    },
    hero: {
      h1: 'Synora by Fiboops',
      subtitle:
        'Ecosistema tecnológico basado en IA para automatización inteligente, workflows empresariales, mediación digital e infraestructura operativa escalable.',
      text:
        'Synora integra IA, automatización y datos en una única plataforma para transformar procesos complejos en operaciones digitales inteligentes.',
      cta1: 'Conocer el Ecosistema',
      cta2: 'Explorar Soluciones',
      cta3: 'Contactar',
      microcopy: 'Enterprise-ready • Modular • Cloud-first • Governance by design'
    }
  }
};

