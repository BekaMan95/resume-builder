import React from "react";

interface WelcomeProps {
  nextStep: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ nextStep }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-mono">
        <h1 className="text-4xl font-bold text-blue-700 tracking-widest drop-shadow-[0_0_10px_rgba(0,0,200,0.8)]">
            🚀 WELCOME, Buddy!! 🚀
        </h1>
        <p className="text-lg mt-4 tracking-widest text-blue-500">
            Click Next to Continue...
        </p>

        <button
            onClick={nextStep}
            className="mt-6 px-6 py-3 bg-blue-500 text-black font-bold tracking-widest rounded-lg 
            shadow-lg hover:bg-blue-400 transition-all border-4 border-blue-800 
            animate-pulse"
        >
            ► NEXT
        </button>

        {/* Extra Nostalgic Effects */}
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full mix-blend-overlay pointer-events-none"></div>
    </div>

  );
};

export default Welcome;
