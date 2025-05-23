'use server';

import prisma from "@/lib/db";
import Link from "next/link";
import RouteList from "@/components/client/RouteList";
import RouteMap from "@/components/client/RouteMap";

export default async function RoutesPage() {
  const routes = await prisma.route.findMany({
    include: {
      pickups: {
        include: {
          service_request: {
            include: {
              user: true,
              waste_type: true,
            }
          }
        }
      }
    },
    orderBy: { created_at: 'desc' },
  })

  return (
    <main className="bg-bg-primary p-8 min-h-screen">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Routes Management</h1>
        <Link href="/admin/routes/new" className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded hover:bg-bg-button-hover">
          New Route
        </Link>
      </div>

      {/* Routes List & Map */}
      <div className="grid grid-cols-3 gap-6">
        {/* Routes List */}
        <section className="col-span-1 bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
          <h2 className="text-lg font-semibold mb-4 text-text-primary">All Routes</h2>
          <RouteList routes={routes} />
        </section>

        {/* Map & Details */}
        <section className="col-span-2 bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
          <h2 className="text-lg font-semibold mb-4 text-text-primary">Route Map & Sequence</h2>
          <RouteMap />
        </section>
      </div>
    </main>
  )
}