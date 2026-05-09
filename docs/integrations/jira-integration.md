---
title: Jira Integration
---

# Jira Integration

The Jira integration allows OpsFlow to synchronize incidents, work orders, and operational tasks with Jira projects for centralized issue tracking and workflow management.

## Use Cases

- Convert incidents into Jira issues
- Synchronize operational work orders
- Track escalation workflows
- Manage corrective action tasks
- Improve cross-team collaboration

## Before You Begin

You must have:

- Administrator permissions in OpsFlow
- Jira administrator or project management access
- An active Jira workspace
- API integration permissions enabled

## Configure Jira Integration

1. Open **Administration > Integrations**.
2. Select **Jira**.
3. Enter the Jira workspace URL.
4. Generate a Jira API token.
5. Paste the API token into OpsFlow.
6. Select the target Jira project.
7. Configure synchronization rules.
8. Select **Save Integration**.

## Synchronization Events

| OpsFlow Event | Jira Action |
|---|---|
| Critical incident created | Create Jira issue |
| Work order escalated | Update Jira priority |
| Corrective action assigned | Create Jira task |
| Incident resolved | Close Jira issue |

## Best Practices

- Use dedicated Jira projects for operational workflows.
- Restrict synchronization permissions to administrators.
- Review issue mappings regularly.
- Configure escalation priorities carefully.

## Troubleshooting

### Jira Authentication Failed

Verify that the Jira API token is active and correctly configured.

### Issues Not Synchronizing

Confirm that the Jira project permissions allow issue creation and updates.

### Invalid Project Configuration

Verify that the selected Jira project exists and supports issue synchronization.

## Related Articles

- Incident Reporting
- Approval Workflows
- Workflow Automation