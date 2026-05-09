# Approval Workflows

Approval workflows automate review and authorization processes
for operational activities.

## Configure Approval Workflow

1. Open **Automation > Approval Workflows**.
2. Select **Create Workflow**.
3. Enter workflow name.
4. Configure trigger conditions.
5. Assign approval stages.
6. Save the workflow.

## Supported Approval Scenarios

Approval workflows support:

- overtime approvals
- work order approvals
- maintenance requests
- department requests
- operational escalations

## Best Practices

- Limit unnecessary approval stages.
- Configure escalation timeouts.
- Review workflow performance regularly.

## Approval Workflow Diagram

The following workflow shows how OpsFlow routes approval requests based on department review, priority level, compliance checks, and final authorization.

```mermaid
%%{init: {
  "theme": "base",
  "flowchart": {
    "nodeSpacing": 35,
    "rankSpacing": 55,
    "padding": 25
  },
  "themeVariables": {
    "background": "#11100d",
    "primaryColor": "#1b1813",
    "primaryTextColor": "#f5efe3",
    "primaryBorderColor": "#d4aa57",
    "lineColor": "#d4aa57",
    "secondaryColor": "#2a241a",
    "tertiaryColor": "#11100d",
    "fontFamily": "Inter, Arial",
    "fontSize": "15px"
  }
}}%%

flowchart TD

    A[Approval Request Submitted] --> B[Department Review]

    B --> C{Request Complete?}

    C -->|No| D[Return to Requester]
    D --> A

    C -->|Yes| E[Priority Evaluation]

    E --> F{High Priority?}

    F -->|Yes| G[Manager Review]
    F -->|No| H[Standard Approval Queue]

    H --> G

    G --> I{Approved?}

    I -->|No| J[Request Rejected]
    J --> K[Notify Requester]

    I -->|Yes| L[Compliance Verification]

    L --> M{Compliance Passed?}

    M -->|No| N[Escalate for Review]
    N --> G

    M -->|Yes| O[Final Authorization]

    O --> P[Workflow Executed]
    P --> Q[Audit Log Updated]

    classDef default fill:#1b1813,stroke:#d4aa57,color:#f5efe3,stroke-width:1.5px;
    classDef decision fill:#2a241a,stroke:#d4aa57,color:#f5efe3,stroke-width:2px;

    class C,F,I,M decision;
```

## Related Articles

- Automation Overview
- Escalation Rules
- Notifications & Alerts