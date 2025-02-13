"use client"

import { ChevronLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Footer from "../Components/footer"

const chartData = [
  { month: "Jan", income: 3000, expenses: 5000 },
  { month: "Feb", income: 3200, expenses: 5200 },
  { month: "Mar", income: 2800, expenses: 7500 },
  { month: "Apr", income: 4200, expenses: 6000 },
  { month: "May", income: 8000, expenses: 3000 },
  { month: "Jun", income: 6000, expenses: 7000 },
];

const Statistics = () => {
  return (
    <div className="p-6 max-w-[430px] mx-auto bg-white min-h-screen font-sans relative">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 justify-center">
        <button className="text-gray-600 absolute left-6">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold">Statistics</h1>
      </div>

      {/* Total Balance */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Total Balance</p>
        <h2 className="text-2xl font-semibold">$808,788,000.00</h2>
      </div>

      {/* Overview */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Overview</h3>
          <select className="text-sm border rounded-md px-2 py-1">
            <option>Month</option>
          </select>
        </div>

        {/* Chart */}
        <div className="h-[200px] w-full bg-gray-100 rounded-lg shadow-md flex items-center justify-center mb-10">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Bar dataKey="income" fill="#3b82f6" />
              <Bar dataKey="expenses" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Income & Expenses Cards */}
      <div className="grid grid-cols-2 gap-4 mb-20">
        <div className="p-4 bg-blue-500 rounded-xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-20 rounded-full" />
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 19V5M5 12l7-7 7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm text-white">Income</span>
          </div>
          <p className="text-lg font-semibold text-white">$109,504.00</p>
        </div>

        <div className="p-4 bg-orange-400 rounded-xl shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-20 rounded-full" />
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M5 12l7 7 7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm text-white">Expenses</span>
          </div>
          <p className="text-lg font-semibold text-white">$10,294.00</p>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Statistics;
