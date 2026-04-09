export const personalInfo = {
  name: "Naya Fytali",
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
    period: "Nov 2025 – Mar 2026",
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
    tech: ["Python", "PyTorch", "Physics-informed ML"],
    description:
      "Framework-agnostic inverse design pipeline enabling new physics problems to be onboarded without modifying core logic.",
    highlight:
      "Learned how to decouple ML pipelines so that swapping a physics model doesn't break the whole system.",
    link: "https://github.com/nayafyt/Physics-guided-Neural-Network-Inverse-Design-Pipeline",
  },
  {
    title: "IMDB Review Classifier",
    tech: ["Python", "Scikit-learn", "NLP"],
    description:
      "Sentiment analysis comparing TF-IDF + Logistic Regression against bag-of-words approaches on 50k reviews.",
    highlight:
      "First deep dive into NLP - discovered how much feature engineering matters before any model tuning.",
    link: "https://github.com/nayafyt/IMDB-Review-Classifier",
  },
  {
    title: "Reversi — Online",
    tech: ["React", "Java", "Spring Boot"],
    description:
      "Play Reversi online against an intelligent computer opponent with adjustable difficulty levels.",
    highlight:
      "Full-stack implementation with minimax AI, online UI with real-time game state, and game setup wizard.",
    link: "/projects/reversi",
  },
  {
    title: "Technico E-Shop",
    tech: ["C#", ".NET Core", "SQL Server", "Angular"],
    description:
      "Full-stack e-commerce platform with auth, inventory management, and order processing.",
    highlight:
      "My first .NET and Angular project - connected all the dots from database schema to UI.",
    link: "https://github.com/nayafyt/Technico_BackEnd",
  },
];

export const currently = [
  {
    icon: "FlaskConical",
    label: "Researching",
    text: "Physics-guided neural networks",
    rotation: "-rotate-2",
  },
  {
    icon: "Layers",
    label: "Building",
    text: "Enterprise Java & React apps",
    rotation: "rotate-1",
  },
  {
    icon: "Workflow",
    label: "Learning",
    text: "Modular ML pipeline design",
    rotation: "rotate-2",
  },
  {
    icon: "Compass",
    label: "Interested in",
    text: "Where engineering meets science",
    rotation: "-rotate-1",
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
