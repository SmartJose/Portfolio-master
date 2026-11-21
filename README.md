# Omar Hassan — Portfolio

A modern, responsive developer portfolio built with Next.js and TypeScript. It showcases professional experience, technical skills, projects, blog articles, GitHub statistics, contact options, and a protected admin dashboard.

## Live Portfolio

- **Website:** [Portfolio](https://solatrixer-cv.vercel.app)
- **GitHub:** [@SmartJose](https://github.com/SmartJose)
- **LinkedIn:** [Omar Hassan](https://www.linkedin.com/in/omar-hassan-39931b44b/)

## Highlights

- Responsive portfolio interface for desktop, tablet, and mobile
- Animated page transitions and interactive project previews
- Dedicated sections for About, Resume, Works, Blog, Stats, and Contact
- AI, full-stack, and web-design project filtering
- Email and meeting request forms powered by EmailJS
- Admin message dashboard with Redis persistence
- Server-sent events for near real-time message updates
- SEO metadata, reusable data models, and component-based architecture

## Built With

- [Next.js](https://nextjs.org/) — React framework
- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [DaisyUI](https://daisyui.com/) — Tailwind component system
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [React Hook Form](https://react-hook-form.com/) — Form management
- [EmailJS](https://www.emailjs.com/) — Client-side email delivery
- [Upstash Redis](https://upstash.com/) — Message persistence

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- An EmailJS account
- An Upstash Redis database

### Installation

```bash
# Clone the repository
git clone https://github.com/SmartJose/Portfolio-master.git

# Enter the project directory
cd Portfolio-master

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Admin authentication
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_secure_password

# Upstash Redis
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

> Keep admin credentials and Redis tokens private. Never commit `.env.local` or expose server-only values with a `NEXT_PUBLIC_` prefix.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run Next.js lint checks |
| `npm run update-images` | Update project image assets using the included script |

## Project Structure

```text
components/       Reusable UI and portfolio sections
  aboutPage/      About, services, testimonials, and facts
  adminPage/      Admin authentication and message dashboard
  blogPage/       Blog cards and article lightbox
  contactPage/    Contact form, meeting booking, and location
  resumePage/     Experience, education, skills, and languages
  statsPage/      Animated portfolio and GitHub statistics
  worksPage/      Project cards, filters, and project details

data/             Portfolio content and project data
hooks/            Shared React hooks
lib/              Message storage and server-sent event helpers
pages/            Next.js pages and API routes
public/           Images, résumé PDF, favicon, and web manifest
store/            Reactive application state
styles/           Global and Tailwind styles
types/            Shared TypeScript interfaces
```

## Deployment

The project can be deployed directly to [Vercel](https://vercel.com/):

1. Import the repository into Vercel.
2. Configure all environment variables from `.env.local`.
3. Use the default Next.js build settings.
4. Deploy the `main` branch or the branch of your choice.

For Redis and EmailJS integration to work in production, the related environment variables must be configured in the hosting provider.

## Admin Dashboard

The admin dashboard is accessible from the portfolio menu. Authentication is handled through `/api/admin/login`, while contact and booking messages are persisted through Upstash Redis in `/api/admin/messages`.

Use strong, unique admin credentials. The client-side authentication state is intended for interface personalization only; production deployments should add server-side session validation and rate limiting for stronger security.

## Author

**Omar Hassan**  
AI & Full-Stack Engineer

- Email: [omarhassanisme@gmail.com](mailto:omarhassanisme@gmail.com)
- GitHub: [github.com/SmartJose](https://github.com/SmartJose)
- LinkedIn: [Omar Hassan](https://www.linkedin.com/in/omar-hassan-39931b44b/)

## License

This project is available for portfolio and educational use. Add a license file if you intend to define redistribution or commercial usage terms explicitly.
