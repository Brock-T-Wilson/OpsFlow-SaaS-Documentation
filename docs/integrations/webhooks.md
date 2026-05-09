---
title: Webhooks Integration
---

# Webhooks Integration

OpsFlow webhooks allow external systems to receive real-time event notifications when operational activities occur within the platform.

## Supported Events

OpsFlow can trigger webhook events for:

- Incident creation
- Work order updates
- Approval status changes
- Workflow failures
- User provisioning events
- Security alerts

## Before You Begin

You must have:

- Administrator permissions
- A public HTTPS endpoint
- API integration access enabled

## Configure Webhooks

1. Open **Administration > Integrations**.
2. Select **Webhooks**.
3. Select **Create Webhook**.
4. Enter the destination endpoint URL.
5. Choose subscribed event types.
6. Configure authentication headers if required.
7. Select **Save Webhook**.

## Example Payload

```json
{
  "eventType": "incident.created",
  "incidentId": "INC-10452",
  "severity": "critical",
  "createdBy": "operations.manager",
  "timestamp": "2026-01-15T14:22:11Z"
}