## Tailwind CSS + TypeScript + Next.js Starter

Install Tailwind CSS with Next.js
https://tailwindcss.com/docs/guides/nextjs
https://dev.to/waldo/next-js-typescript-tailwind-css-project-setup-4kcj
https://daily-dev-tips.com/posts/setting-up-nextjs-with-tailwind-css/

### Adding Tailwind CSS for our styling

#### 1. The first step we have to do is, install the dependencies that are required for Tailwind.

```command
>npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
or
>npm install tailwindcss@latest --save-dev postcss@latest --save-dev autoprefixer@latest --save-dev
```

#### 2. Then we can initialize Tailwind by running the following command. It will create all the side files we need.

```command
>npx tailwindcss init -p
```

Then, - tailwind.config.js and - postcss.config.js
two files will be generated.

#### 3. Setting "tailwind.config.js"

Check path is correct! "./src/pages" or "./pages" etc.

```
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
```

#### 4. The last step to making everything work is modifying the existing styles/global.scss file.

Rewrite to read the CSS generated by Tailwind CSS src/styles/globals.scs.

```
//src/styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And "import src/styles/globals.css" on \_app.tsx file.

## How to Install this plugin

#### 1. install plugin (e.g. typography)

```
>npm install -D @tailwindcss/typography
```

#### 2. Open the tailwind.config.js file and add it under the plugins section.

```
plugins: [require('@tailwindcss/typography')],
```

## testing & prove

> npm i postcss-preset-env
> npm i @types/postcss-preset-env