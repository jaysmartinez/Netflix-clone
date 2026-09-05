# Netflix Clone

A full-stack streaming interface inspired by Netflix. It demonstrates authentication, database-backed user data, responsive media browsing, and animated interactions.

## Features

- User registration and authentication
- Responsive media browsing interface
- Favorites and personalized data
- Animated UI interactions
- Form validation
- Database access through Prisma

## Tech Stack

- Next.js
- React and TypeScript
- NextAuth.js
- Prisma and MongoDB
- Chakra UI
- Tailwind CSS
- Framer Motion
- SWR
- Zustand

## Getting Started

```bash
git clone https://github.com/jaysmartinez/Netflix-clone.git
cd Netflix-clone
npm install
```

Create a local `.env` file with the database, authentication, and external API values referenced by the project. Then run:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
