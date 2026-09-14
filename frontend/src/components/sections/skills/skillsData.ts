export type SkillCategory = {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    skills: ["Python", "Java", "C", "C++", "TypeScript", "Angular"],
  },
  {
    title: "Data & Analytics",
    skills: ["SQL", "Snowflake", "ETL", "Data Quality"],
  },
  {
    title: "Cloud & Data Engineering",
    skills: ["AWS", "Apache Airflow", "Automation"],
  },
  {
    title: "Tools",
    skills: ["Git", "Bash", "Docker", "Unit Testing"],
  },
]
