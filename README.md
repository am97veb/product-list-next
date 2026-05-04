# 🛍️ Product List App (Next.js)

This is a sipmply app built with **Next.js (App Router)**.  
The application displays a product list fetched from a REST API and includes a simple cart system with global state management.


## 🚀 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- CSS Modules
- Fetch API (REST)
- React Context (Cart state)


## 📦 Features

### 🛍️ Product List
- Products fetched asynchronously from REST API
- Displays:
  - image
  - title
  - description
  - brand
  - price
  - promotion (if available)


### 🛒 Cart System
- Global cart state using React Context
- Add products to cart
- Quantity handling (increment if product already exists)
- Cart badge in header showing total items
- Fake async request simulation (for realism)



### 🧭 Header
- Logo
- Cart icon with dynamic badge
- Responsive layout



### ⚙️ Loading & Error Handling
- `loading.tsx` for global loading state 
- `error.tsx` for global error boundary
- API error handling using `response.ok`


## 🔌 API Integration

Data is fetched from a REST API using a secured request:

- Authentication via `x-api-key` header
- Centralized API layer (`fetchApi`)
- Error handling for failed requests


## Getting Started

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


