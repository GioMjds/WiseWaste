'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface DataPoint {
    name: string;
    value: number;
}

interface AnalyticsDashboardProps {
    type: 'wasteByType' | 'pickupStats';
    data: DataPoint[];
}

export default function AnalyticsDashboard({ data }: AnalyticsDashboardProps) {
    const colors = ['#328e6e', '#67ae6e', '#90c67c', '#e1eebc', '#e53e3e'];
    return (
        <div className="h-64">
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={80} label />
                    {data.map((_, idx) => <Cell key={idx} fill={colors[idx % colors.length]} />)}
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}