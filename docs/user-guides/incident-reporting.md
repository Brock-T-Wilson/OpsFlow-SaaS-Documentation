# Incident Reporting

Incident reports are used to document safety issues, operational disruptions,
equipment failures, and workplace events.

## Report an Incident

1. Open **Safety > Incident Reports**.
2. Select **Create Incident Report**.
3. Enter incident details.
4. Select severity level.
5. Attach supporting documentation if applicable.
6. Submit the report.

## Severity Levels

| Severity | Description |
|---|---|
| Low | Minor operational issue |
| Medium | Operational disruption |
| High | Significant operational impact |
| Critical | Immediate safety or operational risk |

## Escalation Workflow

Critical incidents automatically:

- notify supervisors
- trigger escalation workflows
- create audit log entries

## Expected Result

Incident reports become visible within the Incident Management dashboard.

## Incident Escalation Workflow

The following workflow shows how OpsFlow routes incident reports based on severity, supervisor review, and corrective action requirements.

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
    A[Incident Report Created] --> B[Severity Classification]
    B --> C{Severity Level}

    C -->|Low or Medium| D[Supervisor Review]
    C -->|High or Critical| E[Immediate Escalation]

    D --> F{Follow-Up Required?}
    F -->|No| G[Document Resolution]
    F -->|Yes| H[Create Corrective Action]

    E --> I[Notify Operations Manager]
    I --> J[Assign Response Team]
    J --> H

    H --> K[Track Corrective Action]
    K --> L[Verify Resolution]
    L --> M[Close Incident Report]
    M --> N[Audit Log Updated]

    classDef default fill:#1b1813,stroke:#d4aa57,color:#f5efe3,stroke-width:1.5px;
    classDef decision fill:#2a241a,stroke:#d4aa57,color:#f5efe3,stroke-width:2px;
    class C,F decision;
```

## Related Articles

- Workflow Automation
- Audit Logs
- Reporting & Analytics