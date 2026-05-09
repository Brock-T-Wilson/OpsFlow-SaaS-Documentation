# Get Work Orders

Retrieve a list of operational work orders.

## Endpoint

```http
GET /work-orders
```

## Example Request

```bash
curl -X GET "https://api.opsflow.io/v1/work-orders" \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

## Example Response

```json
{
  "data": [
    {
      "workOrderId": "WO-1042",
      "department": "Maintenance",
      "priority": "High",
      "status": "Open"
    }
  ]
}
```

## Response Fields

| Field | Type | Description |
|---|---|---|
| workOrderId | string | Unique work order identifier |
| department | string | Assigned department |
| priority | string | Work order priority |
| status | string | Current work order status |

## Related Articles

- Authentication
- Error Handling