# NextJs


## Basics Next.js 16

### Static and Dynamic route
#### Static route
- In /app a folder. I this case "store". Inside the typical page.tsx from React.
#### Dynamic route
- In /app/store a folder with square brackets. I this case "category". Inside the typical page.tsx from React.  
- In Next.js 15+ params is a Promise. So we use await of the params. This will help in render with Server Components.

### Layout
#### Global Layout
- In the root the file layout.tsx is the "global layout of the app". The super "wrapper".
#### Local Layouts
- We created other layout.tsx files inside any folder in the /app tree and will affect this folder and their childs.

#### Links
- In layout import the "Links" this allow navigation with no reload. The framework is caching the elements.
```
import Link from 'next/link'
```

#### Dynamic routes and params 
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


#### React-Server-Components
- page.tsx If ==> The console.log('Hello Planet') will be show in the console. 
- If add ==> 
```
"use client"
```
- page.tsx If ==> The console.log('Hello Planet') will be show in the browser devTools
- This status works nested. If any compoment is nested inside a client-component this child component is client-component.
- As example see new component Header. As layout child will be a server component.


#### Architecture
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

------

## Styles Manage

#### CSS Modules
- React use CSS modules. This will be a LOCAL scope css. In standard website HTML the CSS styles are global. Here NO.
- Just as example Hero ===> New file Hero.modules.css. Here add any css
- In Hero.tsx import the styles
```
import styles from './Hero.module.css'
```
- Then just add add it like this===>
```
className={styles.Hero}
```
- IMPORTANT the styles are comming as an object.


#### Sass 
- Install Sass for dev
```
npm install --save-dev sass
```
- Following th Next.JS "How to use Sass" https://nextjs.org/docs/app/guides/sass
- I create a new folder src/sass with main.sass and _variable. To import vars in the main.sass
```
@use './variables' as *
```
- I create a new folder src/sass. To import the main.sass in root layout
```
import '../sass/main.sass'
```
- Then to import specific sass in a component. (example Hero) new file "Hero.module.sass". In Hero.tsx ===>
```
import styles from './Hero.module.sass'
+
className={styles.Hero}
```
- Important Next.js 16 will use by default Sass. (nothing to do in the next.config. If you use Scss you must set it)
- I have also a globals.sass. This would for globals styles (import in root layout "import '../sass/globals.sass'")


#### Static Files
- To use the statics files is in the public folder. 
- For images a folder "images".
- To import the images ==>
```
<img src="/images/back-1.png" alt="example" />
```
- Everything in the public folder will be expose in the app. Easy to bring whatever static we have there.


#### Image optimization
- In Description.tsx import Image ==>
```
import Image from 'next/image';
```
- <img> ==> <Image>
- Image will render the image optimizing (use lazy loadings render images resizing etc). In component we use Image and set the height width and turn prioority in false. (This will cancel the lazy loadings). Also we can set the quality (by default is 75).
```
<Image 
    src="/images/back-1.png"    
    alt="example" 
    width={480}
    height={280}
    priority={false} // this is to cancel Lazy Loading ==> this is in the main page!!!
    quality={50}
/>
```

#### Image Responsive

- The image will be in an "image container". Then we add "fill" to the Image and then the Sass imageContainer.
- Also we add placeholder blur ==> This is to show a blurried image when loading. We create outside a blur image realin Base64 to preload faster. Just add a const PLACEHOLDER_BACK_IMAGE = data:image/jpeg;base64,/9j/4AA....... and use in component.
```
 &__imageContainer
    position: relative
    width: 480px
    height: 280px
    & > img
      object-fit: cover
      border-radius: 1rem
      box-shadow: 0 0 4rem rgba(255, 255, 255, 0.2)
```
```
<div className={styles.Description__imageContainer}>
    <Image 
        src="/images/back-1.png"    
        alt="example" 
        fill
        placeholder='blur'
        blurDataURL='PLACEHOLDER_BACK_IMAGE'
    />
</div>
```
- To convert pimage in blur in base 64 ==> https://blurred.dev/

#### Font Set
- NextJs has almost all the google fonts. So we will set Roboto with some weights
- In the app/layout.tsx ==>
```
import { Roboto } from "next/font/google";
+
const roboto = Roboto({
  weight: ["100", "300","500", "700"],
  subsets: ["latin"],
});
```
- Then we add in the body ==> 
```
<body className={roboto.className}>
```


