"use client"

import { ChevronLeft, Plus } from "lucide-react";
import Footer from "../Components/footer"

const Cards = () => {
  return (
    <div className="p-6 max-w-[430px] mx-auto bg-white min-h-screen font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-600">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">My Card</h1>
        </div>
        <button className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">
          <Plus size={20} />
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-4">Tap Card for more detailed information</p>

      {/* Cards */}
      <div className="space-y-4 mb-8">
        {[
          { name: "John Doe", bg: "from-blue-400 to-blue-600" },
          { name: "British IKEA", bg: "from-yellow-300 to-yellow-500" },
        ].map((card, index) => (
          <div key={index} className={`p-6 bg-gradient-to-br ${card.bg} text-white rounded-lg shadow-md relative`}>
            <p className="text-lg tracking-widest mb-6">XXXX XXXX XXXX XXXX</p>
            <p className="mb-2">{card.name}</p>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-xs opacity-80">Valid Thru</p>
                <p className="text-sm">--/--</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full" />
                <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activation Section */}
      <div className=" flex items-center justify-between mb-30">
        <div>
          <h3 className="font-medium">Receive your card?</h3>
          <p className="text-sm text-gray-500">Tap the button to make sure your card is fully activated</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Activate</button>
      </div>

      <Footer/>
    </div>
  );
};

export default Cards;
