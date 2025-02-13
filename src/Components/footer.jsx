"use client"

import { Home, PieChart, Wallet, User } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-200 flex justify-around items-center py-2 px-6">
      {["Home", "Activity", "Wallet", "Profile"].map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(item.toLowerCase())}
          className={`flex flex-col items-center ${activeTab === item.toLowerCase() ? "text-blue-500" : "text-gray-400"}`}
        >
          {index === 0 ? (
            <Home size={24} />
          ) : index === 1 ? (
            <PieChart size={24} />
          ) : index === 2 ? (
            <div className="bg-yellow-400 rounded-full p-3 -mt-6">
              <Wallet size={24} className="text-white" />
            </div>
          ) : (
            <User size={24} />
          )}
          <span className="text-xs mt-1">{item}</span>
        </button>
      ))}
    </nav>
  );
};

export default Footer;
