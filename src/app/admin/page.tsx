'use server';

import SchedulingCalendar from "@/components/client/SchedulingCalendar";
import AnalyticsChart from "@/components/client/AnalyticsChart";
import RouteMap from "@/components/client/RouteMap";

export default async function AdminPage() {
  const pendingRequests = 24;
  const activeRoutes = 5;
  const openComplaints = 8;

  return (
    <main className="min-h-screen overflow-y-auto bg-bg-primary">
      {/* Header Section */}
      <div className="p-8 pb-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
          <p className="text-lg opacity-75 text-text-secondary">
            Welcome back, Admin!
          </p>
        </div>

        {/* Enhanced KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--gradient-brand-vertical)',
              boxShadow: '0 10px 25px var(--color-shadow-primary)'
            }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-white/90">Pending Requests</h3>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm">📋</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{pendingRequests}</p>
              <p className="text-xs text-white/80">+12% from last week</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            style={{
              background: 'var(--gradient-brand-diagonal)',
              boxShadow: '0 10px 25px var(--color-shadow-primary)'
            }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-white/90">Active Routes</h3>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm">🚛</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{activeRoutes}</p>
              <p className="text-xs text-white/80">Running smoothly</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--color-base-green-light) 0%, var(--color-base-green-medium) 100%)',
              boxShadow: '0 10px 25px var(--color-shadow-primary)'
            }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-white/90">Open Complaints</h3>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm">📢</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1">{openComplaints}</p>
              <p className="text-xs text-white/80">-5% from yesterday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Panels Grid */}
      <div className="px-8 pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Scheduling Panel */}
          <section className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/50"
            style={{ boxShadow: '0 8px 32px var(--color-shadow-primary)' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'var(--gradient-brand-vertical)' }}>
                <span className="text-white text-xl">📅</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  Scheduling Hub
                </h3>
                <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                  Optimize collection routes
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <SchedulingCalendar />
            </div>
          </section>

          {/* Analytics Panel */}
          <section className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/50"
            style={{ boxShadow: '0 8px 32px var(--color-shadow-primary)' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'var(--gradient-brand-diagonal)' }}>
                <span className="text-white text-xl">📊</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  Analytics Center
                </h3>
                <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                  Performance insights
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <AnalyticsChart />
            </div>
          </section>

          {/* Routes Panel */}
          <section className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/50"
            style={{ boxShadow: '0 8px 32px var(--color-shadow-primary)' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'linear-gradient(135deg, var(--color-base-green-light) 0%, var(--color-base-green-medium) 100%)' }}>
                <span className="text-white text-xl">🗺️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  Route Navigator
                </h3>
                <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                  Live route tracking
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gray-50 min-h-[300px] flex items-center justify-center">
              <RouteMap />
            </div>
          </section>

          {/* Enhanced Recent Complaints */}
          <section className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/50"
            style={{ boxShadow: '0 8px 32px var(--color-shadow-primary)' }}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4"
                style={{ background: 'var(--gradient-brand-vertical)' }}>
                <span className="text-white text-xl">💬</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  Recent Feedback
                </h3>
                <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                  Customer concerns
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="group/item flex items-center p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--color-bg-success)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: 'var(--color-base-green-medium)' }}>
                  <span className="text-white text-sm">📋</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    Complaint #1024
                  </p>
                  <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                    Missed pickup - Resolved
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--color-base-green-medium)' }}></div>
              </div>

              <div className="group/item flex items-center p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--color-bg-success)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: 'var(--color-base-green-light)' }}>
                  <span className="text-white text-sm">🗑️</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    Complaint #1023
                  </p>
                  <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                    Damaged bin - In Progress
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              </div>

              <div className="group/item flex items-center p-4 rounded-2xl transition-all duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--color-bg-success)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: 'var(--color-base-green-dark)' }}>
                  <span className="text-white text-sm">⏰</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    Complaint #1022
                  </p>
                  <p className="text-sm opacity-75" style={{ color: 'var(--color-text-secondary)' }}>
                    Late pickup - New
                  </p>
                </div>
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}