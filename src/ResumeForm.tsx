import { useResumeStore } from "./Store";

interface ResumeFormProps {
  prevStep: () => void;
  nextStep: () => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ prevStep, nextStep }) => {
  const { name,
    title, email, 
    image, phone, 
    location, education, 
    skills, experience1_position,
    experience1_company, experience1_details,
    experience2_company, experience2_position,
    experience2_details, updateField } = useResumeStore();

  return (
    <div className="flex flex-col max-w-[700px] min-h-screen p-6">
      {/* Input Form */}
      {/* Name */}
      <div>
        <label className="block text-gray-700 font-medium">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => updateField("name", e.target.value)} placeholder="Full Name" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Title */}
      <div>
        <label className="block text-gray-700 font-medium">Title</label>
        <input type="text" name="title" value={title} onChange={(e) => updateField("title", e.target.value)} placeholder="Job Title" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Image */}
      <div>
        <label className="block text-gray-700 font-medium">Image Link</label>
        <input type="text" name="image" value={image} onChange={(e) => updateField("image", e.target.value)} placeholder="Profile Image URL" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Email & Phone (Side by Side) */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input type="email" name="email" value={email} onChange={(e) => updateField("email", e.target.value)} placeholder="Email Address" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Phone Number</label>
          <input type="tel" name="phone" value={phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="Phone Number" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-gray-700 font-medium">Address</label>
        <input type="text" name="location" value={location} onChange={(e) => updateField("location", e.target.value)} placeholder="Your Location" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Experience I & II */}
      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold text-gray-800">Experience I</h3>
        
        <div className="mt-2">
          <label className="block text-gray-700 font-medium">Position</label>
          <input type="text" name="experience1_position" value={experience1_position} onChange={(e) => updateField("experience1_position", e.target.value)} placeholder="Position" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mt-2">
          <label className="block text-gray-700 font-medium">Company</label>
          <input type="text" name="experience1_company" value={experience1_company} onChange={(e) => updateField("experience1_company", e.target.value)} placeholder="Company" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mt-2">
          <label className="block text-gray-700 font-medium">Details</label>
          <textarea name="experience1_details" value={experience1_details} onChange={(e) => updateField("experience1_details", e.target.value)} placeholder="Brief description" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-xl font-semibold text-gray-800">Experience II</h3>
        
        <div className="mt-2">
          <label className="block text-gray-700 font-medium">Position</label>
          <input type="text" name="experience2_position" value={experience2_position} onChange={(e) => updateField("experience2_position", e.target.value)} placeholder="Position" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mt-2">
          <label className="block text-gray-700 font-medium">Company</label>
          <input type="text" name="experience2_company" value={experience2_company} onChange={(e) => updateField("experience2_company", e.target.value)} placeholder="Company" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mt-2">
          <label className="block text-gray-700 font-medium">Details</label>
          <textarea name="experience2_details" value={experience2_details} onChange={(e) => updateField("experience2_details", e.target.value)} placeholder="Brief description" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
      </div>

      {/* Education */}
      <div>
        <label className="block text-gray-700 font-medium">Education</label>
        <textarea name="education" value={education} onChange={(e) => updateField("education", e.target.value)} placeholder="Education Details (Comma Separated)" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-gray-700 font-medium">Skills</label>
        <input type="text" name="skills" value={skills} onChange={(e) => updateField("skills", e.target.value)} placeholder="Skills (Comma Separated)" className="w-full text-gray-600 mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-6">
        <button
          onClick={prevStep}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Go back
        </button>
        <button
          onClick={nextStep}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ResumeForm;
