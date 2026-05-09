---
title: Slack Integration
---

# Slack Integration

The Slack integration allows OpsFlow to send operational alerts, approval updates, and incident notifications directly to configured Slack channels.

## Use Cases

- Incident escalation alerts
- Work order status updates
- Approval request notifications
- Scheduling change reminders
- Workflow failure alerts

## Before You Begin

You must have:

- Administrator permissions in OpsFlow
- Permission to install apps in Slack
- Access to the target Slack workspace

## Connect Slack

1. Open **Administration > Integrations**.
2. Select **Slack**.
3. Click **Connect Workspace**.
4. Authorize OpsFlow in Slack.
5. Choose the channels for operational alerts.
6. Select **Save Integration**.

## Notification Events

| Event | Example Channel |
|---|---|
| Critical incident submitted | #operations-alerts |
| Work order overdue | #maintenance |
| Approval request pending | #supervisor-approvals |
| Workflow failed | #opsflow-admin |

## Best Practices

- Use dedicated channels for high-priority alerts.
- Avoid sending all notifications to one channel.
- Review notification rules monthly.
- Limit critical alerts to supervisors and operations managers.

## Troubleshooting

### Slack Workspace Not Connecting

Verify that you have permission to install workspace applications.

### Notifications Not Appearing

Confirm that the selected Slack channel still exists and that OpsFlow has permission to post messages.

## Related Articles

- Notification Actions
- Escalation Rules
- API Documentation