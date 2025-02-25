import React, { useState } from "react";
import Welcome from "./Welcome";
import ResumeForm from "./components/ResumeForm";
import Container from "./components/Container";


const App: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-300 to-green-200 text-green-300 font-mono">
      {step === 1 && <Welcome nextStep={() => setStep(2)} />}
      {step === 2 && <ResumeForm nextStep={() => setStep(3)} prevStep={() => setStep(1)} />}
      {step === 3 && <Container prevStep={() => setStep(2)} />}
    </div>
  );
};

export default App;
