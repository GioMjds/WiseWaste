'use client';
import { Complaint } from '@prisma/client';

interface ComplaintsListClientProps { complaints: Complaint[] }

export default function ComplaintsList({ complaints }: ComplaintsListClientProps) {
    return (
        <ul className="divide-y divide-border-primary">
            {complaints.map(c => (
                <li key={c.complaint_id} className="py-4">
                    <p className="font-medium text-text-primary">#{c.complaint_id} by User {c.user_id}</p>
                    <p className="text-sm text-text-secondary">{new Date(c.created_at).toLocaleDateString()} — {c.status}</p>
                    <p className="mt-2 text-text-secondary">{c.description}</p>
                </li>
            ))}
            {complaints.length === 0 && <li className="py-4 text-text-secondary text-center">No complaints found.</li>}
        </ul>
    );
}