// lib/data/projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tag: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  details?: {
    overview: string;
    features: string[];
    challenges: string[];
    outcomes: string[];
  };
};

export const projects: Project[] = [
  {
    id: "nan-attendance",
    title: "NAN Attendance System",
    description:
      "A proxy-resistant attendance system leveraging WiFi Aware (NAN) to detect nearby devices and mark attendance based on physical proximity — no internet required.",
    tag: "Android · IoT",
    stack: ["Android", "Java", "Kotlin", "WiFi Aware (NAN API)", "SQLite", "Device-to-Device Protocols"],
    details: {
      overview: "Designed and developed a proxy-resistant attendance system that leverages WiFi Aware (NAN – Neighbor Awareness Networking) to detect nearby devices without requiring an internet connection. The system identifies students based on proximity, enabling automatic and reliable attendance marking within a defined range.",
      features: [
        "Proximity-based device detection via WiFi Aware (NAN API)",
        "Automatic attendance marking based on physical presence",
        "Fully offline, device-to-device communication",
        "Range-based validation to prevent proxy attendance",
        "On-device data storage with SQLite",
      ],
      challenges: [
        "Proxy attendance — students marking attendance for absent peers",
        "Dependence on manual or QR-based systems prone to misuse",
        "Need for offline functionality in controlled environments",
        "Ensuring accurate proximity detection without GPS",
      ],
      outcomes: [
        "Built a working prototype that detects nearby devices and logs attendance based on physical presence",
        "Reduced chances of proxy attendance through range-based validation",
        "Demonstrated feasibility of offline, device-to-device attendance systems",
        "Provided a foundation for scalable smart attendance solutions",
      ],
    },
  },
  {
    id: "leadsync-crm",
    title: "LeadSync CRM Platform",
    description:
      "A CRM platform designed to centralize lead management and streamline the sales workflow — with intelligent prioritization, team collaboration, and analytics to improve conversions.",
    tag: "CRM · Full Stack",
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Chart.js", "Docker"],
    details: {
      overview: "LeadSync is a CRM platform designed to centralize lead management and streamline the sales workflow. It collects leads from multiple sources (Instagram, website forms, manual entry), enables structured tracking and follow-ups, and provides analytics to improve conversion and revenue visibility. The system is built to reflect real-world business workflows with scalable and practical design.",
      features: [
        "Unified lead dashboard collecting leads from Instagram, website forms, and manual entry",
        "Intelligent lead prioritization based on customer intent and potential value",
        "Lead tracking across pipeline stages with activity logs and follow-up reminders",
        "Shared team inbox for coordinated communication and updates",
        "Analytics dashboard for revenue tracking, conversion rates, and lead source performance",
        "Role-based access control — Admin (full control), Manager (team-level), User (limited)",
        "Modular, scalable architecture designed for SME cost-effectiveness and future expansion",
      ],
      challenges: [
        "Managing leads from multiple platforms in a unified system",
        "Designing intelligent prioritization logic for better conversions",
        "Building a secure multi-user system with role hierarchy",
        "Providing meaningful analytics for business insights",
      ],
      outcomes: [
        "Developed a working prototype demonstrating real-world CRM usability",
        "Improved visibility into lead flow and revenue performance",
        "Enabled structured collaboration across users",
        "Created a scalable foundation for business-oriented CRM systems",
      ],
    },
  },
  {
    id: "log-failure-analyzer",
    title: "Log Failure Analyzer",
    description:
      "An AI-assisted deployment diagnostics platform that analyzes logs to identify CI/CD and container failures, providing actionable solutions to resolve issues quickly.",
    tag: "AI · DevOps",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions", "LLM APIs"],
    details: {
      overview: "An AI-assisted deployment diagnostics platform that analyzes deployment logs to identify failures in CI/CD pipelines and containerized environments. Beyond detection, it provides clear, actionable solutions to help resolve issues quickly. The system includes secure authentication, user-specific history tracking, and a Dockerized architecture for cloud-ready deployment.",
      features: [
        "AI-powered log analysis and failure detection",
        "Automated solution suggestions for detected errors",
        "CI/CD and container diagnostics (build, runtime, deployment issues)",
        "Auth.js (NextAuth) authentication with user-specific history tracking",
        "Dockerized, cloud-ready architecture",
        "RESTful APIs with Azure service integration",
      ],
      challenges: [
        "Parsing and standardizing diverse and unstructured deployment logs",
        "Generating accurate and understandable solutions using AI",
        "Ensuring reliable diagnostics across different CI/CD environments",
        "Designing a scalable, containerized deployment workflow",
      ],
      outcomes: [
        "Simplified debugging by converting raw logs into readable insights and solutions",
        "Reduced time required to identify and fix deployment issues",
        "Built a modular and production-ready system architecture",
        "Enabled consistent diagnostics across environments",
      ],
    },
  },
  {
    id: "resource-hub",
    title: "Resource Hub",
    description:
      "A full-stack MERN community resource sharing platform with secure authentication, Azure cloud deployment, and containerized services for scalable access.",
    tag: "Full Stack · MERN · Cloud",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Auth.js (NextAuth)", "Argon2", "Microsoft Azure", "Docker", "REST APIs"],
    details: {
      overview: "Resource Hub is a full-stack community resource sharing platform built using the MERN stack, enabling users to securely list, request, and borrow resources through a structured backend workflow. The system is deployed on Microsoft Azure, with cloud-based storage and a containerized setup for reliable and scalable access.",
      features: [
        "Secure authentication using Auth.js (NextAuth) with Argon2 password hashing",
        "Resource listing, requesting, and borrowing workflow",
        "Image and file storage using Azure Blob Storage",
        "RESTful API-driven backend architecture",
        "Cloud deployment on Azure Virtual Machine",
        "Containerized services using Docker",
      ],
      challenges: [
        "Designing a secure and scalable multi-user resource sharing system",
        "Integrating Azure cloud services (VM + Blob Storage) into the application",
        "Ensuring strong authentication and data security with modern hashing",
        "Managing resource availability and user interactions efficiently",
      ],
      outcomes: [
        "Built a fully functional full-stack platform with real-world usability",
        "Successfully deployed and managed the application on Azure VM",
        "Implemented scalable cloud storage for handling user-uploaded content",
        "Developed a clean and maintainable MERN-based architecture",
      ],
    },
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description:
      "A cross-platform mobile task management application built using Flutter to help organize daily tasks efficiently with offline support and cloud sync.",
    tag: "Mobile · Flutter",
    stack: ["Flutter", "Dart", "SQLite", "Hive", "Firebase", "REST APIs"],
    details: {
      overview: "A cross-platform mobile task management application built using Flutter to help organize daily tasks efficiently. The app supports offline usage, real-time synchronization, and reminders, making it practical for managing tasks in everyday scenarios.",
      features: [
        "Create, edit, and delete tasks with ease",
        "Set deadlines and manage task priorities",
        "Offline support with local data storage",
        "Cloud synchronization for data consistency across sessions",
        "Push notifications for reminders and deadlines",
        "Clean and intuitive user interface for smooth navigation",
      ],
      challenges: [
        "Ensuring seamless offline-to-online data synchronization",
        "Managing local storage and cloud sync consistency",
        "Implementing reliable push notification scheduling",
        "Designing a simple yet effective mobile user experience",
      ],
      outcomes: [
        "Built a functional and reliable mobile application for daily task management",
        "Achieved smooth performance across different devices",
        "Enabled consistent task tracking with offline capability",
        "Improved personal productivity through practical usage",
      ],
    },
  },
];
