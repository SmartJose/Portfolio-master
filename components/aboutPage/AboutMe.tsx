import MyInfo from "../MyInfo"

export default function AboutMe() {
  return (
    <div className="px-12 py-10">
      <article className="prose max-w-none prose-h2:mb-2.5 prose-h2:text-[1.6rem] prose-p:text-2xl prose-p:leading-[1.65]">
        <p>
          AI &amp; Full Stack Developer  with 6+ years of experience building scalable SaaS platforms, AI applications, and cloud-based systems.
        </p>
        <p>
          I have experience with LLMs, RAG, AI agents, LangChain, OpenAI APIs, FastAPI, React, Kubernetes, and AWS.
          I focus on writing clean, reliable, and easy-to-maintain code. I can handle the full development process, from system design and backend development to AI integration, frontend development, deployment, and performance improvements.
          My goal is to build practical and reliable software that solves real business problems, works well at scale, and provides real value to clients and users.
        </p>
      </article>

      <ul className="grid grid-cols-1 mt-6 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="residence" value="Japan" />
        <MyInfo field="address" value="Osaka, Japan" />
        <MyInfo field="email" value="k.legend.dev@gmail.com" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}
