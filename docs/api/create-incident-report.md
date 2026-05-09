# Create Incident Report

Submit a new operational or safety incident report.

## Endpoint

```http
POST /incident-reports
```

## Example Request

```bash
curl -X POST "https://api.opsflow.io/v1/incident-reports" \
  -H "Authorization: Bearer YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "severity": "High",
    "department": "Operations",
    "description": "Forklift collision in loading area."
  }'
```

## Example Response

```json
{
  "incidentId": "INC-8821",
  "status": "Submitted"
}
```

## Request Fields

| Field | Type | Required |
|---|---|---|
| severity | string | Yes |
| department | string | Yes |
| description | string | Yes |

## Related Articles

- Incident Reporting
- Authentication
- Error Handling