// lib/data/skills.ts
export type SkillCategory = {
  id: string;
  name: string;
  icon: string; // simple emoji or SVG path placeholder
  skills: { name: string; level: "expert" | "advanced" | "intermediate" | "proficient"; proficiency: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: "expert", proficiency: 90 },
      { name: "JavaScript (ES6+)", level: "proficient", proficiency: 75 },
      { name: "Java", level: "advanced", proficiency: 85 },
      { name: "SQL", level: "advanced", proficiency: 88 },
      { name: "C", level: "proficient", proficiency: 75 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "⚛",
    skills: [
      { name: "React.js", level: "expert", proficiency: 92 },
      { name: "Next.js", level: "advanced", proficiency: 88 },
      { name: "HTML / CSS", level: "expert", proficiency: 95 },
      { name: "Tailwind CSS", level: "advanced", proficiency: 90 },
      { name: "Gradio", level: "proficient", proficiency: 78 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: "🛠",
    skills: [
      { name: "Node.js", level: "advanced", proficiency: 88 },
      { name: "Express.js", level: "advanced", proficiency: 85 },
      { name: "Flask", level: "proficient", proficiency: 78 },
      { name: "REST API Design", level: "expert", proficiency: 90 },
    ],
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "📱",
    skills: [
      { name: "Flutter", level: "intermediate", proficiency: 65 },
    ],
  },
  {
    id: "database",
    name: "Storage",
    icon: "🗄",
    skills: [
      { name: "MongoDB", level: "advanced", proficiency: 88 },
      { name: "MySQL", level: "proficient", proficiency: 78 },
      { name: "PostgreSQL", level: "advanced", proficiency: 82 },
      { name: "Azure Blob Storage", level: "intermediate", proficiency: 60 },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    icon: "☁️",
    skills: [
      { name: "Microsoft Azure", level: "intermediate", proficiency: 60 },
      { name: "Google Cloud", level: "proficient", proficiency: 70 },
      { name: "Docker", level: "proficient", proficiency: 75 },
      { name: "Git / GitHub", level: "expert", proficiency: 92 },
      { name: "Linux", level: "proficient", proficiency: 75 },
    ],
  },
  {
    id: "ai-data",
    name: "AI & Data Tools",
    icon: "🧠",
    skills: [
      { name: "OpenCV", level: "proficient", proficiency: 75 },
      { name: "NumPy", level: "advanced", proficiency: 85 },
      { name: "Pandas", level: "advanced", proficiency: 85 },
      { name: "PyTorch", level: "proficient", proficiency: 75 },
      { name: "Scikit-learn", level: "proficient", proficiency: 75 },
      { name: "Matplotlib", level: "proficient", proficiency: 75 },
      { name: "Model Integration & Deployment", level: "intermediate", proficiency: 65 },
    ],
  },
];
