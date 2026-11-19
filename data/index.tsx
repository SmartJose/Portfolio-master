import {
  AiOutlineUser,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai"
import {
  BsBriefcaseFill,
  BsCodeSlash,
  BsAwardFill,
  BsGlobe,
  BsJournalAlbum,
  BsCpu,
  BsCloudFill,
  BsGraphUp,
  BsPeopleFill,
} from "react-icons/bs"
import { FiFileText, FiCode } from "react-icons/fi"
import { FaServer, FaDocker, FaBlog, FaChartBar, FaUserShield } from "react-icons/fa"
import { MenuData, ServiceData, ClientData, TestimonialData, WorkData, BlogPost, StatItem, TechStat } from "../types"
import About from "../components/aboutPage/About"
import Resume from "../components/resumePage/Resume"
import Works from "../components/worksPage/Works"
import Contact from "../components/contactPage/Contact"
import Blog from "../components/blogPage/Blog"
import Stats from "../components/statsPage/Stats"
import AdminDashboard from "../components/adminPage/AdminDashboard"

export const menus: MenuData[] = [
  { id: 1, label: "about", Icon: AiOutlineUser, Component: About },
  { id: 2, label: "resume", Icon: FiFileText, Component: Resume },
  { id: 3, label: "works", Icon: FiCode, Component: Works },
  { id: 4, label: "blog", Icon: FaBlog, Component: Blog },
  { id: 5, label: "stats", Icon: FaChartBar, Component: Stats },
  { id: 6, label: "contact", Icon: AiOutlineMail, Component: Contact },
  { id: 7, label: "admin", Icon: FaUserShield, Component: AdminDashboard },
]

export const socialMedia = [
  {
    id: 1,
    Icon: AiFillGithub,
    label: "GitHub",
    mediaUrl: "https://github.com/SmartJose",
  },
  {
    id: 2,
    Icon: AiFillLinkedin,
    label: "LinkedIn",
    mediaUrl: "https://www.linkedin.com/in/omar-hassan-39931b44b/",
  },
  {
    id: 3,
    Icon: AiOutlineMail,
    label: "Email",
    mediaUrl: "mailto:omarhassanisme@gmail.com",
  },
]

export const services: ServiceData[] = [
  {
    id: 1,
    title: "AI & LLM Development",
    description:
      "Build intelligent applications powered by AI. From chatbots and content generation to document analysis and automated workflows, I create AI solutions that solve real business problems.",
    Icon: BsBriefcaseFill,
  },
  {
    id: 2,
    title: "Full-Stack Engineering",
    description:
      "Complete web applications from front to back. Modern, responsive interfaces paired with robust server-side logic, databases, and APIs. Scalable solutions that grow with your business.",
    Icon: FiCode,
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description:
      "Streamlined deployment pipelines with Docker and AWS. Automated testing, continuous integration, and reliable deployments across development, staging, and production environments.",
    Icon: FaDocker,
  },
  {
    id: 4,
    title: "Backend & API Design",
    description:
      "Fast, secure REST and GraphQL APIs that connect your applications. Clean architecture, efficient database design, and comprehensive documentation for seamless integration.",
    Icon: FaServer,
  },
]

export const clients: ClientData[] = [
  {
    id: 1,
    name: "IntelliAI Solutions",
    logoUrl: "https://via.placeholder.com/120x40/ffffff/78cc6d?text=IntelliAI",
  },
  {
    id: 2,
    name: "Zenith Review Inc",
    logoUrl: "https://via.placeholder.com/120x40/ffffff/78cc6d?text=Zenith",
  },
  {
    id: 3,
    name: "Jupiter Enterprises",
    logoUrl: "https://via.placeholder.com/120x40/ffffff/78cc6d?text=Jupiter",
  },
  {
    id: 4,
    name: "Phoenix Venture Partners",
    logoUrl: "https://via.placeholder.com/120x40/ffffff/78cc6d?text=Phoenix",
  },
]

export const testimonials: TestimonialData[] = [
  {
    id: 1,
    quote:
      "Omar delivered an outstanding AI pipeline that dramatically improved our knowledge retrieval accuracy. His expertise in LangChain and RAG is exceptional.",
    userName: "Alex Martinez",
    userProfession: "CTO at IntelliAI Solutions",
    userImage: {
      url: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80",
    },
  },
  {
    id: 2,
    quote:
      "Working with Omar on our SaaS platform was a game changer. He brought deep full-stack expertise and a strong eye for scalable architecture.",
    userName: "Sarah Chen",
    userProfession: "Product Manager at Zenith Review Inc",
    userImage: {
      url: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
    },
  },
  {
    id: 3,
    quote:
      "Omar reduced our deployment time from 3 hours to 25 minutes with his CI/CD improvements. Highly recommend him for any DevOps or full-stack work.",
    userName: "James Wilson",
    userProfession: "Engineering Lead at Jupiter Enterprises",
    userImage: {
      url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80",
    },
  },
  {
    id: 4,
    quote:
      "His AI solutions transformed how we handle customer inquiries. The chatbot he built understands context perfectly and has reduced response times by 60%.",
    userName: "Emily Rodriguez",
    userProfession: "Operations Director at TechFlow Inc",
    userImage: {
      url: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&q=80",
    },
  },
  {
    id: 5,
    quote:
      "Omar's ability to explain complex technical concepts in simple terms made collaboration seamless. His code quality and documentation are top-notch.",
    userName: "Michael Thompson",
    userProfession: "Senior Developer at CloudSync Systems",
    userImage: {
      url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80",
    },
  },
  {
    id: 6,
    quote:
      "The API architecture Omar designed for our platform is elegant and performant. He anticipated scaling challenges before they became problems.",
    userName: "Priya Sharma",
    userProfession: "Tech Lead at DataHub Solutions",
    userImage: {
      url: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=400&q=80",
    },
  },
]

export const quoteData: TestimonialData = {
  id: 99,
  quote:
    "The best way to predict the future is to invent it. Code is not just instructions for machines — it is the language through which we shape tomorrow.",
  userName: "Omar Hassan",
  userProfession: "AI & Full Stack Engineer",
  userImage: {
    url: "/images/avatar.png",
  },
}

export const experienceData = [
  {
    id: "exp1",
    badge: "01/2025 – 09/2026",
    title: "AI | Full-Stack Engineer",
    subTitle: "DXwand — Maadi, Cario, Egypt",
    desc: "Designed and deployed production AI applications using FastAPI, LangChain, OpenAI APIs, and vector databases. Built RAG pipelines that improved response accuracy and reduced hallucinations. Developed AI agents to automate multi-step business workflows. Reduced API latency by 40% while lowering infrastructure costs. Led a team of eight engineers.",
    experience: true,
  },
  {
    id: "exp2",
    badge: "10/2023 – 11/2024",
    title: "Full Stack Developer",
    subTitle: "FLAGAK — Sheikh, Giza, Egypt",
    desc: "Developed a microservices-based e-commerce platform using React, Node.js, GraphQL, and PostgreSQL. Reduced page load time by 30% through frontend optimization. Designed GraphQL APIs for high-volume production traffic. Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time from 3 hours to 25 minutes.",
    experience: true,
  },
  {
    id: "exp3",
    badge: "01/2021 – 08/2023",
    title: "Junior Full Stack Developer",
    subTitle: "DPLYR —  Cario, Egypt",
    desc: "Built and maintained RESTful APIs using Django, Python, and PostgreSQL. Migrated legacy JavaScript applications to TypeScript, improving maintainability and reducing production bugs. Developed automated testing pipelines using Jest and Cypress.",
    experience: true,
  },
]

export const educationData = [
  {
    id: "edu1",
    badge: "09/2016 – 08/2020",
    title: "Bachelor of Science in Computer Science",
    subTitle: "The American University in Cairo (AUC) —  Cairo, Egypt",
    desc: "",
    experience: false,
  },
]

export const skillsData = {
  backEnd: [
    { id: "b1", field: "Python / FastAPI", value: "95" },
    { id: "b2", field: "Node.js / Express", value: "90" },
    { id: "b3", field: "Django", value: "88" },
    { id: "b4", field: "Go", value: "80" },
  ],
  frontEnd: [
    { id: "f1", field: "React / Next.js", value: "93" },
    { id: "f2", field: "TypeScript", value: "92" },
    { id: "f3", field: "Tailwind CSS", value: "90" },
    { id: "f4", field: "Redux / React Query", value: "88" },
  ],
  knowledge: [
    "LangChain & LangGraph",
    "RAG Pipelines",
    "AI Agents",
    "OpenAI / GPT-5.6 APIs",
    "Vector Databases (Pinecone, Weaviate)",
    "Prompt Engineering & Fine-tuning (LoRA, PEFT)",
    "Docker & Kubernetes",
    "AWS & Terraform",
    "CI/CD (GitHub Actions)",
    "PostgreSQL / MongoDB / Redis / Elasticsearch",
    "GraphQL & REST APIs",
    "Microservices Architecture",
  ],
  languages: [
    { id: "l1", field: "English", value: "10" },
    { id: "l2", field: "Japanese", value: "10" },
  ],
}

export const worksData: WorkData[] = [
  {
    id: "w1",
    title: "ACE AI — LangChain Study Assistant",
    description:
      "Full-stack AI study assistant built with Next.js, FastAPI, LangChain, and Pinecone. Features document upload, chat, quiz and notes generation, and web search agent.",
    liveUrl: "https://takumi-ai-next-fast-api.vercel.app/",
    githubUrl: "https://github.com/SmartJose/AI-Next-FastAPI",
    images: [
      { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80" },
    ],
    technologies: ["Next.js", "FastAPI", "LangChain", "Pinecone", "OpenAI API"],
    workTabs: [{ tab: "All" }, { tab: "AI" }],
  },
  {
    id: "w2",
    title: "MindForge — AI Productivity SaaS",
    description:
      "AI-powered productivity SaaS platform featuring intelligent note-taking, knowledge management, and automated content generation workflows.",
    liveUrl: "https://takumi-ai-sass-django-project.vercel.app/",
    githubUrl: "https://github.com/SmartJose/AI-Sass-Django-project",
    images: [
      { url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80" },
    ],
    technologies: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
    workTabs: [{ tab: "All" }, { tab: "AI" }],
  },
  {
    id: "w3",
    title: "MindForge — AI Photo Generation Platform",
    description:
      "AI-powered photo generation platform with intelligent image creation, style transfer, and automated creative workflows.",
    liveUrl: "https://mindforgee.vercel.app/",
    githubUrl: "https://github.com/SmartJose/AI--Photo-Generation-Platform",
    images: [
      { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" },
    ],
    technologies: ["Next.js", "OpenAI API", "Stable Diffusion", "PostgreSQL"],
    workTabs: [{ tab: "All" }, { tab: "AI" }],
  },
  {
    id: "w9",
    title: "Weflix — Free Movie Streaming",
    description:
      "Movie streaming platform with real-time search, genre filtering, watchlists, and a clean cinema-style UI. Integrates with external media APIs.",
    liveUrl: "https://www.weflix.app/",
    githubUrl: "https://github.com/SmartJose/Full-stack-Free-Movie-Streaming-Website",
    images: [
      { url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80" },
    ],
    technologies: ["React", "REST API", "Tailwind CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Full-Stack" }],
  },
  {
    id: "w11",
    title: "Coode — Online Course Platform",
    description:
      "Full-featured online course platform with video lessons, Stripe payments, progress tracking, and instructor dashboards. Built with Next.js 15 and Drizzle ORM.",
    liveUrl: "https://coode-platform.vercel.app",
    githubUrl: "https://github.com/SmartJose/Full-stack-Online-Course-Platform",
    images: [
      { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80" },
    ],
    technologies: ["Next.js 15", "React", "Stripe", "Drizzle ORM", "PostgreSQL"],
    workTabs: [{ tab: "All" }, { tab: "Full-Stack" }],
  },
  {
    id: "w12",
    title: "Amazoning — Full-Stack E-Commerce",
    description:
      "Comprehensive full-stack e-commerce platform inspired by Amazon. Features include product catalog, shopping cart, user authentication, order management, and payment processing.",
    liveUrl: "https://amazoning.onrender.com/",
    githubUrl: "https://github.com/SmartJose/Full-stack-Ecommerce",
    images: [
      { url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    workTabs: [{ tab: "All" }, { tab: "Full-Stack" }],
  },

  {
    id: "W13",
    title: "Grainne Morton",
    description: "An artistic jewelry website featuring editorial photography, elegant typography, and a refined product presentation.",
    liveUrl: "https://grainnemorton.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W14",
    title: "Acid League",
    description: "A bold food and lifestyle brand website with vibrant colors, playful typography, and creative product storytelling.",
    liveUrl: "https://acidleague.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W15",
    title: "Canyon Coffee",
    description: "A warm and minimal coffee brand website combining lifestyle photography, simple layouts, and thoughtful branding.",
    liveUrl: "https://canyoncoffee.co/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W16",
    title: "Lore Perfumery",
    description: "A fragrance website with an atmospheric visual identity, cinematic imagery, and sophisticated product storytelling.",
    liveUrl: "https://loreperfumery.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W17",
    title: "Klur",
    description: "A luxury skincare website with minimalist layouts, neutral tones, and elegant product photography.",
    liveUrl: "https://klur.co/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W18",
    title: "Oakâme",
    description: "A furniture and interior design website emphasizing natural materials, architectural photography, and modern aesthetics.",
    liveUrl: "https://oaka.me/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["Web Design", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W19",
    title: "Hardgraft",
    description: "A premium accessories website featuring minimalist product displays, rich textures, and sophisticated visual design.",
    liveUrl: "https://www.hardgraft.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W20",
    title: "Retrouvé",
    description: "A luxury skincare website combining elegant typography, premium product photography, and a clean editorial layout.",
    liveUrl: "https://retrouve.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W21",
    title: "Honey Department",
    description: "An artisanal food brand website with warm colors, creative packaging, and visually engaging product storytelling.",
    liveUrl: "https://honeydepartment.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W22",
    title: "Aura Estelle",
    description: "A stationery and planner website with soft colors, beautiful product grids, and an inviting lifestyle aesthetic.",
    liveUrl: "https://www.auraestelle.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W23",
    title: "Paper + Cup",
    description: "A creative stationery store featuring handcrafted aesthetics, thoughtful product presentation, and gentle visual styling.",
    liveUrl: "https://paperandcup.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  },
  {
    id: "W24",
    title: "The Frankie Shop",
    description: "A contemporary fashion website with editorial photography, sophisticated typography, and clean product layouts.",
    liveUrl: "https://thefrankieshop.com/",
    githubUrl: "",
    images: [
      {
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
      }
    ],
    technologies: ["E-commerce", "HTML", "CSS", "JavaScript"],
    workTabs: [{ tab: "All" }, { tab: "Web Design" }]
  }




]

export const workTabs = ["All", "AI", "Full-Stack", "Web Design"]

export const prices = [
  {
    id: "p1",
    title: "AI Consulting",
    price: "$150/hr",
    features: [
      "LLM Application Design",
      "RAG Pipeline Architecture",
      "AI Agent Development",
      "Performance Optimization",
      "Technical Review",
    ],
  },
  {
    id: "p2",
    title: "Full-Stack Development",
    price: "$120/hr",
    features: [
      "React / Next.js Frontend",
      "FastAPI / Node.js Backend",
      "Database Design",
      "Cloud Deployment",
      "CI/CD Setup",
    ],
  },
]

// ─── Blog Data ───────────────────────────────────────────────────────────────

export const blogTabs = ["All", "AI", "Full-Stack", "Web Design"]

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "ACE AI: Full-Stack Study Assistant with LangChain and Pinecone",
    excerpt:
      "Building ACE AI — a Next.js + FastAPI study assistant that combines document chat, quiz generation, note summarisation, and a web search agent in one cohesive app.",
    content: `ACE AI combines four AI features that students actually need: document chat, quiz generation, note summarisation, and live web search. Here is how I built each one.\n\n**Document Chat with Pinecone**\nSame RAG pipeline as Document Chat (see previous post) but scoped to study materials. Each user's uploaded notes are namespaced in Pinecone so queries only search their own documents.\n\n**Quiz Generation**\nGiven a topic or uploaded doc, GPT-4o generates multiple-choice questions with distractors and explanations. I use structured output (JSON mode) and validate with Pydantic before returning to the client — no more hallucinated answer formats.\n\n**Web Search Agent**\nFor questions beyond the uploaded docs, a LangChain agent with a Tavily Search tool fetches current information. The agent decides whether to use search based on the query — it doesn't blindly call the web for every question.\n\n**Vercel AI SDK Integration**\nThe Next.js frontend uses useChat for the streaming chat UI and useCompletion for one-shot generation features (quiz, summary). Both connect to the same FastAPI backend via separate endpoints.`,
    category: "AI",
    date: "Mar 2025",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    tags: ["LangChain", "Next.js", "FastAPI", "Pinecone"],
  },
  {
    id: "b2",
    title: "MindForge: AI-Powered Knowledge Management at Scale",
    excerpt:
      "Inside the architecture of MindForge — an AI productivity SaaS with intelligent note-taking, semantic search, and automated content generation built on React and Node.js.",
    content: `MindForge solves the problem every developer faces: too much information, not enough structure. Here is how I built the AI layer.\n\n**Semantic Search over Notes**\nEvery note is embedded with text-embedding-3-small at save time and stored in Pinecone. When you search, the query is embedded and the top-k semantically similar notes are returned — far better than keyword matching.\n\n**Auto-Summarisation Pipeline**\nLong notes are chunked and summarised on a background queue (Bull + Redis). Summaries are cached and re-generated only when the source note changes. This keeps the UI instant while the LLM work happens asynchronously.\n\n**Content Generation Workflows**\nUsers can trigger generation jobs: expand a bullet list into a full doc, generate a presentation outline from notes, or draft an email from a meeting summary. Each workflow is a LangChain chain with a structured output parser.\n\n**Scaling the Backend**\nNode.js + Fastify (not Express — Fastify is ~30% faster for JSON serialisation). PostgreSQL for relational data, Redis for caching and queues. Everything containerised with Docker and deployed on Railway.`,
    category: "AI",
    date: "Jun 2025",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    tags: ["React", "Node.js", "OpenAI", "Pinecone"],
  },
  {
    id: "b3",
    title: "Teamora: Multi-Tenant ERP Architecture with Django and React",
    excerpt:
      "Deep dive into Teamora's multi-tenant architecture — Django DRF for the API, React Redux for state, PostgreSQL row-level security for data isolation, and Redis for real-time features.",
    content: `Multi-tenancy at the application level is one of those architectural decisions you want to get right from day one. Here is how Teamora handles it.\n\n**Tenant Isolation**\nEvery database row has a tenant_id foreign key. A custom Django middleware injects the tenant into every ORM query via a thread-local, so no query can accidentally leak data across tenants. PostgreSQL row-level security adds a database-level enforcement layer.\n\n**Django REST Framework Structure**\nViewSets with tenant-scoped querysets, serializers with nested relations, and custom permissions that check both authentication and tenant membership. API versioning via URL prefix (v1, v2) from day one.\n\n**Real-Time with Redis and Channels**\nProject status updates and notifications use Django Channels over WebSocket. Redis as the channel layer — all worker processes share the same pub/sub bus, so notifications reach users regardless of which dyno handles their WebSocket.\n\n**React Redux State**\nRedux Toolkit with RTK Query for API fetching. One slice per resource (projects, tasks, members). Optimistic updates for task status changes — the UI updates instantly while the API call happens in the background.`,
    category: "AI",
    date: "Oct 2024",
    readTime: "9 min read",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    tags: ["Django", "React", "Redux", "PostgreSQL"],
  },
  {
    id: "b9",
    title: "Weflix: Building a Movie Streaming UI with React",
    excerpt:
      "How I built Weflix — a Netflix-style movie streaming interface with React, real-time search, genre filtering, and a media API integration that handles thousands of titles.",
    content: `Weflix is a front-end engineering challenge disguised as a fun project. Here is what made it non-trivial.\n\n**API Integration Strategy**\nThe TMDB API returns paginated results with variable response shapes. I wrote a typed API client with Zod validation — if the API returns unexpected data, the app fails gracefully instead of crashing.\n\n**Real-Time Search**\nSearch is debounced at 300ms with useCallback. Results are cached in a Map keyed by query string — repeat searches are instant. I cancel in-flight requests with AbortController when a new query comes in before the previous one resolves.\n\n**Virtualized Lists**\nWith thousands of titles, rendering every card causes noticeable jank. React Window virtualises the grid — only visible cards are in the DOM. Scroll performance stays at 60fps even on long genre lists.\n\n**Trailer Modals**\nYouTube embeds inside a React Portal with a focus trap for accessibility. The modal preloads the iframe src only when opened — not on page load — so it doesn't affect initial LCP.`,
    category: "Full-Stack",
    date: "Nov 2024",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    tags: ["React", "REST API", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "b11",
    title: "Coode: Building an Online Course Platform with Next.js 15 and Stripe",
    excerpt:
      "How I built Coode — a full-featured online learning platform with Next.js 15, Drizzle ORM, Stripe subscriptions, video progress tracking, and instructor dashboards.",
    content: `Course platforms seem simple until you start building one. Video delivery, payment flows, progress tracking, and instructor tooling each have real depth.\n\n**Next.js 15 App Router**\nServer Components for the course catalogue (rendered at request time, always fresh), Client Components only where interactivity is needed (video player, quiz). This gets excellent Core Web Vitals without any manual optimisation.\n\n**Drizzle ORM + PostgreSQL**\nDrizzle's TypeScript-first design means your schema is your types. Migrations are SQL files you control — no magic. Relations are declared in the schema and Drizzle generates the correct JOINs. I use Neon serverless Postgres for zero cold-start connection pooling.\n\n**Stripe Subscriptions**\nThree tiers: free (preview lessons), pro (full access), team (multiple seats). Stripe Customer Portal handles upgrades, downgrades, and cancellations without custom UI. Webhooks sync subscription status to the database.\n\n**Video Progress Tracking**\nI track progress events (started, 25%, 50%, 75%, completed) from the video player and store them per user per lesson. Completion certificates are generated server-side with a PDF library when 100% of lessons in a course are marked complete.`,
    category: "Full-Stack",
    date: "Sep 2024",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    tags: ["Next.js 15", "Stripe", "Drizzle ORM", "PostgreSQL"],
  },
  {
    id: "b12",
    title: "Amazoning: Building a Full-Stack E-Commerce Platform",
    excerpt:
      "Deep dive into building Amazoning — a comprehensive Amazon-inspired e-commerce platform with React, Node.js, Express, MongoDB, user authentication, shopping cart, and Stripe payment integration.",
    content: `Building a full-featured e-commerce platform from scratch teaches you the complexity behind modern online retail. Amazoning covers the complete user journey from browsing to checkout.\n\n**Architecture Overview**\nFull MERN stack: React frontend with React Router for navigation, Express.js REST API, MongoDB for data persistence, and JWT-based authentication. The frontend and backend are deployed separately — React on Netlify, Express on Render.\n\n**User Authentication & Authorization**\nJWT tokens stored in httpOnly cookies for security. Role-based access control distinguishes between customers and admin users. Password hashing with bcrypt before storage. Protected routes on both frontend and backend.\n\n**Shopping Cart & State Management**\nCart state managed with React Context API. Cart persists to localStorage so users don't lose items on page refresh. Real-time price calculations including tax and shipping. Guest checkout supported with email confirmation.\n\n**Product Catalog & Search**\nMongoDB for flexible product schema with categories, variants, and inventory tracking. Text search with MongoDB indexes. Image uploads handled via Cloudinary for optimized delivery and transformations.\n\n**Payment Processing**\nStripe Checkout integration for secure payment handling. Webhook listeners for order confirmation. Automatic email receipts sent via SendGrid. Order history accessible in user dashboard.\n\n**Admin Dashboard**\nFull CRUD operations for products, orders, and users. Sales analytics with chart visualizations. Inventory management with low-stock alerts. Order fulfillment workflow with status tracking.`,
    category: "Full-Stack",
    date: "Aug 2024",
    readTime: "9 min read",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    id: "b13",
    title: "Grainne Morton: Creating an Elegant Jewelry Brand Experience",
    excerpt: "Exploring an elegant jewelry website design with editorial photography, refined typography, and a premium product browsing experience.",
    content: `The Grainne Morton website showcases an artistic approach to jewelry and brand presentation. The design direction focuses on communicating craftsmanship, individuality, and timeless elegance.

              **Editorial Visual Design**
              The visual direction combines generous whitespace, elegant typography, and expressive product photography. The layout gives each jewelry piece room to stand out while maintaining a consistent brand identity.

              **Product Presentation**
              Product pages make it easy to explore collections, examine individual pieces, and understand product details. Clear navigation helps visitors move naturally between categories.

              **Responsive Experience**
              The experience prioritizes visual consistency across desktop, tablet, and mobile screens, keeping product imagery and navigation easy to use.`,
    category: "Web Design",
    date: "Aug 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "CSS", "JavaScript"],
  },
  {
    id: "b14",
    title: "Acid League: Building a Bold and Colorful Food Brand Website",
    excerpt: "A creative food brand website concept focused on vibrant visual identity, playful typography, and an engaging online shopping experience.",
    content: `Acid League presents an unconventional approach to food branding. Its digital experience combines expressive visuals with a product-focused shopping journey.

              **Bold Brand Identity**
              The design direction uses vibrant colors, distinctive typography, and creative product imagery to establish a recognizable visual personality.

              **Product Discovery**
              Products are organized into clear categories, allowing customers to explore different flavors and collections. Product details and photography help communicate the brand's personality.

              **Shopping Experience**
              The storefront balances creative storytelling with practical shopping features, keeping navigation, product discovery, and purchasing straightforward.`,
    category: "Web Design",
    date: "Jul 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "Branding", "CSS"],
  },
  {
    id: "b15",
    title: "Canyon Coffee: Designing a Warm and Minimal Coffee Website",
    excerpt: "A coffee brand website concept combining warm photography, minimal layouts, and thoughtful product storytelling.",
    content: `Canyon Coffee offers a visual direction built around coffee culture, lifestyle photography, and a welcoming brand identity.

              **Warm Visual Language**
              The design uses natural tones, carefully selected photography, and clean typography to create a comfortable and inviting atmosphere.

              **Product Architecture**
              Coffee products and collections are presented through organized product grids. Each product page gives visitors a clear overview of the product and its characteristics.

              **Brand Storytelling**
              Editorial sections communicate the brand's identity and coffee culture, creating a connection between the products and the lifestyle surrounding them.`,
    category: "Web Design",
    date: "Jun 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "Branding", "JavaScript"],
  },
  {
    id: "b16",
    title: "Lore Perfumery: Creating an Atmospheric Fragrance Website",
    excerpt: "Exploring a cinematic fragrance website experience with atmospheric imagery, refined typography, and immersive product storytelling.",
    content: `Lore Perfumery provides inspiration for a fragrance website built around atmosphere, emotion, and product identity.

              **Immersive Visual Direction**
              The design concept emphasizes rich imagery, carefully balanced typography, and a restrained color palette to create a distinctive visual experience.

              **Fragrance Collections**
              Products are organized into collections that make browsing intuitive. Individual product pages can highlight fragrance notes, inspiration, and product details.

              **Storytelling Experience**
              Editorial content gives each fragrance a stronger identity and helps visitors understand the inspiration behind the collection.`,
    category: "Web Design",
    date: "May 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "CSS", "Branding"],
  },
  {
    id: "b17",
    title: "Klur: Designing a Refined Luxury Skincare Website",
    excerpt: "A minimalist skincare website concept featuring sophisticated typography, neutral colors, and an elegant product browsing experience.",
    content: `Klur demonstrates how a skincare brand can communicate quality through simplicity, thoughtful photography, and a consistent visual language.

              **Minimal Design System**
              A neutral color palette, generous whitespace, and carefully selected typography create a refined and uncluttered interface.

              **Product Information Architecture**
              Products are organized to help visitors understand different skincare options. Individual pages can present ingredients, product benefits, and usage information.

              **Mobile Shopping Experience**
              The layout adapts to smaller screens while maintaining clear product imagery, readable information, and accessible shopping controls.`,
    category: "Web Design",
    date: "Apr 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "CSS", "JavaScript"],
  },
  {
    id: "b18",
    title: "Oakâme: Creating a Modern Furniture and Interior Design Experience",
    excerpt: "A furniture website design direction focused on architectural photography, natural materials, and contemporary visual storytelling.",
    content: `Oakâme provides inspiration for a furniture and interior design experience where photography and spatial composition play an important role.

              **Architectural Visual Design**
              Large photographs, structured layouts, and understated typography create a premium presentation for furniture and interior collections.

              **Collection Organization**
              Products are grouped into intuitive categories, helping visitors explore furniture and discover pieces that fit their spaces.

              **Editorial Storytelling**
              Lifestyle imagery and interior-focused content help communicate the relationship between furniture, materials, and modern living.`,
    category: "Web Design",
    date: "Mar 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "Interior Design", "CSS", "JavaScript"],
  },
  {
    id: "b19",
    title: "Hardgraft: Building a Premium Leather Accessories Storefront",
    excerpt: "A premium accessories website design concept featuring product-focused layouts, rich textures, and sophisticated e-commerce presentation.",
    content: `Hardgraft demonstrates a strong visual approach to presenting premium accessories through product photography and restrained design.

              **Premium Visual Identity**
              The design direction uses neutral colors, texture-rich photography, and minimal typography to keep attention on the products.

              **Product Browsing**
              Organized collections and clear product pages help visitors explore bags, accessories, and other items without unnecessary visual distractions.

              **Conversion-Focused Layout**
              Product details, pricing, and shopping actions are arranged to create a clear purchasing journey while preserving the brand's premium aesthetic.`,
    category: "Web Design",
    date: "Feb 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "CSS", "Branding"],
  },
  {
    id: "b20",
    title: "Retrouvé: Designing an Elegant Luxury Skincare Experience",
    excerpt: "A luxury skincare website design direction with editorial photography, sophisticated typography, and a clean shopping experience.",
    content: `Retrouvé offers inspiration for a refined skincare website that combines product presentation with a strong luxury brand identity.

              **Elegant Design Language**
              The visual approach emphasizes subtle colors, carefully selected typography, and balanced spacing to create a sophisticated atmosphere.

              **Product Storytelling**
              Product pages can introduce skincare collections, explain product characteristics, and present important information in a structured format.

              **Consistent User Experience**
              Clear navigation and responsive layouts help visitors explore products comfortably across desktop and mobile devices.`,
    category: "Web Design",
    date: "Jan 2025",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "UX", "CSS"],
  },
  {
    id: "b21",
    title: "Honey Department: Creating a Distinctive Artisanal Food Store",
    excerpt: "A creative food brand website concept featuring warm colors, distinctive packaging, and engaging product storytelling.",
    content: `Honey Department provides inspiration for a food-focused e-commerce experience that makes product presentation central to the brand.

              **Visual Brand Identity**
              Warm tones, expressive product photography, and thoughtful typography create an inviting digital storefront.

              **Product Organization**
              A clear category structure helps visitors discover different products and understand the available collections.

              **Content and Commerce**
              The experience combines brand storytelling with practical shopping features, allowing visitors to explore products while learning about the brand.`,
    category: "Web Design",
    date: "Dec 2024",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "Branding", "CSS"],
  },
  {
    id: "b22",
    title: "Aura Estelle: Designing a Beautiful Stationery and Planner Store",
    excerpt: "A stationery e-commerce design concept with soft colors, carefully organized product grids, and a welcoming lifestyle aesthetic.",
    content: `Aura Estelle offers inspiration for a stationery store that makes everyday products feel visually appealing and personal.

              **Soft Visual Identity**
              A gentle color palette, elegant typography, and lifestyle photography create a cohesive and welcoming brand experience.

              **Product Discovery**
              Planners, stationery, and accessories can be organized into intuitive categories. Product grids make it easy to compare different designs and collections.

              **Shopping Experience**
              Product information and clear shopping actions help visitors move from browsing to purchasing with minimal friction.`,
    category: "Web Design",
    date: "Nov 2024",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "CSS", "JavaScript"],
  },
  {
    id: "b23",
    title: "Paper + Cup: Creating a Creative Stationery Shopping Experience",
    excerpt: "A stationery website design direction focused on handcrafted aesthetics, thoughtful product presentation, and clean navigation.",
    content: `Paper + Cup provides inspiration for a creative retail website where visual presentation and product discovery work together.

            **Creative Art Direction**
            The design direction uses carefully arranged imagery, simple layouts, and expressive details to create a distinctive storefront.

            **Collection Presentation**
            Products are displayed through organized collections, allowing visitors to discover stationery and related items easily.

            **Responsive Design**
            The interface is designed to maintain a consistent experience across devices, with accessible navigation and readable product information.`,
    category: "Web Design",
    date: "Oct 2024",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "CSS", "UX"],
  },
  {
    id: "b24",
    title: "The Frankie Shop: Designing a Modern Editorial Fashion Store",
    excerpt: "A contemporary fashion website design concept combining editorial photography, sophisticated typography, and a streamlined shopping experience.",
    content: `The Frankie Shop offers inspiration for a contemporary fashion storefront where editorial presentation and product discovery are equally important.

              **Editorial Design Direction**
              Large fashion photography, clean typography, and structured layouts create a polished digital experience.

              **Collection and Product Pages**
              Collections are organized to make browsing intuitive. Product pages emphasize imagery, product details, and straightforward shopping actions.

              **Mobile-First Shopping**
              Responsive layouts keep the fashion imagery prominent while making navigation, product selection, and shopping controls accessible on smaller screens.`,
    category: "Web Design",
    date: "Sep 2024",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
    tags: ["Web Design", "E-Commerce", "Fashion", "CSS"],
  }


]

// ─── Stats Data ───────────────────────────────────────────────────────────────

export const statCards: StatItem[] = [
  {
    id: "s1",
    label: "Years of Experience",
    value: 6,
    suffix: "+",
    description: "Building production software across AI, full-stack, and cloud engineering",
    Icon: BsAwardFill,
  },
  {
    id: "s2",
    label: "Projects Shipped",
    value: 20,
    suffix: "+",
    description: "End-to-end products delivered across startups and enterprise clients",
    Icon: BsCodeSlash,
  },
  {
    id: "s3",
    label: "Cloud Cost Saved",
    value: 40,
    suffix: "%",
    description: "Average infrastructure cost reduction through optimization",
    Icon: BsCloudFill,
  },
  {
    id: "s4",
    label: "API Latency Reduced",
    value: 40,
    suffix: "%",
    description: "Inference and API latency improvement on optimized LLM services",
    Icon: BsGraphUp,
  },
]

export const techStats: TechStat[] = [
  { id: "t1", name: "Python / FastAPI", percentage: 95, color: "#f59e0b" },
  { id: "t2", name: "React / Next.js", percentage: 93, color: "#f59e0b" },
  { id: "t3", name: "LangChain / RAG", percentage: 92, color: "#f59e0b" },
  { id: "t4", name: "TypeScript", percentage: 90, color: "#f59e0b" },
  { id: "t5", name: "AWS / Kubernetes", percentage: 85, color: "#f59e0b" },
  { id: "t6", name: "PostgreSQL / Redis", percentage: 87, color: "#f59e0b" },
  { id: "t7", name: "Docker / CI-CD", percentage: 88, color: "#f59e0b" },
  { id: "t8", name: "Go", percentage: 74, color: "#f59e0b" },
]

export const githubStats = [
  { label: "Public Repos", value: "30+", Icon: BsCodeSlash },
  { label: "Total Commits", value: "1.2k+", Icon: BsGraphUp },
  { label: "Pull Requests", value: "300+", Icon: BsAwardFill },
  { label: "Contributions", value: "800+", Icon: BsGlobe },
]
