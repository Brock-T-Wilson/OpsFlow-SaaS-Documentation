import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/welcome',
      ],
    },

    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/create-account',
        'getting-started/organization-setup',
        'getting-started/dashboard-tour',
      ],
    },

    {
      type: 'category',
      label: 'Roles & Permissions',
      items: [
        'roles-permissions/roles-overview',
        'roles-permissions/administrator-permissions',
        'roles-permissions/supervisor-permissions',
      ],
    },

    {
      type: 'category',
      label: 'User Guides',
      items: [
        'user-guides/create-work-orders',
        'user-guides/incident-reporting',
        'user-guides/shift-scheduling',
      ],
    },

    {
      type: 'category',
      label: 'Workflow Automation',
      items: [
        'workflow-automation/automation-overview',
        'workflow-automation/approval-workflows',
        'workflow-automation/escalation-rules',
        'workflow-automation/notification-actions',
      ],
    },

    {
      type: 'category',
      label: 'Administration',
      items: [
        'administration/user-management',
        'administration/audit-logs',
        'administration/mfa-configuration',
        'administration/security-policies',
      ],
    },

    {
      type: 'category',
      label: 'API Documentation',
      items: [
        'api/api-overview',
        'api/authentication',
        'api/rate-limits',
        'api/error-handling',
        'api/get-work-orders',
        'api/create-incident-report',
      ],
    },

    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/login-issues',
        'troubleshooting/permission-errors',
        'troubleshooting/notification-delays',
        'troubleshooting/api-authentication-errors',
        'troubleshooting/report-generation-failures',
      ],
    },

    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/version-1-0',
        'release-notes/version-1-1',
        'release-notes/known-issues',
        'release-notes/upcoming-features',
      ],
    },

    {
      type: 'category',
      label: 'FAQ',
      items: [
        'faq/account-questions',
        'faq/permissions-questions',
        'faq/api-questions',
        'faq/reporting-questions',
      ],
    },
  ],
};

export default sidebars;