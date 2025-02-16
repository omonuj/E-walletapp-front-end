import { useState } from "react";

import {
  Bell,
  Eye,
  EyeOff,
  Home,
  Plus,
  ArrowRight,
  PieChart,
  User,
  Wallet,
} from "lucide-react";
import netflixLogo from "../assets/netflix-logo.png";
import amazonLogo from "../assets/amazon-logo.png";
import canvaLogo from "../assets/canva-logo.png";
import Footer from "../Components/footer";

export default function Homepage() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="max-w-[430px] mx-auto bg-white min-h-screen pb-20 relative font-sans">
      {/* Header */}
      <div className="p-6 flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">Total Balance</p>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">
              {showBalance ? "$8,899,750" : "****"}
            </h1>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-gray-500 cursor-pointer"
            >
              {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <button className="text-gray-500">
          <Bell size={20} />
        </button>
      </div>

      {/* Card */}
      <div className="mx-6 mb-6 bg-gradient-to-b from-blue-700 via-indigo-600 to-blue-300 rounded-2xl h-44 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
        <h1 className=" text-lg tracking-widest text-white p-6 relative z-10">
          XXXX XXXX XXXX XXXX
        </h1>
        <div className="flex justify-between px-6 py-9 text-white">
          <h1>
            <p className="text-sm opacity-80 mb-1">Card Holder</p>
            <p className="text-lg">John Doe</p>
          </h1>
          <div className="flex items-center z-40 ">
            <div className="w-9 h-9 bg-red-500 rounded-full z-30" />
            <div className="w-9 h-9 bg-yellow-400 rounded-full -ml-2" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-6 mb-8 grid grid-cols-3 gap-3">
        {["Add money", "Transfer", "Budget"].map((action, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white rounded-full py-3 px-2 flex flex-col items-center"
          >
            {index === 0 ? (
              <Plus size={20} />
            ) : index === 1 ? (
              <ArrowRight size={20} />
            ) : (
              <PieChart size={20} />
            )}
            <span className="text-xs mt-1">{action}</span>
          </button>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="mx-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent activities</h2>
          <button className="text-blue-500 text-sm">View All</button>
        </div>
        <div className="space-y-3">
          {[
            {
              name: "Netflix Subscription",
              time: "05:28PM",
              amount: "-USD 10.99",
              logo: netflixLogo,
            },
            {
              name: "Amazon Subscription",
              time: "08:28PM",
              amount: "-USD 10.99",
              logo: amazonLogo,
            },
            {
              name: "Canva Subscription",
              time: "11:30AM",
              amount: "-USD 10.99",
              logo: canvaLogo,
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={activity.logo || "/placeholder.svg"}
                  alt={activity.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium">{activity.name}</p>
                <p className="text-sm text-gray-500">
                  {activity.time} , Payment Received
                </p>
              </div>
              <p className="text-red-500 font-medium">{activity.amount}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Plans */}
      <div className="mx-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">My savings plans</h2>
          <button className="text-blue-500 text-sm">View All</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: "New car", icon: "🚗", amount: "$25,000" },
            { name: "New House", icon: "🏠", amount: "$150,000" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-4 flex items-center gap-3"
            >
              <span className="text-2xl">{plan.icon}</span>
              <div className="flex-1">
                <p className="font-medium">{plan.name}</p>
                <p className="text-sm text-gray-500">{plan.amount}</p>
              </div>
              <ArrowRight size={16} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
