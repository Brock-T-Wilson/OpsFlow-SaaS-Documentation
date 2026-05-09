import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpsFlow Documentation',
  tagline: 'Enterprise Workforce Operations Platform',
  favicon: 'img/favicon.png'

  future: {
    v4: true,
  },

  url: 'https://your-site-url.com',
  baseUrl: '/',

  organizationName: 'Brock-T-Wilson',
  projectName: 'OpsFlow-SaaS-Documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/opsflow-social-card.jpg',

    navbar: {
      title: 'OpsFlow',
      logo: {
        alt: 'OpsFlow Logo',
        src: 'img/opsflow-logo.png',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentation',
        },

        {
          to: '/dashboard',
          label: 'Dashboard',
          position: 'left',
        },

        {
          href: 'https://github.com/Brock-T-Wilson/OpsFlow-SaaS-Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/introduction/welcome',
            },
          ],
        },

        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Brock-T-Wilson/OpsFlow-SaaS-Documentation',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} OpsFlow Documentation.`,
    },

    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;