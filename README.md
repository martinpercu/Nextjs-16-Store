# NextJs

## Static and Dynamic route

#### Static route
- In /app a folder. I this case "store". Inside the typical page.tsx from React.
#### Dynamic route
- In /app/store a folder with square brackets. I this case "category". Inside the typical page.tsx from React.  
- In Next.js 15+ params is a Promise. So we use await of the params. This will help in render with Server Components.

## Layout
#### Global Layout
- In the root the file layout.tsx is the "global layout of the app". The super "wrapper".
#### Local Layouts
- We created other layout.tsx files inside any folder in the /app tree and will affect this folder and their childs.

## Links
- In layout import the "Links" this allow navigation with no reload. The framework is caching the elements.
```
import Link from 'next/link'
```

## Dynamic routes and params 
- To manage long routes like ==> /store/categories/product-A/model-ford/color-grey/etcetc. The folder [categories] change to ==> [...categories]. With the 3 dots whatever continues in the folder will be managed by the page.tsx in the folder.
- If we want to make "store" looks equal to "categories" we can delete the page.tsx(in store) and change the folder [...categories] to ==> [[...categories]]. We add again square brackets.
- Also if the path is ==> http://localhost:3000/store/categories/something?referal=hamilton There are params and search params. Now this are also Promise to To handle them:
```
interface CategoriesProps {
    params: Promise<{
        categories: string[]
    }>
    searchParams: Promise<{ 
        [key: string]: string | string[] | undefined 
    }>
}

export default async function Category({
        params,
        searchParams
}: CategoriesProps)
```


## React-Server-Components
- page.tsx If ==> The console.log('Hello Planet') will be show in the console. 
- If add ==> 
```
"use client"
```
- page.tsx If ==> The console.log('Hello Planet') will be show in the browser devTools
- This status works nested. If any compoment is nested inside a client-component this child component is client-component.
- As example see new component Header. As layout child will be a server component.


## Architecture
- Te basic architecture for this will be ==>
```
src/
├── app/
│   ├── favicon.ico
│   ├── layout.tsx
│   ├── page.tsx
│   └── store/
│       ├── layout.tsx
│       ├── DELETED-page.tsx
│       └── [[...categories]]/
│           └── page.tsx
│
└── components/
    ├── home/
    │   ├── Description/
    │   │   ├── Description.tsx
    │   │   └── index.ts
    │   ├── Hero/
    │   │   ├── Hero.tsx
    │   │   └── index.ts
    │   └── MainProducts/
    │       ├── MainProducts.tsx
    │       └── index.ts
    │
    └── shared/
        ├── Footer/
        │   ├── Footer.tsx
        │   └── index.ts
        └── Header/
            ├── Header.tsx
            └── index.ts
```
- The refactor is done.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
