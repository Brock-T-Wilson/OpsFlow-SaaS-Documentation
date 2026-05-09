---
title: ServiceNow Integration
---

# ServiceNow Integration

The ServiceNow integration allows OpsFlow to synchronize operational incidents, work orders, and escalation activities with ServiceNow IT service management workflows.

## Use Cases

- Synchronize critical incidents
- Escalate operational tickets
- Track corrective actions
- Share workflow status updates
- Improve cross-platform operational visibility

## Before You Begin

You must have:

- Administrator permissions in OpsFlow
- ServiceNow administrative access
- API integration permissions enabled
- An active ServiceNow instance

## Configure ServiceNow Integration

1. Open **Administration > Integrations**.
2. Select **ServiceNow**.
3. Enter the ServiceNow instance URL.
4. Generate API credentials in ServiceNow.
5. Paste the credentials into OpsFlow.
6. Configure synchronization rules.
7. Select the target incident queues.
8. Select **Save Integration**.

## Synchronization Events

| OpsFlow Event | ServiceNow Action |
|---|---|
| Critical incident created | Create ServiceNow incident |
| Work order escalated | Update incident priority |
| Approval workflow completed | Update ticket status |
| Corrective action assigned | Generate ServiceNow task |

## Best Practices

- Restrict integration access to administrators.
- Separate operational incidents from security incidents.
- Review synchronization mappings regularly.
- Enable audit logging for integration activity.

## Troubleshooting

### ServiceNow Authentication Failed

Verify that the configured API credentials are active and valid.

### Incident Synchronization Delayed

Confirm that the ServiceNow API endpoint is reachable and not rate-limited.

### Incorrect Queue Assignment

Verify that the configured ServiceNow incident queues exist and are properly mapped.

## Related Articles

- Incident Reporting
- Workflow Automation
- Audit Logs