# Create Work Orders

Work orders are used to track operational tasks, maintenance requests,
and department activities within OpsFlow.

## Before You Begin

You must have:

- Employee permissions or higher
- Access to the Work Orders module

## Create a Work Order

1. Open **Operations > Work Orders**.
2. Select **New Work Order**.
3. Enter a work order title.
4. Select a department.
5. Assign a priority level.
6. Add supporting notes or attachments.
7. Select **Submit Work Order**.

## Priority Levels

| Priority | Description |
|---|---|
| Low | Non-urgent operational tasks |
| Medium | Standard operational work |
| High | Time-sensitive operational issues |
| Critical | Immediate operational disruption |

## Expected Result

After submission, the work order is routed to the assigned supervisor for review.

## Troubleshooting

### Unable to Submit Work Order

Verify that all required fields are completed before submitting.

### Missing Department Options

Department visibility is controlled by administrator permissions.

## Work Order Lifecycle Workflow

The following workflow illustrates how OpsFlow routes work orders from initial submission through approval, assignment, resolution, and archival.

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "background": "#11100d",
    "primaryColor": "#1b1813",
    "primaryTextColor": "#f5efe3",
    "primaryBorderColor": "#d4aa57",
    "lineColor": "#d4aa57",
    "secondaryColor": "#2a241a",
    "tertiaryColor": "#11100d",
    "fontFamily": "Inter, Arial"
  }
}}%%

flowchart TD
    A[Work Order Submitted] --> B[Supervisor Review]

    B --> C{Priority Level}

    C -->|Low Priority| D[Queue Assignment]
    C -->|High Priority| E[Immediate Technician Dispatch]

    D --> F[Technician Assignment]
    E --> F

    F --> G[Work In Progress]

    G --> H{Additional Approval Required?}

    H -->|Yes| I[Manager Approval]
    H -->|No| J[Quality Assurance Review]

    I --> J

    J --> K{QA Passed?}

    K -->|No| L[Rework Request]
    L --> G

    K -->|Yes| M[Completed]

    M --> N[Archive in Audit Logs]

    classDef default fill:#1b1813,stroke:#d4aa57,color:#f5efe3,stroke-width:1.5px;
    classDef decision fill:#2a241a,stroke:#d4aa57,color:#f5efe3,stroke-width:2px;

    class C,H,K decision;
```

## Related Articles

- Incident Reporting
- Workflow Automation
- Supervisor Permissions