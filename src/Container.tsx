// import Report from './Report.tsx'; // Import the component you want to convert to PDF
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from './Resume.tsx';
import Experience from './Mods.tsx';


const Container = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };


  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const obj1 = new Experience('Senior Frontend Developer', 'XYZ Corp (2022-Present)', 'Developed scalable UI components using React & Tailwind.');
  const obj2 = new Experience('Full-Stack Developer', 'ABC Solutions (2019-2022)', 'Built REST APIs and modern web applications.');
  const image_url = "https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-1/307152063_499318245537406_5437885255181197815_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=5Q5lcP_rD0EQ7kNvgHJNPch&_nc_oc=Adg_MAW6OEDVVl9ZZd0YK0oQJWP5T2O7JAxRf9fK5V3vxmW8DNlvOK7ANh78oVSsKYc&_nc_zt=24&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=ARRlHAN5NGRomkeYn2Ez0Mr&oh=00_AYDIN_l9lFXTJHUA_1Gu9VyCbPZNk7vWTWcxyskDxeWuVA&oe=67BBA0F3";

  return (
    <div className='flex flex-col justify-center items-center gap-4 my-20'>
      <div ref={contentRef}>
        {/* <Report
          name='Jane Cooper' title='de$igner' 
          image={ image_url }
          email='email@example.com' phone='+251900020020' location='Spain, Madrid'
          experience='Frontend Developer - XYZ Company (2021-Present)'
          education='BSc Computer Science - ABC University (2017-2021)'
          skills = 'React, Tailwind, JavaScript, HTML, CSS'
        /> */}
        <Resume
          name='Jane Cooper' 
          title='de$igner' 
          image={ image_url }
          email='email@example.com' 
          phone='+251900020020' 
          location='Spain, Madrid'
          experience1={ obj1 }
          experience2={ obj2 }
          education='BSc Computer Science - ABC University (2017-2021)'
          skills = 'React - Next.js - Tailwind CSS, Node.js - Express.js - MongoDB, REST APIs & GraphQL, Git - Docker - AWS'
        />
      </div>
      {/* Ensure to pass the same id to the target component */}
      <button
        onClick={() =>reactToPrintFn()}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
      >
        Save as PDF
      </button>
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
