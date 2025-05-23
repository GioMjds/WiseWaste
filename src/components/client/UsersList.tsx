'use client';
import { Users } from '@prisma/client';
import Link from 'next/link';

interface ManageUsersClientProps { users: Users[] }

export default function UsersList({ users }: ManageUsersClientProps) {
    return (
        <table className="min-w-full divide-y divide-border-primary">
            <thead className="bg-bg-primary">
                <tr>
                    <th className="px-4 py-2 text-left text-text-secondary">Name</th>
                    <th className="px-4 py-2 text-left text-text-secondary">Email</th>
                    <th className="px-4 py-2 text-left text-text-secondary">Role</th>
                    <th className="px-4 py-2 text-left text-text-secondary">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
                {users.map(u => (
                    <tr key={u.user_id}>
                        <td className="px-4 py-2 text-text-primary">{u.first_name} {u.last_name}</td>
                        <td className="px-4 py-2 text-text-secondary">{u.email}</td>
                        <td className="px-4 py-2 text-text-primary uppercase">{u.role}</td>
                        <td className="px-4 py-2">
                            <Link href={`/admin/users/${u.user_id}`} className="text-base-green-medium hover:underline mr-4">Edit</Link>
                            <button className="text-button-danger hover:underline">Delete</button>
                        </td>
                    </tr>
                ))}
                {users.length === 0 && (
                    <tr><td colSpan={4} className="py-4 text-text-secondary text-center">No users found.</td></tr>
                )}
            </tbody>
        </table>
    );
}