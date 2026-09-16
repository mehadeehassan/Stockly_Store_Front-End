'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const WEEKLY_SALES = [
  { day: 'Mon', sales: 12400 },
  { day: 'Tue', sales: 9800 },
  { day: 'Wed', sales: 15200 },
  { day: 'Thu', sales: 11000 },
  { day: 'Fri', sales: 17600 },
  { day: 'Sat', sales: 21300 },
  { day: 'Sun', sales: 14700 },
];

export default function SalesChart() {
  return (
    <div className="rounded-2xl border border-[#ECE3D8] bg-white p-5 lg:col-span-2">
      <h2 className="mb-4 text-base font-semibold text-[#241C14]">Weekly Sales</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={WEEKLY_SALES} barSize={32}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ECE3D8" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#8A7B6C' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#8A7B6C' }}
            tickFormatter={(v) => `৳${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #ECE3D8',
              borderRadius: 12,
              fontSize: 12,
            }}
            formatter={(v) => [`৳ ${Number(v).toLocaleString()}`, 'Sales']}
          />
          <Bar dataKey="sales" fill="#8140DC" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
