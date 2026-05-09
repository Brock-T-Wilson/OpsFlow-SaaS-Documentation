# User Management

Administrators can manage users, permissions, departments,
and account status from the User Management console.

## Open User Management

1. Open **Administration > Users**.
2. Search for a user account.
3. Select the user profile.

## Administrative Actions

Administrators can:

- reset passwords
- disable accounts
- assign roles
- configure departments
- manage MFA status
- review account activity

## Account Status Types

| Status | Description |
|---|---|
| Active | User can access OpsFlow |
| Suspended | Temporary access restriction |
| Disabled | User account fully disabled |

## Best Practices

- Disable inactive accounts immediately.
- Review permissions quarterly.
- Enforce MFA for privileged users.

## Role-Based Access Control Hierarchy

The following diagram illustrates how OpsFlow assigns permissions and operational access across administrative and workforce roles.

```mermaid
%%{init: {
  "theme": "base",
  "flowchart": {
    "nodeSpacing": 45,
    "rankSpacing": 70,
    "padding": 20
  },
  "themeVariables": {
    "background": "#11100d",
    "primaryColor": "#1b1813",
    "primaryTextColor": "#f5efe3",
    "primaryBorderColor": "#d4aa57",
    "lineColor": "#d4aa57",
    "secondaryColor": "#2a241a",
    "tertiaryColor": "#11100d",
    "fontFamily": "Inter, Arial",
"fontSize": "18px"
  }
}}%%

flowchart LR

    A[System Administrator] --> B[Operations Manager]
    B --> C[Department Supervisor]
    C --> D[Standard Employee]

    A --> E[Security Administrator]
    E --> F[Audit & Compliance Reviewer]

    B --> G[Scheduling Coordinator]
    B --> H[Incident Response Lead]

    D --> I[Read-Only Workforce Access]

    A --> J{Privileged Actions}
    J --> K[User Provisioning]
    J --> L[MFA Policy Management]
    J --> M[SSO Configuration]

    classDef default fill:#1b1813,stroke:#d4aa57,color:#f5efe3,stroke-width:1.5px;
    classDef decision fill:#2a241a,stroke:#d4aa57,color:#f5efe3,stroke-width:2px;

    class J decision;
```

## Related Articles

- Roles Overview
- MFA Configuration
- Security Policies