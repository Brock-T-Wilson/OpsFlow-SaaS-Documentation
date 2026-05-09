import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="OpsFlow Documentation"
      description="Enterprise workforce operations documentation">
      <main
        style={{
          minHeight: '100vh',
          background: '#11100d',
          color: '#f5efe3',
          padding: '80px 24px',
        }}>
        <section style={{maxWidth: '1100px', margin: '0 auto'}}>
          <img
  src="/img/opsflow-logo.png"
  alt="OpsFlow Logo"
  style={{
    width: '360px',
    marginBottom: '24px',
  }}
/>
          <p
            style={{
              color: '#c9a24d',
              fontWeight: 700,
              letterSpacing: '0.08em',
            }}>
            OPSFLOW DOCUMENTATION
          </p>

          <h1
            style={{
              fontSize: '56px',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}>
            Enterprise workforce operations,
            <br />
            documented clearly.
          </h1>

          <p
            style={{
              fontSize: '20px',
              maxWidth: '720px',
              color: '#d8cfbd',
              lineHeight: 1.7,
            }}>
            OpsFlow helps operations teams manage work orders, incident reports,
            scheduling, approvals, reporting, and security administration from
            one centralized platform.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '36px',
              flexWrap: 'wrap',
            }}>
            <Link
              to="/docs/introduction/welcome"
              style={{
                background: '#c9a24d',
                color: '#11100d',
                padding: '14px 22px',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
              Start Reading
            </Link>

            <Link
              to="/docs/introduction/welcome"
              style={{
                border: '1px solid #c9a24d',
                color: '#f5efe3',
                padding: '14px 22px',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
              }}>
              View Documentation
            </Link>
          </div>

          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '64px',
            }}>
            {[
              [
                'Workforce Scheduling',
                'Manage employee schedules, staffing coverage, overtime, and shift assignments.',
              ],
              [
                'Incident Management',
                'Track operational incidents, escalations, safety events, and corrective actions.',
              ],
              [
                'Workflow Automation',
                'Configure approval chains, escalation rules, automated notifications, and routing.',
              ],
              [
                'Administration',
                'Manage permissions, departments, MFA, SSO, audit logs, and security controls.',
              ],
              [
                'Reporting & Analytics',
                'Monitor KPIs, productivity metrics, staffing trends, and operational performance.',
              ],
              [
                'API Documentation',
                'Integrate with OpsFlow using secure APIs, webhooks, and authentication workflows.',
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: '#1a1814',
                  border: '1px solid #3a3327',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                <h2
                  style={{
                    fontSize: '22px',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                  {title}
                </h2>

                <p
                  style={{
                    color: '#d8cfbd',
                    margin: 0,
                    lineHeight: 1.7,
                    fontSize: '16px',
                  }}>
                  {text}
                </p>
              </div>
            ))}
          </section>

          <section
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginTop: '72px',
            }}>
            {[
              ['99.9%', 'Platform uptime'],
              ['24/7', 'Operational monitoring'],
              ['120+', 'API requests per minute'],
              ['15m', 'Administrator session timeout'],
            ].map(([stat, label]) => (
              <div
                key={stat}
                style={{
                  background: '#171511',
                  border: '1px solid #2f2a20',
                  borderRadius: '18px',
                  padding: '28px',
                }}>
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 800,
                    color: '#d4aa57',
                    marginBottom: '10px',
                  }}>
                  {stat}
                </div>

                <div
                  style={{
                    color: '#d8cfbd',
                    fontSize: '16px',
                  }}>
                  {label}
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </Layout>
  );
}