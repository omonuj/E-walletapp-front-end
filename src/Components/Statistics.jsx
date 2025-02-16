"use client"

import { ChevronLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Footer from "../Components/footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { chartData } from "./ChartData";


const Statistics = () => {
  const navigate = useNavigate();
  const [activeChart, setActiveChart] = useState("full");
  const [timePeriod, setTimePeriod] = useState("month");

  const time = ["Day", "Month", "Year"]

  const toggleIncomeChart = () => {
    setActiveChart(activeChart === "income" ? "full" : "income");
  };

  const toggleExpensesChart = () => {
    setActiveChart(activeChart === "expenses" ? "full" : "expenses");
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const getChartData = () => {
    return chartData[timePeriod] || chartData.month;
  };

  return (
    <div className="p-6 max-w-[430px] mx-auto bg-white min-h-screen font-sans relative">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6 justify-center">
        <button className="absolute left-4 cursor-pointer" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} className="outline-none" />
        </button>
        <h1 className="text-xl font-semibold">Statistics</h1>
      </div>

      {/* Total Balance */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Total Balance</p>
        <h2 className="text-2xl font-semibold">$808,788,000.00</h2>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Overview</h3>
          <select className="text-sm border rounded-md px-2 py-1 cursor-pointer outline-none" value={timePeriod} onChange={handleTimePeriodChange}>
            {time.map((timeOption, index) => (
              <option key={index} value={timeOption.toLowerCase()}>{timeOption}</option>
            ))}
          </select>
        </div>

        {/* Chart */}
        <div className="w-full bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center mb-10 py-4">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={getChartData()}>
              <XAxis dataKey={timePeriod} stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              {/* Conditionally render bars with transitions */}
              <Bar dataKey="income" fill="#3b82f6" className={`transform transition-all duration-800 ${activeChart === "expenses" ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"}`}/>
              <Bar dataKey="expenses" fill="#f97316" className={`transform transition-all duration-800 ${activeChart === "income" ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"}`}/>
            </BarChart>
          </ResponsiveContainer>

          <div className="flex items-center justify-center gap-5">
            <button
              onClick={toggleIncomeChart}
              className="flex justify-center items-center gap-1 cursor-pointer"
            >
              <div className="w-3 h-3 bg-[#3b82f6] rounded-sm"></div>
              <span className="text-sm text-[#333333]">Income</span>
            </button>
            <button
              onClick={toggleExpensesChart}
              className="flex justify-center items-center gap-1 cursor-pointer"
            >
              <div className="w-3 h-3 bg-[#f97316] rounded-sm"></div>
              <span className="text-sm text-[#333333]">Expenses</span>
            </button>
          </div>
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

      <Footer />
    </div>
  );
};

export default Statistics;