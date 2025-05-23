'use server';

import SchedulingCalendar from "@/components/client/SchedulingCalendar";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function SchedulePage() {
  const requests = await prisma.serviceRequest.findMany({
    where: { status: { in: ['pending', 'scheduled'] } },
    include: { user: true, waste_type: true },
    orderBy: { requested_date: 'asc' },
  })

  return (
    <main className="bg-bg-primary p-8 min-h-screen">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Scheduling</h1>
        <Link href="/admin/schedule/new" className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded-lg hover:bg-bg-button-hover transition-colors duration-200">
          New Pickup Request
        </Link>
      </div>

      {/* Calendar & List Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Calendar Panel */}
        <section className="col-span-2 bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
          <h2 className="text-lg font-semibold mb-4 text-text-primary">Calendar</h2>
          <SchedulingCalendar />
        </section>

        {/* Requests List */}
        <section className="bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
          <h2 className="text-lg font-semibold mb-4 text-text-primary">Pending & Scheduled Requests</h2>
          <ul className="divide-y divide-border-primary">
            {requests.map((req) => (
              <li key={req.request_id} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-medium text-text-primary">{req.user.first_name} {req.user.last_name}</p>
                  <p className="text-sm text-text-secondary">{req.waste_type.name} &middot; {new Date(req.requested_date).toLocaleDateString()}</p>
                </div>
                <Link href={`/admin/schedule/${req.request_id}`} className="text-base-green-medium hover:underline">
                  View
                </Link>
              </li>
            ))}
            {requests.length === 0 && (
              <li className="py-4 text-text-secondary text-center">No pending or scheduled requests.</li>
            )}
          </ul>
        </section>
      </div>
    </main>
  )
}