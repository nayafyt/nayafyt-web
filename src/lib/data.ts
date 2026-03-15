export const personalInfo = {
  name: "Naya Fytali",
  title: "Software Engineer",
  location: "Athens, Greece",
  email: "contact@nayafyt.com",
  linkedin: "https://linkedin.com/in/nayafytali",
  github: "https://github.com/nayafyt",
};

export const skills = {
  languages: ["Java", "Python", "SQL", "C#"],
  frameworks: ["Spring Boot", ".NET Core", "React", "Angular"],
  tools: ["Git", "Docker", "Jira", "Confluence"],
};

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Netcompany",
    location: "Athens, Greece",
    period: "Jan 2025 – Present",
    note: "Promoted from Junior Software Engineer, Jan 2026",
    points: [
      "Develop and maintain enterprise web applications using Java and React",
      "Contribute to feature planning and translate business requirements into technical specifications",
      "Diagnose and resolve performance bottlenecks, improving system reliability and usability",
      "Collaborate cross-functionally with developers and testers to deliver on project milestones",
    ],
  },
  {
    role: "Research Intern",
    company: "INSANE Group, NCSR Demokritos",
    location: "Athens, Greece",
    period: "Nov 2025 – Present",
    points: [
      "Generalized a Physics-Guided Neural Network pipeline into a framework-agnostic implementation, enabling new physics problems to be onboarded without modifying core logic",
      "Decoupled data preprocessing, model training, and evaluation stages to improve maintainability and reusability",
    ],
    technologies: ["Python", "PyTorch", "Physics-informed ML"],
  },
];

export const education = [
  {
    institution: "Athens University of Economics and Business (AUEB)",
    degree: "BSc in Information Technology – Major in Cybersecurity",
    period: "2020 – 2024",
    note: "High Rated Enrollment (Top 10%) – Grade: 7.32/10",
  },
  {
    institution: "Geitonas School, Greece",
    degree: "High School Diploma – Economics & Computer Science",
    period: "2017 – 2020",
    note: "Awards of Excellence, UNESCO ASPnet Member, European Student Parliament of Science",
  },
];

export const projects = [
  {
    title: "Physics-guided Neural Network Pipeline",
    tech: "Python, PyTorch, Physics-informed ML",
    description:
      "Framework-agnostic inverse design pipeline enabling new physics problems to be onboarded without modifying core logic.",
    link: "https://github.com/nayafyt/Physics-guided-Neural-Network-Inverse-Design-Pipeline",
  },
  {
    title: "IMDB Review Classifier",
    tech: "Python, Scikit-learn, NLP",
    description: "Sentiment analysis using TF-IDF and Logistic Regression.",
    link: "https://github.com/nayafyt/IMDB-Review-Classifier",
  },
  {
    title: "Reversi Game Implementation",
    tech: "Python",
    description: "Console-based game with heuristic AI logic.",
    link: "https://github.com/nayafyt/Reversi",
  },
  {
    title: "Technico E-Shop",
    tech: ".NET Core, SQL Server, Angular",
    description: "Full-stack e-commerce app built during Accenture training.",
    link: "https://github.com/nayafyt/Technico_BackEnd",
  },
];

export const volunteer = [
  {
    org: "The Smile of the Child",
    role: "Student Volunteer",
    period: "2023 – Present",
    description:
      "Supporting initiatives that promote the well-being and safety of children across Greece.",
  },
  {
    org: "HELMEPA",
    role: "Hellenic Marine Environment Protection Association",
    description:
      "Contributed to marine environmental protection activities and awareness campaigns.",
  },
];

export const languages = [
  { name: "Greek", level: "Native speaker" },
  { name: "English", level: "Full professional proficiency" },
  { name: "French", level: "Basic knowledge" },
];
