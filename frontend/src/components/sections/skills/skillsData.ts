export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    skills: [
      "Python",
      "Java",
      "C",
      "C++",
      "TypeScript",
      "React",
      "Angular",
      "Full-Stack Web Development",
      "Node.js",
      "Express",
      "ANTLR4",
      "Language Tooling",
      "VS Code Extension Development",
      "Language Server Protocol (LSP)",
      "Jest",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "SQL",
      "Snowflake",
      "ETL",
      "Data Quality",
      "Relational Databases",
      "Hierarchical Databases",
    ],
  },
  {
    title: "Cloud & Data Engineering",
    skills: ["AWS", "OpenShift", "Apache Airflow", "Automation"],
  },
  {
    title: "Tools",
    skills: ["Git", "Bash", "Docker", "Unit Testing"],
  },
]
