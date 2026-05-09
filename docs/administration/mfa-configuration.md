# MFA Configuration

Multi-factor authentication (MFA) provides additional account security
for privileged operations and administrative access.

## Supported MFA Methods

OpsFlow supports:

- authenticator applications
- SMS verification
- backup recovery codes

## Enable MFA

1. Open **Settings > Security**.
2. Select **Enable MFA**.
3. Scan the QR code using an authenticator application.
4. Enter the verification code.
5. Save changes.

## Best Practices

- Require MFA for administrators.
- Store recovery codes securely.
- Review MFA enrollment status regularly.

## Troubleshooting

### Invalid Verification Code

Verify that automatic device time synchronization is enabled.

## Multi-Factor Authentication Workflow

The following workflow demonstrates how OpsFlow validates user credentials, applies MFA policies, and enforces conditional access security controls.

```mermaid
%%{init: {
  "theme": "base",
  "flowchart": {
    "nodeSpacing": 70,
    "rankSpacing": 110,
    "padding": 25
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

flowchart TD

    A[User Login Attempt] --> B[Credential Validation]

    B --> C{Credentials Valid?}

    C -->|No| D[Authentication Failed]
    D --> E[Generate Security Alert]

    C -->|Yes| F[MFA Challenge]

    F --> G{MFA Verified?}

    G -->|No| H[Retry Attempt]
    H --> I{Maximum Attempts Reached?}

    I -->|Yes| J[Account Lockout]
    I -->|No| F

    G -->|Yes| K[Conditional Access Check]

    K --> L{Trusted Device & Location?}

    L -->|No| M[Additional Verification]
    M --> N[Security Team Review]

    L -->|Yes| O[Access Granted]

    N --> O

    classDef default fill:#1b1813,stroke:#d4aa57,color:#f5efe3,stroke-width:1.5px;
    classDef decision fill:#2a241a,stroke:#d4aa57,color:#f5efe3,stroke-width:2px;

    class C,G,I,L decision;
```

## Related Articles

- Security Policies
- User Management
- Password Requirements