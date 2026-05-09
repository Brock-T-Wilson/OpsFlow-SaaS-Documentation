import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Dashboard(): JSX.Element {
  return (
    <Layout title="OpsFlow Dashboard">
      <main
        style={{
          background: '#0f0e0b',
          minHeight: '100vh',
          color: '#f5efe3',
          padding: '48px 24px',
        }}>
        <section
          style={{
            maxWidth: '1300px',
            margin: '0 auto',
          }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '240px 1fr',
              gap: '24px',
              border: '1px solid #2f2a20',
              borderRadius: '28px',
              overflow: 'hidden',
              background: '#14120f',
              boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
            }}>
            {/* Sidebar */}
            <aside
              style={{
                background: '#11100d',
                borderRight: '1px solid #2f2a20',
                padding: '28px',
              }}>
              <h2
                style={{
                  color: '#d4aa57',
                  marginTop: 0,
                  marginBottom: '28px',
                }}>
                OpsFlow
              </h2>

              {[
                ['Dashboard', '/dashboard'],
                ['Work Orders', '/docs/user-guides/create-work-orders'],
                ['Incidents', '/docs/user-guides/incident-reporting'],
                ['Scheduling', '/docs/user-guides/shift-scheduling'],
                ['Automation', '/docs/workflow-automation/automation-overview'],
                ['Reports', '/docs/faq/reporting-questions'],
                ['Admin', '/docs/administration/user-management'],
              ].map(([item, path]) => (
                <Link
                  key={item}
                  to={path}
                  style={{
                    textDecoration: 'none',
                  }}>
                  <div
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      marginBottom: '8px',
                      background: 'rgba(255,255,255,0.02)',
                      color: '#d8cfbd',
                      fontWeight: 600,
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        'rgba(212,170,87,0.14)';
                      e.currentTarget.style.color = '#d4aa57';
                      e.currentTarget.style.transform =
                        'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        'rgba(255,255,255,0.02)';
                      e.currentTarget.style.color = '#d8cfbd';
                      e.currentTarget.style.transform =
                        'translateX(0px)';
                    }}>
                    {item}
                  </div>
                </Link>
              ))}
            </aside>

            {/* Main Content */}
            <section
              style={{
                padding: '28px',
              }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '28px',
                }}>
                <div>
                  <h1
                    style={{
                      margin: 0,
                      fontSize: '36px',
                    }}>
                    Operations Dashboard
                  </h1>

                  <p
                    style={{
                      color: '#d8cfbd',
                      marginTop: '12px',
                    }}>
                    Monitor operational workflows, incidents, staffing,
                    and approvals across the organization.
                  </p>
                </div>

                <Link
                  to="/docs/user-guides/create-work-orders"
                  style={{
                    background: '#d4aa57',
                    color: '#11100d',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}>
                  Create Work Order
                </Link>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                  marginBottom: '24px',
                }}>
                {[
                  ['42', 'Open Work Orders'],
                  ['8', 'Active Incidents'],
                  ['96%', 'Staffing Coverage'],
                  ['14', 'Pending Approvals'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    style={{
                      background: '#1b1813',
                      border: '1px solid #332d22',
                      borderRadius: '18px',
                      padding: '22px',
                    }}>
                    <div
                      style={{
                        fontSize: '34px',
                        fontWeight: 800,
                        color: '#d4aa57',
                        marginBottom: '8px',
                      }}>
                      {value}
                    </div>

                    <div
                      style={{
                        color: '#d8cfbd',
                      }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr',
                  gap: '20px',
                  marginBottom: '24px',
                }}>
                <div
                  style={{
                    background: '#1b1813',
                    border: '1px solid #332d22',
                    borderRadius: '20px',
                    padding: '24px',
                  }}>
                  <h2
                    style={{
                      marginTop: 0,
                    }}>
                    Work Order Activity
                  </h2>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'end',
                      gap: '12px',
                      height: '180px',
                    }}>
                    {[40, 70, 55, 90, 65, 110, 85].map(
                      (height, index) => (
                        <div
                          key={index}
                          style={{
                            flex: 1,
                            height: `${height}px`,
                            background:
                              'linear-gradient(180deg, #d4aa57, #6f5624)',
                            borderRadius: '10px 10px 4px 4px',
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>

                <div
                  style={{
                    background: '#1b1813',
                    border: '1px solid #332d22',
                    borderRadius: '20px',
                    padding: '24px',
                  }}>
                  <h2
                    style={{
                      marginTop: 0,
                    }}>
                    Incident Severity
                  </h2>

                  {[
                    ['Critical', '2'],
                    ['High', '6'],
                    ['Medium', '12'],
                    ['Low', '18'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid #332d22',
                        padding: '12px 0',
                      }}>
                      <span>{label}</span>

                      <strong
                        style={{
                          color: '#d4aa57',
                        }}>
                        {value}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div
                style={{
                  background: '#1b1813',
                  border: '1px solid #332d22',
                  borderRadius: '20px',
                  padding: '24px',
                }}>
                <h2
                  style={{
                    marginTop: 0,
                  }}>
                  Recent Work Orders
                </h2>

                <div
                  style={{
                    display: 'grid',
                    gap: '12px',
                  }}>
                  {[
                    ['WO-1042', 'Maintenance', 'High', 'Open'],
                    ['WO-1043', 'Logistics', 'Medium', 'In Review'],
                    ['WO-1044', 'Operations', 'Critical', 'Escalated'],
                    ['WO-1045', 'Safety', 'Low', 'Scheduled'],
                  ].map(([id, dept, priority, status]) => (
                    <div
                      key={id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns:
                          '1fr 1fr 1fr 1fr',
                        gap: '16px',
                        padding: '14px',
                        borderRadius: '12px',
                        background: '#14120f',
                        color: '#d8cfbd',
                      }}>
                      <strong
                        style={{
                          color: '#f5efe3',
                        }}>
                        {id}
                      </strong>

                      <span>{dept}</span>
                      <span>{priority}</span>

                      <span
                        style={{
                          color: '#d4aa57',
                        }}>
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </Layout>
  );
}