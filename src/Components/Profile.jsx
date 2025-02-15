import { ChevronLeft, MoreHorizontal, Home, PieChart, Wallet, User, Camera } from "lucide-react";
import picture from "../assets/picture.png";
import zenith from "../assets/zenith.png";
import Footer from "../Components/footer";
import { useState } from "react";

const Profile = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="max-w-[430px] mx-auto bg-white min-h-screen pb-20 relative font-sans flex flex-col items-center">
      {/* Main Content */}
      <div className="p-6 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 w-full">
          <button className="text-gray-600">
            <ChevronLeft size={24} />
          </button>
          <button className="text-gray-600">
            <MoreHorizontal size={24} />
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-md">
            <img src={picture} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* User Details */}
        <p className="text-sm text-gray-500 mb-1 text-center">Send to:</p>
        <h2 className="text-xl font-semibold mb-1 text-center">Call Me Teggar</h2>
        <p className="text-sm text-gray-500 mb-4 text-center">UID: 8194638720</p>
        <p className="text-3xl font-semibold mb-8 text-center">$999.99</p>

        {/* Bank Account Info */}
        <div className="w-full bg-white rounded-xl shadow-sm p-4 mb-2 flex items-center gap-3 justify-center">
          <img src={zenith} alt="Zenith Bank Logo" className="w-10 h-10" />
          <div>
            <p className="text-sm text-center">Zenith Bank Account ****703804</p>
          </div>
        </div>

        {/* Bank Info Description Outside Box */}
        <p className="text-xs text-gray-500 mt-1 text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua
        </p>

        {/* Action Button */}
        <button 
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium mt-4"
          onClick={() => setShowQR(true)}
        >
          Show QR code
        </button>
        <Footer/>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-2xl p-6 w-80 text-center">
            <h2 className="text-lg font-semibold mb-2">Call Me Teggar</h2>
            <img src={picture} alt="QR Code" className="w-48 h-48 mx-auto" />
            <p className="text-sm text-gray-500 mt-2">UID: 8194638720</p>
            <button 
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded-xl font-medium flex items-center justify-center gap-2"
              onClick={() => setShowQR(false)}
            >
              <Camera size={20} /> Scan QR Code
            </button>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Profile;
