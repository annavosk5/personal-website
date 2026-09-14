export type Experience = {
  id: string
  company: string
  role: string
  date: string
  description: string
}

export const experiences: Experience[] = [
  {
    id: "ibm-software-developer-intern",
    company: "IBM",
    role: "Software Developer Intern",
    date: "Jun. 2026 – Sept. 2026",
    description:
      "Built language intelligence for an IMS SQL VS Code extension, including syntax diagnostics, semantic validation, context-aware autocomplete, and automated testing.",
  },
  {
    id: "spk-data-engineer-intern",
    company: "SPK & Associates",
    role: "Data Engineer Intern",
    date: "Jan. 2025 – Apr. 2026",
    description:
      "Built a daily automated ETL pipeline with Python and Apache Airflow to ingest AWS billing data from S3, validate and model it in Snowflake, and support Finance and Analytics reporting. Added idempotent tasks, data-quality checks, alerts, and retries for reliable production runs.",
  },
  {
    id: "tech4good-full-stack-developer",
    company: "Tech4Good",
    role: "Full Stack Developer",
    date: "Aug. 2025 – May. 2026",
    description:
      "Built reusable Angular components for Timely, a university scheduling platform, and improved scheduling usability through clearer states and fewer steps. Developed Firestore data flows with NgRx SignalStore, including typed actions, optimistic updates, and atomic batch changes.",
  },
  {
    id: "web3-security-data-analyst-externship",
    company: "Web3 Security",
    role: "Data Analyst Extern",
    date: "May 2024 – July 2024",
    description:
      "Labeled and analyzed smart-contract vulnerabilities, verified peer labels, and contributed to improved language-model accuracy. Used Python and pandas for frequency and correlation analysis, and applied unsupervised learning to identify more than 30 patterns related to profile risk.",
  },
]
