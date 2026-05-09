---
title: Microsoft Teams Integration
---

# Microsoft Teams Integration

The Microsoft Teams integration allows OpsFlow to deliver operational notifications, approval requests, and incident updates directly to Microsoft Teams channels.

## Use Cases

- Incident escalation notifications
- Approval workflow alerts
- Work order status updates
- Shift scheduling reminders
- Compliance review notifications

## Before You Begin

You must have:

- Administrator permissions in OpsFlow
- Access to a Microsoft Teams workspace
- Permission to install Teams applications
- Integration management permissions enabled

## Configure Microsoft Teams

1. Open **Administration > Integrations**.
2. Select **Microsoft Teams**.
3. Select **Connect Workspace**.
4. Sign in using a Microsoft administrator account.
5. Select the target Teams workspace.
6. Choose the channels for notifications.
7. Select **Save Integration**.

## Notification Events

| Event | Example Channel |
|---|---|
| Critical incident submitted | Operations Alerts |
| Work order overdue | Maintenance Team |
| Approval request pending | Supervisor Reviews |
| Workflow automation failure | Platform Administration |

## Best Practices

- Use separate channels for operational alerts and approvals.
- Restrict administrative notifications to authorized personnel.
- Review notification rules quarterly.
- Configure escalation alerts for critical incidents only.

## Troubleshooting

### Teams Workspace Not Connecting

Verify that the Microsoft account has permission to install Teams applications.

### Notifications Not Appearing

Confirm that the selected Teams channel still exists and that OpsFlow has permission to send notifications.

### Authentication Failed

Verify that the Microsoft tenant allows third-party enterprise integrations.

## Related Articles

- Workflow Automation
- Notification Actions
- Incident Reporting