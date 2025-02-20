import React from 'react';

interface ResumeProps {
    name: string;
    title: string;
    image: string;
    email: string;
    phone: string;
    location: string;
    experience: string;
    education: string;
    skills: string;
}

const Report: React.FC<ResumeProps> = ({ 
  name, 
  title, 
  image, 
  email, 
  phone, 
  location, 
  experience, 
  education, 
  skills 
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full h-full mx-auto bg-blue-100 shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-44 p-4">
          <div className="flex items-center mt-10">
            <div className="rounded-full border-4 border-white">
              <div className="rounded-full border-4 border-blue-500">
                <img className="w-36 h-36 rounded-full border-4 border-white" src={image} alt={`${name}'s avatar`} />
              </div>
            </div>
            <div className="ml-4 text-white">
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-md">{title}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start mt-10 gap-10 p-4">
          <div className="flex flex-col mt-10 gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold">Experience</h2>
              <p> {experience} </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold mt-2">Education</h2>
              <p> {education} </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold mt-2">Skills</h2>
              <p> {skills} </p>
            </div>
          </div>
          <div className='p-4'>
            <div className="mb-4">
              <h3 className="text-gray-900 font-bold">Contact Information </h3>
              <p className="text-gray-600"><strong>Email:</strong> {email} </p>
              <p className="text-gray-600"><strong>Phone:</strong> {phone} </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-bold"> Location </h3>
              <p className="text-gray-600"> {location} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
