'use client';
import { Route } from '@prisma/client';
import Link from 'next/link';

interface RouteListClientProps {
    routes: Route[];
}

export default function RouteList({ routes }: RouteListClientProps) {
    return (
        <ul className="divide-y divide-border-primary">
            {routes.map((route) => (
                <li key={route.route_id} className="py-3 flex justify-between items-center">
                    <div>
                        <p className="font-medium text-text-primary">{route.name}</p>
                        <p className="text-sm text-text-secondary">Created {new Date(route.created_at).toLocaleDateString()}</p>
                    </div>
                    <Link href={`/admin/routes/${route.route_id}`} className="text-base-green-medium hover:underline">
                        View
                    </Link>
                </li>
            ))}
            {routes.length === 0 && (
                <li className="py-4 text-text-secondary text-center">No routes available.</li>
            )}
        </ul>
    );
}