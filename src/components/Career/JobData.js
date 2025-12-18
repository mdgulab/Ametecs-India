export const jobData= [
  {
    id: "JOB001",
    title: "Frontend Engineer (React)",
    department: "Engineering",
    location: "Hyderabad",
    experience: "2-5",
    type: "Full-time",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    description:
      "Build enterprise dashboards and user interfaces for AI-driven platforms.",
  },
  {
    id: "JOB002",
    title: "Backend Engineer (Node.js)",
    department: "Engineering",
    location: "Bangalore",
    experience: "3-6",
    type: "Full-time",
    skills: ["Node.js", "MongoDB", "REST APIs"],
    description:
      "Design scalable backend services and APIs for fintech platforms.",
  },
  {
    id: "JOB003",
    title: "AI / ML Engineer",
    department: "AI & Data",
    location: "Remote",
    experience: "3-7",
    type: "Full-time",
    skills: ["Python", "ML", "Speech Analytics"],
    description:
      "Work on AI automation, speech analytics, and intelligent systems.",
  },

  ...Array.from({ length: 17 }).map((_, i) => ({
    id: `JOB${i + 4}`,
    title: [
      "UI/UX Designer",
      "DevOps Engineer",
      "HR Recruiter",
      "Digital Marketing Executive",
      "Product Manager",
    ][i % 5],
    department: ["Design", "Engineering", "HR", "Marketing", "Product"][i % 5],
    location: ["Hyderabad", "Remote", "Pune", "Bangalore"][i % 4],
    experience: ["0-2", "2-5", "5-8"][i % 3],
    type: "Full-time",
    skills: ["Communication", "Problem Solving", "Tools"],
    description:
      "Join Ametecs to work on enterprise software, AI platforms, and digital solutions.",
  })),
];
