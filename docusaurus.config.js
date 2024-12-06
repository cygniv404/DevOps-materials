// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOps-materials',
  tagline: 'Learn DevOps',
  favicon: 'img/favicon.ico',
  url: 'https://devops.Ahmed Riahi.dev',
  baseUrl: '/',
  organizationName: 'Ahmed Riahi', 
  projectName: 'DevOps-materials',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/cygniv404/DevOps-material/edit/main/',
        },
        googleTagManager: {
          containerId: 'GTM-KWKGT69C',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: 'bc32ca764f4327f836b2aabf20c05424',
        indexName: 'devops-material',
        appId: 'ZYPCM1MC1B', // Ensure you have the correct App ID if using a multi-application setup
        contextualSearch: true, // Optional: contextual search
        // Optional: see doc section below
        // searchParameters: {},
        //... other algolia configuration
      },
      navbar: {
        title: 'DevOps-materials',
        items: [
          {
            href: 'https://github.com/cygniv404/DevOps-materials',
            label: 'GitHub',
            position: 'right',
          }, 
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Ahmed Riahi`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
