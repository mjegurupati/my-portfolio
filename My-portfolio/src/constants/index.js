import AI_assistant from "../assets/projects/AI_assistant.jpg";
import Dashboard from "../assets/projects/Dashboard.jpg";
import Signup_image from "../assets/projects/Signup_image.jpg";
import Remedy from "../assets/projects/Remedy.jpg";

export const HERO_CONTENT = `Hello there, I'm a data enthusiast on a mission to transform raw data into actionable stories. I believe every question deserves an insightful answer—one backed by high-quality data. With a strong foundation in data warehousing and analysis, I thrive on solving complex business challenges and crafting innovative solutions that promote growth and inspire change.`;

export const ABOUT_TEXT = `It all began during the lockdown when I decided to be productive. That pivotal moment led me to a data science internship where I delved into Machine Learning with Python, data retrieval with SQL, and explored the world of neural networks—all to harness the power of data-driven decisions. My experience at FAU further fueled my passion as I worked on innovative projects, including an AI personalized medical assistant designed to enhance longevity and reduce aging effects—a winning idea. As a junior software engineer at Netcracker Technology , I deepened my technical expertise and gained invaluable corporate insights. Brimming with energy and creativity, I view every challenge as an opportunity for growth and believe that learning is a continuous journey. Outside of work, I'm a pet lover, an avid traveler, and a great foodie!`;

export const EXPERIENCES = [
    {
    year: "Aug 2024 - Present",
    role: "Teaching Assistant",
    company: "Florida Atlantic University",
    description: `Teaching undergraduate students algorithm building concepts that are foundation for computer science, data analysis and programming.`,
    technologies: ["Statistics", "Algorithmic Building", "Mentorship", "Growth-mindset"],
  },
  {
    year: "May 2025 - Aug 2025 ",
    role: "AI-Data Scientist Intern",
    company: "ModMed",
    description: `Developed agentic workflows using LangGraph to triage negative user feedback and enhance model performance for ModMed’s AI Scribe, resulting in improved overall user experience.`,
    technologies: ["Python","Spark","Agentic AI","RAG","LLMs","Databricks","AWS"],
  },
  {
    year: "Apr 2022 - Jul 2023",
    role: "Software Engineer",
    company: "Netcracker Technology Solutions",
    description: `Managed telecom billing issues by analyzing PSUPICE tickets and replicating production issues related to billing and rating in a local test environment.Analyzed financial and billing discrepancies to identify root causes, implemented key fixes in C++ while contributing to reduced revenue leakage and improved operational accuracy.
`,
    technologies: ["C++", "PL/SQL", "Java", "JIRA", "Unix"],
  },
  {
    year: "Aug 2020 - Sep 2021",
    role: "Data Analyst",
    company: "Sennight Technologies pvt ltd",
    description:"Analyzed healthcare ERP data to uncover patterns in patient flow, billing, and resource utilization using SQL and Python. Built Tableau dashboards and cleaned over 100K records to enhance reporting quality and migration accuracy.",
    technologies: ["Python","SQL", "Tableau", "ETL"],
  },
  {
    year: "Jun 2020 - Jul 2020",
    role: "Data Science Intern",
    company: "TITA Digithon",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "SQL", "Machine Learning", "Deep Learning"],
  },
];

export const PROJECTS = [
  {
    title: "Personalized AI medical Assistant",
    image: AI_assistant,
    description:
      "A personalized healthcare assistant that can tailor nutritional advice based on 70% medical history and 30% family history.",
    technologies: ["Tailwind CSS", "NextJs", "RAG Model", "LLM"],
  },
  {
    title: "Real estate Insights using Tableau",
    image: Dashboard,
    description:
      "A Tableau Dashboard for analysing potential investments according to seasonal trends in house prices .",
    technologies: ["Excel", "Tableau"],
  },
  {
    title: "Remedy",
    image: Remedy,
    description:
    "A recommendation chatbot for delivering recommendation to patients in case of emergencies based on constraints such as location, treatment, surgery availability.",
    technologies: ["Python", "NLP"],
  },
  {
    title: "Tutor Pro",
    image: Signup_image,
    description:
      "A Teaching management portal for North University to manage TA applications for Applicants, Administrators, Committee members, Instructors.",
    technologies: ["HTML", "CSS", "Javscript", "servlets", "mySQL"],
  },
];

export const CONTACT = {
  address: "5555 N Military trl, Boca raton, Florida ",
  phoneNo: "",
  email: "mjegurupati2023@fau.edu",
};
