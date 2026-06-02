import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'System Admin',
      collapsible: true,
      items: ['system-admin/overall-workflow'],
    },
    {
      type: 'category',
      label: 'State Admin',
      collapsible: true,
      items: ['state-admin/overall-workflow'],
    },
  ],
};

export default sidebars;
