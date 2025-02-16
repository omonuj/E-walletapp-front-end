import { Camera, ChevronLeft, QrCode } from "lucide-react";
import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showManuuallyPopup, setShowManuuallyPopup] = useState(false);
  const navigate = useNavigate();

  const handleScannerUpdate = (err, result) => {
    if (result) {
      setData(result.text);
      setShowPopup(true);
    }
  };

  return (
    <div className="max-w-[430px] mx-auto bg-black h-screen font-sans flex flex-col items-center">
      <div className="absolute w-full h-screen bg-white opacity-30"></div>

      <h2 className="relative text-xl font-semibold mb-4 bg-[#D9D9D9] text-[#0e0e0e] w-full rounded-b-4xl py-6 flex justify-center items-center">
        <button className="absolute left-4 cursor-pointer" onClick={() => navigate(-1)}>
          <ChevronLeft size={24} className="outline-none" />
        </button>
        <p className="font-normal">Scan User QR</p>
      </h2>

      {/* Camera Scanner */}
      <div className="relative px-2 py-2 w-full h-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-48 relative">
            {/* Edges */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500"></div>
          </div>
        </div>
        <div className="cam-container">
          <BarcodeScannerComponent
            width={250}
            height={250}
            onUpdate={handleScannerUpdate}
          />
        </div>
      </div>

      {/* Add Manually */}
      <button
        onClick={() => setShowManuuallyPopup(true)}
        className="relative mt-6 bg-[#547EE8] hover:bg-blue-400 text-white text-lg font-medium py-2 px-12 rounded-lg mb-12 cursor-pointer transform transition-all duration-300 ease-in-out"
      >
        Add Manually
      </button>

      {/* Manually PopUp */}
      {showManuuallyPopup && (
        <div className="fixed inset-0 w-full h-full z-50 bg-white bg-opacity-75 flex items-center justify-center">
          <div className="p-6 bg-white rounded-xl shadow-md w-3xs flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4 text-[#333333]">
              Input UID
            </h2>
            <input
              type="text"
              placeholder="UID:"
              className="border border-gray-300 rounded-full px-4 py-2 outline-none placeholder:text-gray-400"
            />
            <button
              onClick={() => setShowManuuallyPopup(false)}
              className="mt-4 text-blue-500 flex hover:text-blue-400 items-center justify-center cursor-pointer"
            >
              <p>Click to scan the QR code</p>
              <Camera className="w-6 h-4 " />
            </button>
          </div>
        </div>
      )}

      {/* PopUp */}
      {showPopup && (
        <div className="fixed inset-0 w-full h-full z-50 bg-white bg-opacity-75 flex items-center justify-center">
          <div className="p-6 bg-white rounded-xl shadow-md w-3xs flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold mb-4 text-[#333333]">
              Call Me Teggar
            </h2>
            <p className="text-sm text-gray-500">{data}</p>
            <QrCode className="w-40 h-40 text-[#333333]" />
            <p className="text-[#828282]">UID: 8194638720</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-transparent hover:border-blue-400 text-blue-500 border border-blue-500 py-1 px-4 rounded-full flex gap-3 justify-center items-center cursor-pointer"
            >
              <Camera className="w-5 h-5" />
              <p> Scan QR Code</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scanner;