#### Dynamic styles
- To use dynamic syles the components should be a "client component" (in the example Description.tsx)==>
```
"use client"
```
- Import classnames
```
npm i classnames
```
- In the component we create an "state" -> useState and also import classNames with BIND. This is important to only use the style only in this component from the Description Sass ==> 
```
import classNames from 'classnames/bind';
import { useState } from 'react';
```
- In the return a state for addind border.
- In the return a handleclick funtion with the negacion of previous state.
- In the return a context=classNames with binds
- In the return the const buttonStyles that will be change with the click and apply the style 
- In the return the element with onClick={handleClick} className={buttonStyles} to activate the style on/off
```
const [hasBorder, setBorder] = useState(false);
const handleClick = () => setBorder(!hasBorder);
const cx = classNames.bind(styles);
const buttonStyles = cx('Description__button', {
'Description__button--border': hasBorder,
});

return(
    <section>
        <button onClick={handleClick} className={buttonStyles}>
            <div>
                <Image
                    src="/images/back-1.png"
                />
            </div>
        </button>
    </section>
)
```
- Check the Description.module.sass something like this ==>
```
.Description
  border-radius: 1.375rem
  &__button
    cursor: pointer
    &--border
      img
        border: 3px solid $main-contrast
```


------

## Data Fetching

#### Shopify + ENV
- Create an account in shopify and a store there.
- Create a .env to keep the variables. Add your real variables.  Like this ==>
```
SHOPIFY_HOSTNAME="HOST_SHOPIFY"
SHOPIFY_API_KEY="API_KEY_SHOPIFY"
CACHE_TOKEN=""
``` 
- This vars will never be exposed by Next.js BUT if we want to expose them just add the prefix "NEXT_PUBLIC_". As example ==>
```
NEXT_PUBLIC_SHOPIFY_HOSTNAME="HOST_SHOPIFY"
```
- Add a list of products in the Shopify platform. You can upload a list of product with a csv example provided by shopify.
- The shopify API use graphql. Just check the MainProducts.tsx to see how to get all the products. Is an async Promise add something like ==> 
```
const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-10/graphql.json`, {
method: 'POST', // GraphQL always uses POST
headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
},
body: JSON.stringify(graphqlQuery)
});
```

#### Loader for Products
- To show the products add some styles ==> MainProducts.modules.sass
- In MainProducts.tsx import Image and the styles ==>
```
import Image from "next/image";
import styles from "./MainProducts.module.sass";
```
- Next will show this error ==>
```
⨯ Error: Invalid src prop (https://cdn.shopify.com/s/files/1/0799/1027/3268/files/pRPPiS4.jpg?v=1766099883) on `next/image`, hostname "cdn.shopify.com" is not configured under images in your `next.config.js`
```
- This is because Next.js for security reason needs be config to receive images. So next.config.ts add ==>
```
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
        {
            hostname: 'cdn.shopify.com',
            protocol: 'https',
        }
        ]
    }
}
```
- We don't know how much time we need to get all the products so a loader to show during the load could be a nice UX. 
- New file /src/store/loading.tsx importing a Loader from the component/shared folder.
- If we have the loading will affect all the page ALL. We need to refactor a little bit to separate making all static file not related to the loading. OR use "suspense" to manage it. 


#### Route Grouping
- Route grouping is a seamless way to organize your Next.js project. Next.js allows us to create folders within the app directory that are not recognized as paths in the project. For this purpose, there exists a convention that you must follow if you intend to organize your files this way. To create folders that are not mapped as routes, you must enclose the folder’s name within brackets
```
📂/app/(home)/branding-campaign/page.tsx
```
- New folder /app/(home) there move the page.tsx and create new Layout with Hero and Description components.
- Delete Hero and Description component from the app/layout.tsx
- Move "loading" to this new folder (home). Now the loading is encapsulated here.
- Add some styles to Header.


#### Error
- Next.js implements the "React error boundary" with the file error.tsx
- To see how works new error.tsx file in /(home). 
- Important error.tsx should be a client component.
- As some error could happend when loading data or some async stuff we can add a button to "TRY AGAIN"
- To try this just add any error in MainProducts component ==>
```
  // throw new Error('Dummy Error')
```
- In error.tsx we can add useEffect to send data to an observability service like datadog Dynatrace etc etc
```
useEffect(() => {
console.log(error) 
}, []) 
```



























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
