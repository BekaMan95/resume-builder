// import Report from './Report.tsx'; // Import the component you want to convert to PDF
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
  // const image_url = "https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-1/307152063_499318245537406_5437885255181197815_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=5Q5lcP_rD0EQ7kNvgHJNPch&_nc_oc=Adg_MAW6OEDVVl9ZZd0YK0oQJWP5T2O7JAxRf9fK5V3vxmW8DNlvOK7ANh78oVSsKYc&_nc_zt=24&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=ARRlHAN5NGRomkeYn2Ez0Mr&oh=00_AYDIN_l9lFXTJHUA_1Gu9VyCbPZNk7vWTWcxyskDxeWuVA&oe=67BBA0F3";

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
      {/* <div className="flex flex-wrap items-center justify-center text-cyan-300 text-balance border-b border-cyan-300">
        <button className='p-3 border-l border-r border-cyan-300' onClick={() => handleTabClick('pl')}>Programming Languages</button>
        <button className='p-3 border-l border-r border-cyan-300' onClick={() => handleTabClick('fw')}>Frameworks</button>
        <button className='p-3 border-l border-r border-cyan-300' onClick={() => handleTabClick('tl')}>Tools and Technologies</button>
      </div>
      <div className="tab-content p-10">
        {activeTab === 'home' && <div><ProgrammingLanguages /></div>}
        {activeTab === 'input' && <div><Frameworks /></div>}
        {activeTab === 'pdf-page' && <div><Tools /></div>}
      </div> */}
    </div>
  );
};
export default Container;
