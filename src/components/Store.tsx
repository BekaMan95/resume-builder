import { create } from "zustand";

// Define the state type
interface ResumeState {
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
  updateField: (field: keyof ResumeState, value: string) => void;
}

// Create the Zustand store
export const useResumeStore = create<ResumeState>((set) => ({
  name: "John Doe",
  title: "Full-Stack Developer",
  image: "https://media.oliverpeoples.com/op_stories/51_Brunello2023/OPs_W16_Brunello23_01_D.jpg",
  email: "johndoe@example.com",
  phone: "+1 234 567 890",
  location: "Sacremento, CA",
  experience1_position: 'Junior Python developer',
  experience1_company: 'Amazon',
  experience1_details: 'responsible for writing clean, readable and maintainable python code with unit test.',
  experience2_position: 'Web Development Internship',
  experience2_company: 'Bloomberg',
  experience2_details: 'responsible for writing clean, readable and maintainable JavaScript code with unit test.',
  education: "BSc Computer Science | ABC University (2015-2019)",
  skills: "React, TypeScript, Tailwind, Node.js, MongoDB",
  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),
}));
