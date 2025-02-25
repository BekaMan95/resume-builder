import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faBriefcase, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";

interface ResumeProps {
    name: string;
    title: string;
    image: string;
    email: string;
    phone: string;
    location: string;
    experience1_position: string;
    experience1_company: string;
    experience1_details: string;
    experience2_position: string;
    experience2_company: string;
    experience2_details: string;
    education: string;
    skills: string;
}


const Resume: React.FC<ResumeProps> = ({
    name, 
    title, 
    image, 
    email, 
    phone, 
    location, 
    experience1_position,
    experience1_company,
    experience1_details,
    experience2_position,
    experience2_company,
    experience2_details,
    education,
    skills
}) => {
  const skillsList = skills.split(",").map((item: string) => item.trim());
  const educationList = education.split(",").map((item: string) => item.trim());

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Resume Card */}
      <div
        className="bg-white w-[210mm] h-[297mm] shadow-xl rounded-lg p-8 font-sans border border-gray-300"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Header Section */}
        <div className="text-center flex flex-col items-center mt-32">
            <div className="rounded-full border-4 border-white">
              <div className="rounded-full border-8 border-blue-500">
                <img className="w-48 h-48 rounded-full border-4 border-white" src={image} alt={`${name}'s avatar`} />
              </div>
            </div>
          <h1 className="text-4xl font-bold text-gray-800"> {name} </h1>
          <p className="text-gray-500 text-lg"> {title} </p>
          <div className="flex justify-center gap-4 mt-2 text-gray-600">
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-500" />
              { email }
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-500" />
              { phone }
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-500" />
              { location }
            </p>
          </div>
        </div>

        <hr className="my-4 border-blue-500" />

        {/* Experience Section */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-yellow-500" />
            Experience
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            <li>
              <strong> {experience1_position} </strong> - {experience1_company}
              <p className="text-sm text-gray-500"> {experience1_details} </p>
            </li>
            <li>
              <strong> {experience2_position} </strong> - {experience2_company}
              <p className="text-sm text-gray-500"> {experience2_details} </p>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-blue-500" />
            Education
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            {
                educationList.map((edu_item: string) => (
                    <li> {edu_item} </li>
                ))
            }
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            <FontAwesomeIcon icon={faCode} className="mr-2 text-red-500" />
            Skills
          </h2>
          <ul className="list-disc pl-6 text-gray-600 mt-2">
            {
                skillsList.map((skill: string) => (
                    <li> {skill} </li>
                ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
