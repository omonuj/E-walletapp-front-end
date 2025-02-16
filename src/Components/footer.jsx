// "use client"

// import { Home, PieChart, Wallet, User } from "lucide-react";
// import { Link } from "react-router"
// import { useState } from "react";

// const Footer = () => {
//   const [activeTab, setActiveTab] = useState("home");

//   return (
//     <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-200 flex justify-around items-center py-2 px-6">
//       {[ "Home", "Activity", "Wallet", "Profile"].map((item, index) => (
//         <button
//           key={index}
//           onClick={() => setActiveTab(item.toLowerCase())}
//           className={`flex flex-col items-center ${activeTab === item.toLowerCase() ? "text-blue-500" : "text-gray-400"}`}
//         >
//           {index === 0 ? (
//             <Home size={24} />
//           ) : index === 1 ? (
//             <PieChart size={24} />
//           ) : index === 2 ? (
//             <div className="bg-yellow-400 rounded-full p-3 -mt-6">
//               <Wallet size={24} className="text-white" />
//             </div>
//           ) : (
//             <User size={24} />
//           )}
//           <span className="text-xs mt-1">{item}</span>
//         </button>
//       ))}
//     </nav>
//   );
// };

// export default Footer;


"use client";

import { Home, PieChart, User, ScanLine, BarChart, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "Home", icon: <Home size={24} />, path: "/" },
    { name: "Stats", icon: <BarChart size={24} />, path: "/statistics"},
    {name: "Scan", icon: <ScanLine size={24} />, path: "/scanner", special: true },
    { name: "Cards", icon: <CreditCard size={24} />, path: "/cards" },
    { name: "Profile", icon: <User size={24} />, path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-200 flex justify-around items-center py-2 px-6">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={() => setActiveTab(item.name.toLowerCase())}
          className={`flex flex-col items-center ${
            activeTab === item.name.toLowerCase() ? "text-blue-500" : "text-[#413e3e]"
          }`}
        >
          {item.special ? (
            <div className="bg-yellow-400 rounded-full p-3 -mt-6">
              {item.icon}
            </div>
          ) : (
            item.icon
          )}
          <span className="text-xs mt-1">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Footer;
