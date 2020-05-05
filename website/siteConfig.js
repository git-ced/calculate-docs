/**
 * Copyright (c) 2017-present, Facebook, Inc.
 */

// List of projects/orgs using your project for the users page.
const users = [];

const siteConfig = {
  title: 'Calculate',
  tagline: 'Fast, lightweight, extensible.',
  url: '#', // TODO Add real url
  baseUrl: '/',
  projectName: 'calculate',
  organizationName: 'git-ced',
  headerLinks: [ // TODO Add real links
    { doc: 'getting-started/installation', label: 'Docs' },
    { page: 'help', label: 'Use Cases' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
  ],
  users,
  headerIcon: 'img/calculate-logo-light.svg',
  footerIcon: 'img/calculate-logo-light.svg',
  favicon: 'img/calculate-logo-light.svg',
  colors: {
    primaryColor: '#0D0820',
    secondaryColor: '#DBD8E7',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Calculate`,
  highlight: {
    theme: 'androidstudio',
    defaultLang: 'javascript',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  docsSideNavCollapsible: true,
  enableUpdateBy: true,
  enableUpdateTime: true,
  repoUrl: 'https://github.com/git-ced/calculate',
};

module.exports = siteConfig;
