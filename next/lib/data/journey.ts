// lib/data/journey.ts

export type Milestone = {
  id: string;
  company: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export const journeyData: Milestone[] = [
  {
    id: "m1",
    company: "Cisco Networking",
    title: "Cyber Security Intern",
    date: "May 2025 – Jul 2025",
    description: "Worked on network security and threat detection using Packet Tracer, gaining hands-on experience with firewalls, intrusion prevention systems, and cybersecurity protocols.",
    tags: ["Security", "Networking", "Packet Tracer"],
  },
  {
    id: "m2",
    company: "Mindkraft '25",
    title: "Event Coordinator",
    date: "Jan 2025 – Mar 2025",
    description: "Organized and conducted a hands-on RC robot challenge where participants debugged pre-written code to successfully navigate a course using IoT-enabled hardware.",
    tags: ["IoT", "Leadership", "Robotics"],
  },
  {
    id: "m3",
    company: "Iconix Solution Ltd",
    title: "Web Development Intern",
    date: "May 2024 – Jul 2024",
    description: "Developed a MERN-based web application with a scalable backend architecture using Node.js and Express, implementing secure REST APIs and database-driven workflows.",
    tags: ["MERN", "Node.js", "REST APIs"],
  },
];
