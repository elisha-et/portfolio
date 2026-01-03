export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  impactSummary: string;
  context: string;
  bullets: string[];
  techStack: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-3",
    role: "Teaching Fellow | College Algebra",
    company: "National Education Opportunity Network (NEON)",
    location: "Remote",
    startDate: "January 2025",
    endDate: "Present",
    impactSummary:
      "Supported 58 accelerated-path high school students in college-level algebra, contributing to a 96% course pass rate through equity-focused, student-centered instruction.",
    context:
      "Part-time teaching fellowship through NEON’s equity initiative, in partnership with Howard University and Khan Academy, focused on expanding access to college-level coursework for high-achieving high school students.",
    bullets: [
      "Taught college algebra to 58 accelerated-path high school students, emphasizing conceptual mastery and problem-solving skills.",
      "Designed customized, student-centered lesson plans aligned with college-level algebra standards.",
      "Applied equity-focused and innovative teaching strategies to address diverse learning styles, increasing student engagement and comprehension by 30%.",
      "Provided academic support and mentorship to help students succeed in rigorous college-level coursework, resulting in a 96% pass rate.",
    ],
    techStack: [
      "College Algebra",
      "Curriculum Design",
      "Equity-Centered Instruction",
      "Student Assessment",
      "Remote Teaching",
    ],
  },
  {
    id: "exp-2",
    role: "Software Developer Intern | Workspace – Gmail Intelligence",
    company: "Google",
    location: "Sunnyvale, CA",
    startDate: "May 2025",
    endDate: "August 2025",
    impactSummary:
      "Improved multilingual intent detection in Gmail by boosting recall by 16% and enabling support for 7 priority non-English languages at production scale.",
    context:
      "Summer internship on the Gmail Intelligence team focused on expanding scheduling intent detection to non-English languages using large-scale ML evaluation, data pipelines, and production monitoring.",
    bullets: [
      "Evaluated an encoder-only transformer text-classification model in production using precision-recall and AUC-PR metrics, establishing baseline performance for non-English traffic.",
      "Fine-tuned the model on translated datasets, improving classification precision by 1% and recall by 16% for scheduling intent detection.",
      "Built and executed an end-to-end data pipeline to translate annotated Gmail data in RecordIO format into 7 P0 languages (es, fr, ja, de, ko, it, pt) for model training and evaluation.",
      "Designed a monitoring dashboard to track per-language traffic and performance, handling over 200K QPS.",
      "Added an experimental feature flag to safely enable and test scheduling intent detection for non-English languages in production.",
    ],
    techStack: [
      "Python",
      "C++",
      "Machine Learning",
      "Transformer Models",
      "Data Pipelines",
      "Production Monitoring",
      "Large-Scale Infrastructure",
    ],
  },
];
