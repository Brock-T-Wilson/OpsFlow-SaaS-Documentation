---
title: Known Issues
---

# Known Issues

The following issues are currently being monitored or investigated by the OpsFlow platform team.

---

## Dashboard Performance Delays

### Description

Operational dashboards may refresh slowly during periods of high workflow activity.

### Affected Areas

- Incident monitoring widgets
- Workforce scheduling metrics
- Approval workflow summaries

### Status

Monitoring

### Workaround

Refresh the dashboard manually or reduce active widget filtering complexity.

---

## Delayed Notification Delivery

### Description

Notification delivery delays may occur during periods of increased escalation activity.

### Affected Integrations

- Slack
- Microsoft Teams
- Email notifications

### Status

Investigating

### Workaround

Review escalation queues manually during high-volume operational events.

---

## Large Audit Log Export Delays

### Description

Audit log exports exceeding large record thresholds may experience timeout delays.

### Affected Areas

- Compliance reporting
- Security audit exports
- Workflow activity exports

### Status

Scheduled for optimization in a future release.

### Workaround

Export smaller date ranges when generating audit reports.

---

## Mobile Dashboard Rendering Inconsistencies

### Description

Some dashboard widgets may not align correctly on smaller mobile devices.

### Affected Areas

- Operational analytics widgets
- Incident overview panels
- Workflow monitoring cards

### Status

In Progress

### Workaround

Use landscape orientation or desktop view for complex dashboards.

---

## Webhook Retry Delays

### Description

Webhook retries may process slower than expected during external endpoint failures.

### Affected Areas

- Webhook integrations
- Third-party synchronization workflows

### Status

Monitoring

### Workaround

Verify endpoint availability and retry failed webhook deliveries manually if required.

---

## Recently Resolved Issues

| Issue | Resolution Version |
|---|---|
| Approval workflow retry inconsistency | Version 1.1 |
| Incorrect dashboard workload totals | Version 1.1 |
| Mobile navigation rendering bug | Version 1.1 |
| Delayed escalation timing logic | Version 1.1 |

---

## Support Escalation

Administrators experiencing critical operational issues should contact the OpsFlow platform support team for escalation assistance.