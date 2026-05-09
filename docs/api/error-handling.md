# Error Handling

OpsFlow APIs return standardized HTTP status codes and JSON error responses.

## Common Error Codes

| Status Code | Description |
|---|---|
| 400 | Invalid request |
| 401 | Authentication required |
| 403 | Insufficient permissions |
| 404 | Resource not found |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

## Example Error Response

```json
{
  "error": "invalid_request",
  "message": "Required field departmentId is missing."
}
```

## Troubleshooting

### 401 Unauthorized

Verify that the bearer token is valid and has not expired.

### 429 Rate Limit Exceeded

Retry requests after the cooldown period.

## Related Articles

- Authentication
- Rate Limits