# Authentication

OpsFlow APIs use bearer token authentication.

## Generate API Key

1. Open **Administration > API Access**.
2. Select **Generate API Key**.
3. Assign API permissions.
4. Save the generated token securely.

## Authorization Header

```http
Authorization: Bearer YOUR_API_TOKEN
```

## Example Request

```bash
curl -X GET "https://api.opsflow.io/v1/work-orders" \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## Security Recommendations

- Rotate API keys regularly.
- Avoid embedding tokens in client-side applications.
- Restrict API permissions to minimum required access.

## Related Articles

- API Overview
- Rate Limits
- Error Handling