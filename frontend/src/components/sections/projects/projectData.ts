export type Project = {
  id: string
  title: string
  imageSrc: string
  imageAlt: string
  description: string
  technologies: string[]
  videoUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: "slugbook",
    title: "Slugbook",
    imageSrc: "/slugbook.png",
    imageAlt: "Slugbook web application sign-in page",
    description:
      "Full-stack social web application where users can sign in, create and interact with posts, join groups, and save content. Built with a React frontend, Express REST API, PostgreSQL database, and authentication middleware.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "SQL",
      "Docker",
      "OpenAPI",
    ],
    videoUrl: "https://youtu.be/f6uMM7UTxZM?si=34BkUjINJh_7yO4f",
  },
]
