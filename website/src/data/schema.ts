/**
 * JSON-LD schema generators per ~/clout-website/seo-aeo-research/01-technical-seo.md.
 * Output is stringified for inline <script type="application/ld+json"> injection.
 */

import { SITE, STATES } from './site';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'Organization'],
    '@id': `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: SITE.alternateName,
    parentOrganization: {
      '@type': 'Organization',
      name: SITE.parentOrg.name,
      url: SITE.parentOrg.url,
    },
    url: SITE.url,
    logo: `${SITE.url}/brand/logo-primary.svg`,
    image: `${SITE.url}/brand/logo-primary.svg`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE.hq,
    },
    areaServed: STATES.map((s) => ({ '@type': 'State', name: s.name })),
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'NMLS',
      value: SITE.nmlsId,
    },
    sameAs: [SITE.nmlsUrl, SITE.social.linkedin, SITE.social.facebook],
    knowsAbout: [
      'Non-Qualified Mortgage',
      'DSCR Loan',
      'Bank Statement Loan',
      '1099 Mortgage',
      'Foreign National Mortgage',
      'Asset Depletion',
      'Wholesale Mortgage Lending',
      'Real Estate Investor Lending',
    ],
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}#hq`,
    name: SITE.name,
    parentOrganization: { '@id': `${SITE.url}#organization` },
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: { '@type': 'PostalAddress', ...SITE.hq },
    areaServed: STATES.map((s) => ({ '@type': 'State', name: s.name })),
  };
}

export function breadcrumbSchema(
  trail: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export type MortgageLoanSchemaInput = {
  name: string;
  description: string;
  loanType: string;
  loanTerm?: string[]; // e.g. ['P30Y', 'P40Y']
  interestRateMin?: number;
  interestRateMax?: number;
  amountMin?: number;
  amountMax?: number;
  downPaymentMinPercent?: number;
  url: string;
  areaServed?: string[]; // state abbreviations
};

export function mortgageLoanSchema(input: MortgageLoanSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MortgageLoan',
    name: input.name,
    description: input.description,
    loanType: input.loanType,
    ...(input.loanTerm && { loanTerm: input.loanTerm }),
    ...(input.interestRateMin && input.interestRateMax && {
      interestRate: {
        '@type': 'QuantitativeValue',
        minValue: input.interestRateMin,
        maxValue: input.interestRateMax,
        unitText: 'APR percentage',
      },
    }),
    ...(input.amountMin && input.amountMax && {
      amount: {
        '@type': 'MonetaryAmount',
        minValue: input.amountMin,
        maxValue: input.amountMax,
        currency: 'USD',
      },
    }),
    ...(input.downPaymentMinPercent && {
      downPayment: {
        '@type': 'MonetaryAmount',
        minValue: input.downPaymentMinPercent,
        unitText: 'percent of property value',
      },
    }),
    lender: { '@id': `${SITE.url}#organization` },
    url: input.url,
    areaServed: (input.areaServed ?? STATES.map((s) => s.abbr)).map((abbr) => {
      const state = STATES.find((s) => s.abbr === abbr);
      return { '@type': 'State', name: state?.name ?? abbr };
    }),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  reviewedByName?: string;
  reviewedByNmls?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    publisher: { '@id': `${SITE.url}#organization` },
    ...(input.authorName && {
      author: { '@type': 'Person', name: input.authorName },
    }),
    ...(input.reviewedByName && {
      reviewedBy: {
        '@type': 'Person',
        name: input.reviewedByName,
        ...(input.reviewedByNmls && {
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'NMLS',
            value: input.reviewedByNmls,
          },
        }),
      },
    }),
  };
}

/** Serialize a schema object for inline injection. */
export function jsonLd(obj: unknown): string {
  return JSON.stringify(obj);
}
