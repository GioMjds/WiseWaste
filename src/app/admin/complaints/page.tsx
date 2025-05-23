'use server';

import prisma from "@/lib/db";
import ComplaintsList from "@/components/client/ComplaintList";

export default async function ComplaintsPage() {
  const complaints = await prisma.complaint.findMany({
    include: { user: true, pickup: { include: { service_request: true } } },
    orderBy: { created_at: 'desc' },
  })

  return (
    <main className="bg-bg-primary p-8 min-h-screen">
      <h1 className="text-2xl font-bold text-text-primary mb-6">Complaints</h1>
      <section className="bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
        <ComplaintsList complaints={complaints} />
      </section>
    </main>
  )
}