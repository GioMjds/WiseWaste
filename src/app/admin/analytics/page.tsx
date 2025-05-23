'use server';

import prisma from "@/lib/db"
import AnalyticsDashboard from "@/components/client/AnalyticsDashboard"

export default async function AnalyticsPage() {
  const pickupStats = await prisma.pickup.groupBy({
    by: ['status'],
    _count: { pickup_id: true },
  });

  return (
    <main className="bg-bg-primary p-8 min-h-screen">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Analytics & Reports</h1>
      <section className="grid grid-cols-2 gap-6">
        <div className="bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
          <h2 className="text-lg font-semibold text-text-primary mb-4">Pickup Status Overview</h2>
          <AnalyticsDashboard
            type="pickupStats"
            data={pickupStats.map(p => ({ name: p.status, value: p._count.pickup_id }))}
          />
        </div>
      </section>
    </main>
  )
}