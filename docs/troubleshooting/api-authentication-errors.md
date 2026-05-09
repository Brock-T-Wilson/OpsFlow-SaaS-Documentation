# API Authentication Errors

Authentication errors occur when API requests contain invalid
or expired credentials.

## Example Error Response

```json
{
  "error": "authentication_failed",
  "message": "Bearer token invalid or expired."
}
```

## Common Causes

Authentication failures may occur because:

- bearer tokens expired
- API keys were revoked
- authorization headers are incorrectly formatted

## Resolution

1. Generate a new API key if necessary.
2. Verify the Authorization header format.
3. Confirm the token has not expired.

## Correct Authorization Format

```http
Authorization: Bearer YOUR_API_TOKEN
```

## Related Articles

- Authentication
- Rate Limits
- Error Handling