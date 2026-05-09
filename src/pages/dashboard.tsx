import React from 'react';
import Layout from '@theme/Layout';

const cardStyle = {
  background: '#1a1814',
  border: '1px solid #2e281f',
  borderRadius: '16px',
  padding: '28px',
  transition: 'all 0.2s ease',
  cursor: 'default',
};

function hoverProps() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.borderColor = '#4a3f2c';
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = '#2e281f';
    },
  };
}

export default function Dashboard(): JSX.Element {
  return (
    <Layout title="OpsFlow Dashboard">
      <main
        style={{
          background: '#11100d',
          minHeight: '100vh',
          color: '#f5efe3',
          padding: '40px',
          fontFamily: 'Inter, Arial',
        }}>
        <div style={{maxWidth: '1400px', margin: '0 auto'}}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
              flexWrap: 'wrap',
              gap: '20px',
            }}>
            <div>
              <h1 style={{fontSize: '48px', marginBottom: '8px'}}>
                Operations Dashboard
              </h1>
              <p style={{color: '#cbbda4', margin: 0}}>
                Last updated: 5 minutes ago
              </p>
            </div>

            <div
              style={{
                background: '#1b1813',
                border: '1px solid #d4aa57',
                borderRadius: '16px',
                padding: '14px 18px',
              }}>
              <strong style={{color: '#d4aa57'}}>System Status:</strong> All
              Systems Operational
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '32px',
            }}>
            {[
              ['34', 'Open Work Orders'],
              ['14', 'Critical Incidents'],
              ['96%', 'Workflow Success Rate'],
              ['11', 'Pending Approvals'],
            ].map(([value, label]) => (
              <div key={label} style={cardStyle} {...hoverProps()}>
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 800,
                    color: '#d4aa57',
                    marginBottom: '10px',
                  }}>
                  {value}
                </div>
                <div style={{color: '#d8cfbd', fontSize: '16px'}}>{label}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '24px',
              marginBottom: '24px',
            }}>
            <section style={cardStyle} {...hoverProps()}>
              <h2 style={{marginTop: 0, marginBottom: '24px', fontSize: '28px'}}>
                Incident Volume Trend
              </h2>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'end',
                  gap: '14px',
                  height: '220px',
                }}>
                {[80, 120, 95, 150, 110, 170, 135].map((height, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      height: `${height}px`,
                      background: 'linear-gradient(180deg, #d4aa57, #6f5624)',
                      borderRadius: '10px 10px 4px 4px',
                    }}
                  />
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#bba98d',
                  fontSize: '13px',
                  marginTop: '12px',
                }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                  (day) => (
                    <span key={day}>{day}</span>
                  ),
                )}
              </div>
            </section>

            <section style={cardStyle} {...hoverProps()}>
              <h2 style={{marginTop: 0, marginBottom: '24px', fontSize: '28px'}}>
                Work Order Status
              </h2>

              {[
                ['Open', '34'],
                ['In Progress', '25'],
                ['Delayed', '9'],
                ['Completed', '48'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: '1px solid #2e281f',
                  }}>
                  <span>{label}</span>
                  <strong style={{color: '#d4aa57'}}>{value}</strong>
                </div>
              ))}
            </section>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '24px',
              marginBottom: '24px',
            }}>
            <section style={cardStyle} {...hoverProps()}>
              <h2 style={{marginTop: 0, marginBottom: '24px', fontSize: '28px'}}>
                Operational Activity
              </h2>

              {[
                ['Critical incident escalated', 'Manufacturing Operations', '2 minutes ago'],
                ['Approval workflow completed', 'Scheduling Department', '12 minutes ago'],
                ['MFA policy updated', 'Security Administration', '27 minutes ago'],
                ['Work order assigned', 'Maintenance Team', '41 minutes ago'],
              ].map(([title, dept, time]) => (
                <div
                  key={title}
                  style={{
                    padding: '18px 0',
                    borderBottom: '1px solid #2e281f',
                  }}>
                  <div style={{fontWeight: 700, marginBottom: '6px'}}>
                    {title}
                  </div>
                  <div style={{color: '#bba98d', fontSize: '14px'}}>
                    {dept} • {time}
                  </div>
                </div>
              ))}
            </section>

            <section style={cardStyle} {...hoverProps()}>
              <h2 style={{marginTop: 0, marginBottom: '24px', fontSize: '28px'}}>
                Notifications
              </h2>

              {[
                '11 pending approval requests',
                'Critical incident requires review',
                'Workflow retry exceeded threshold',
                'API response delay detected',
              ].map((alert) => (
                <div
                  key={alert}
                  style={{
                    background: '#211d16',
                    border: '1px solid #3d3426',
                    borderRadius: '12px',
                    padding: '14px',
                    marginBottom: '14px',
                    color: '#e7dcc9',
                  }}>
                  {alert}
                </div>
              ))}
            </section>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}>
            <section style={cardStyle} {...hoverProps()}>
              <h2 style={{marginTop: 0, marginBottom: '24px', fontSize: '28px'}}>
                System Health
              </h2>

              {[
                ['Workflow Engine', 'Operational'],
                ['Notification Services', 'Operational'],
                ['API Gateway', 'Operational'],
                ['Database Cluster', 'Healthy'],
              ].map(([service, status]) => (
                <div
                  key={service}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: '1px solid #2e281f',
                  }}>
                  <span>{service}</span>
                  <span style={{color: '#d4aa57', fontWeight: 700}}>
                    {status}
                  </span>
                </div>
              ))}
            </section>

            <section style={cardStyle} {...hoverProps()}>
              <h2 style={{marginTop: 0, marginBottom: '24px', fontSize: '28px'}}>
                Audit Activity
              </h2>

              {[
                'Administrator permissions modified',
                'SSO configuration updated',
                'Escalation workflow edited',
                'Security policy revision published',
              ].map((log) => (
                <div
                  key={log}
                  style={{
                    padding: '16px 0',
                    borderBottom: '1px solid #2e281f',
                    color: '#d8cfbd',
                  }}>
                  {log}
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}