# Rate Limits

Rate limits help maintain API reliability and platform stability.

## Default Limits

| Endpoint Type | Requests Per Minute |
|---|---|
| Standard API Requests | 120 |
| Reporting Endpoints | 30 |
| Authentication Requests | 20 |

## Rate Limit Response

```json
{
  "error": "rate_limit_exceeded",
  "message": "API request limit exceeded. Retry after 60 seconds."
}
```

## Best Practices

- Cache frequently requested data.
- Avoid unnecessary polling.
- Implement exponential backoff retries.

## Related Articles

- Authentication
- Error Handling