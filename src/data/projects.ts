export interface Project {
  id: string;
  name: string;
  tagline: string;
  date: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  liveLink?: string;
  githubLink: string;
  image: string;
  screenshots?: string[];
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    name: "TutorLink",
    tagline: "AI-enhanced peer tutoring platform for students",
    date: "December 2025",
    description: "TutorLink is a full-stack web platform that connects academically verified tutors with students, streamlining access to peer support. The system combines modern web technologies with AI-powered verification to ensure trust and quality in tutor profiles.",
    problem: "Many students struggle to find reliable peer tutors, and manual verification of tutor credentials is time-consuming and error-prone.",
    solution: "Built a scalable platform with React frontend, FastAPI backend, and role-based authentication. Integrated the OpenAI API for automated transcript verification, drastically reducing manual review overhead.",
    role: "Lead full-stack developer — designed the UI/UX, implemented authentication and database models, and built the AI-powered verification workflow.",
    techStack: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "OpenAI API"
    ],
    githubLink: "https://github.com/elisha-et/TutorLink",
    image: "/images/tutorlink.png"
  },
  {
    id: "proj-2",
    name: "GreenGuide",
    tagline: "Intelligent iOS waste classification with environmental insights",
    date: "November 2025",
    description: "GreenGuide is a full-stack iOS application that classifies waste using state-of-the-art AI models and provides users with actionable environmental impact metrics like CO₂, energy, and water savings. It combines a responsive SwiftUI frontend with a scalable FastAPI backend powered by large NVIDIA AI models for real-time image analysis.",
    problem: "Proper waste sorting is difficult for many users and existing mobile solutions lack accuracy and meaningful feedback on environmental impact.",
    solution: "Built an end-to-end iOS app with SwiftUI and SwiftData for persistence, and a FastAPI backend hosting three NVIDIA AI classification models that deliver fast, accurate predictions and real-time environmental savings metrics.",
    role: "Full-stack developer — architected the iOS app, designed and deployed the backend, integrated AI models, and optimized performance for concurrent usage.",
    techStack: [
      "Swift",
      "SwiftUI",
      "SwiftData",
      "FastAPI",
      "Python",
      "NVIDIA AI Models",
      "Render.com"
    ],
    githubLink: "https://github.com/elisha-et/greenguide-ios",
    image: "/images/greenguide_dark.png"
  },
  {
    id: "proj-3",
    name: "PlanetHunters",
    tagline: "AI-powered exoplanet detection using NASA Kepler data",
    date: "August 2023",
    description:
      "PlanetHunters is a machine learning project focused on detecting exoplanets using light-brightness (transit photometry) data from NASA’s Kepler space telescope. The system analyzes subtle dips in stellar brightness to identify potential exoplanet candidates with high precision.",
    problem:
      "Identifying exoplanets from Kepler’s massive and noisy light-curve datasets is computationally intensive and difficult to do manually, requiring robust pattern recognition and classification techniques.",
    solution:
      "Developed an encoder-only transformer-based classification pipeline combined with traditional machine learning models to analyze Kepler light-curve data and accurately classify exoplanet candidates.",
    role: " Developer — handled data preprocessing, feature engineering, model design, training, evaluation, and performance validation.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "TensorFlow",
      "Google Colaboratory",
    ],
    githubLink: "https://github.com/elisha-et/PlanetHunters",
    image: "/images/planethunters.png",
  },
];
