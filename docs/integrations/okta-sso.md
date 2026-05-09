---
title: Okta SSO Integration
---

# Okta SSO Integration

The Okta SSO integration allows organizations to authenticate OpsFlow users through a centralized identity provider.

## Use Cases

- Centralized user authentication
- Enforced MFA policies
- Single sign-on for enterprise users
- Automated access control
- Reduced password management overhead

## Before You Begin

You must have:

- Administrator permissions in OpsFlow
- Okta administrator access
- An active OpsFlow enterprise workspace
- SSO permissions enabled for your organization

## Configure Okta SSO

1. Open **Administration > Integrations**.
2. Select **Okta SSO**.
3. Copy the OpsFlow **ACS URL** and **Entity ID**.
4. Open the Okta Admin Console.
5. Create a new SAML application.
6. Paste the OpsFlow ACS URL and Entity ID into the Okta SAML settings.
7. Copy the Okta **Metadata URL**.
8. Return to OpsFlow and paste the Metadata URL.
9. Select **Test Connection**.
10. Select **Enable SSO**.

## SSO Configuration Fields

| Field | Description |
|---|---|
| ACS URL | Endpoint that receives SAML authentication responses |
| Entity ID | Unique identifier for the OpsFlow SAML application |
| Metadata URL | Okta-hosted identity provider metadata |
| Name ID Format | User identifier format passed from Okta to OpsFlow |

## Best Practices

- Require MFA for all administrator accounts.
- Test SSO with a non-critical user before enforcing organization-wide.
- Keep at least one backup administrator account available.
- Review login audit logs after enabling SSO.

## Troubleshooting

### SSO Login Fails

Verify that the ACS URL and Entity ID match exactly between OpsFlow and Okta.

### User Cannot Access OpsFlow

Confirm that the user is assigned to the OpsFlow application in Okta.

### Metadata URL Not Accepted

Verify that the metadata URL is public and accessible.

## Related Articles

- MFA Configuration
- Security Policies
- User Management