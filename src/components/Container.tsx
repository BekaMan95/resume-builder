import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useResumeStore } from './Store.tsx';
import Resume from './Resume.tsx';


interface ContainerProps{
  prevStep: () => void;
}


const Container: React.FC<ContainerProps> = ({ prevStep }) => {

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div className='flex flex-col justify-center items-center gap-4 my-20'>
      <div ref={contentRef}>
        <Resume
          name={useResumeStore((state) => state.name)}
          title={useResumeStore((state) => state.title)}
          image={useResumeStore((state) => state.image)}
          email={useResumeStore((state) => state.email)}
          phone={useResumeStore((state) => state.phone)}
          location={useResumeStore((state) => state.location)}
          experience1_position = {useResumeStore((state) => state.experience1_position)}
          experience1_company = {useResumeStore((state) => state.experience1_company)}
          experience1_details = {useResumeStore((state) => state.experience1_details)}
          experience2_position = {useResumeStore((state) => state.experience2_position)}
          experience2_company = {useResumeStore((state) => state.experience2_company)}
          experience2_details = {useResumeStore((state) => state.experience2_details)}
          education = {useResumeStore((state) => state.education)}
          skills = {useResumeStore((state) => state.skills)}
        />
      </div>
      {/* Ensure to pass the same id to the target component */}
      <div className="flex gap-5">
        <button
          onClick={prevStep}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Go back
        </button>
        <button
          onClick={() =>reactToPrintFn()}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
};
export default Container;
