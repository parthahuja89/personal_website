// Experience data
export interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "LabCorp",
    period: "Jan 2024 – Present",
    achievements: [
      "Developed a .NET API to automate order confirmation emails, handling hundreds of daily notifications and reducing manual effort by 95%.",
      "Migrated Angular application to Single Sign-On using Okta, enhancing security and improving the login experience for 10,000+ users.",
      "Participated in design discussions for migrating legacy apps to a modern Docker-based architecture using OpenShift and IBM API Connect.",
      "Integrated WCAG-compliant accessibility scans into Jenkins pipelines, reducing manual review effort and improving compliance.",
      "Automated API gateway subscription renewals using Python, eliminating recurring manual tasks and boosting developer productivity.",
    ],
    technologies: [".NET", "Angular", "Okta", "Docker", "OpenShift", "Python", "Jenkins"],
  },
  {
    title: "Software Engineer Intern",
    company: "LabCorp",
    period: "May 2023 – Aug 2023",
    achievements: [
      "Developed a Microsoft Teams chatbot using Azure APIs and Python to deliver Jenkins build notifications, improving issue tracking.",
      "Built a React and Node.js MVP allowing users to securely view DNA test results through interactive visualizations.",
      "Enhanced PostgreSQL (Drizzle ORM) query performance for faster result retrieval and improved UX by reducing load times by 8%.",
      "Engineered a Python data pipeline to normalize raw DNA test data, accelerating downstream analysis and improving classification accuracy.",
    ],
    technologies: ["React", "Node.js", "Python", "Azure", "PostgreSQL", "Drizzle"],
  },
  {
    title: "Software Engineer Intern",
    company: "Citrix",
    period: "May 2020 – Aug 2020",
    achievements: [
      "Built a Jenkins plugin to automate testing/staging of dependency upgrades, reducing manual maintenance overhead.",
      "Contributed to an Azure-hosted evaluation platform that assigns efficiency scores based on scalability and execution time.",
      "Integrated Azure Kubernetes Service into a serverless deployment pipeline, cutting cloud resource usage by 20%.",
    ],
    technologies: ["Azure", "Kubernetes", "Jenkins", "CI/CD"],
  },
  {
    title: "Software Engineer",
    company: "Willis Towers Watson",
    period: "Aug 2019 – May 2020",
    achievements: [
      "Developed a .NET API to encrypt and store payment information, enabling secure and seamless user transactions.",
      "Refactored session management to optimize login performance, achieving a 500ms reduction in page load time.",
      "Implemented automated testing with Selenium, cutting manual QA effort by 50%.",
    ],
    technologies: [".NET", "Selenium"],
  },
];

// Project data
export interface Project {
  title: string
  subtitle: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    title: "GoodDeal",
    subtitle: "Game Deals notification app",
    description: "A real-time notification system built with Node.js and React that tracks and alerts users about video game price drops and deals across multiple digital stores. Integrates with gaming marketplaces APIs to provide timely updates and personalized alerts.",
    link: "https://github.com/parthahuja89/GoodDeal"
  },
  {
    title: "MW-M31-VTK",
    subtitle: "Visualization of a Andromeda Galaxy ",
    description: "A scientific visualization project using VTK and Python to create an interactive 3D model of the Andromeda Galaxy (M31). Processes astronomical data to render detailed views of the galaxy's structure and enables exploration of its features through an intuitive interface.",
    link: "https://github.com/parthahuja89/mw-m31-vtk"
  },
  {
    title: "WiseOwl",
    subtitle: "Image recogntion desktop app",
    description: "A desktop application comparing the performance of pre-trained and retrained machine learning models in classifying owl and eagle images. Demonstrates the impact of model fine-tuning on classification accuracy and processing speed.",
    link: "https://github.com/parthahuja89/WiseOwl"
  },
]

// Project field for code snippet
export const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
}
