## Robot Package Sorter
- The sorting logic lives in `src/domain/sort.ts`, with tests in `src/domain/sort.test.ts`.
- To run test cases, run `npx vitest run` if using npx or `npm run test`.

### Why scaffold an entire Next.js project?
- Since the problem statement mentioned we might build upon our sorting logic, I wanted to scaffold a web app in case we will be building a user interface for our robot package sorter.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started (Ignore for now, this is just boilerplate for a future UI)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
