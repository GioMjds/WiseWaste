'use server';

import prisma from "@/lib/db";
import UsersList from "@/components/client/UsersList";

export default async function ManageUsersPage() {
  const users = await prisma.users.findMany({
    orderBy: { created_at: 'desc' },
  });

  return (
    <main className="bg-bg-primary p-8 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Manage Users</h1>
        <button className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded hover:bg-bg-button-hover">
          Add New User
        </button>
      </div>
      <section className="bg-bg-secondary p-6 rounded shadow-shadow-primary border border-border-primary">
        <UsersList users={users} />
      </section>
    </main>
  )
}