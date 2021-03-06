## 2022-02-21: MarkDown (eXtension) as your CMS

```
Install
1. next-mdx-remote     // "next-mdx-remote": "^3.0.8",

```

```
# using npm
npm i next-mdx-remote@3.0.8

# using yarn
yarn add next-mdx-remote
```

2. next-remote-watch

```
npm i next-remote-watch
npm uninstall next-remote-watch
```

"dev:watch": "next-remote-watch ./\_pages",

## 2022-02-21: [Styling Rich Text and Markdown with Tailwind Typography](https://zaengle.com/blog/tailwind-typography-plugin)

### 1. Step 1: Install the plugin

```

# Using npm

> npm install @tailwindcss/typography

# Using Yarn

> yarn add @tailwindcss/typography
```

### 2. Step 2: Add it to your tailwind config file

```
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

### 3. Step 3: Write this simple code:

```
<div class="prose">
	{{ content }}
</div>
```

---

{{ content }} is an antlers variable so it may change for you. In this case, it maps to a markdown field in the CMS.

## terms:

- MDX: MDX is a superset of Markdown. It allows you to write JSX inside markdown. This includes importing and rendering React components!
- "gray-matter" read DM(X) files.
- frontmatter:

### solution one : https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/

1. To use "react-markdown".
2. source codes : MarkdownToHtml.tsx + PrintMarkdown.tsx
3. install
   ```
    1. > npm i gray-matter
    2. > npm install react-markdown
    3. > npm i remark-gfm
   ```

### solution two : to use "markdown-it" to see "pages/post/[slug].tsx"

https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour

```
>npm install markdown-it
>npm install --save @types/markdown-it
```

### Terms & knowlegment

- AST : Abstract Syntax Tree

### unified / Remark ecosystem: the process of a processor.

| ........................ process ........................... |
| .......... parse ... | ... run ... | ... stringify ..........|

          +--------+                     +----------+

Input ->- | Parser | ->- Syntax Tree ->- | Compiler | ->- Output
+--------+ | +----------+
X
|
+--------------+
| Transformers |
+--------------+

===========Below not work!!!=====================================

### install related npm libs

remark-parse
remark-react

```
> npm i remark-parse
> npm i remark-react
```

try

> npm i remark-typescript

### uninstall 2022-01-23

> npm uninstall strip-comments
> npm uninstall strip-html-comments
> npm uninstall remark-typescript
> npm uninstall remark-parse
> npm uninstall remark-react

[2022-01-23]
https://css-tricks.com/responsible-markdown-in-next-js/

install

1. import { unified } from 'unified'
2. import markdown from 'remark-parse'
3. import prism from 'remark-prism'

https://github.com/cleggacus/next-blog-medium-tutorial

1.  "gray-matter": "^4.0.3",
    > npm i gray-matter
2.  "react-markdown": "^6.0.2",
    > npm i react-markdown
3.  "react-syntax-highlighter": "^15.4.3"
4.  "@types/react-syntax-highlighter": "^13.5.0", >npm i react-syntax-highlighter >npm install --save @types/react-syntax-highlighter
    https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/

5.  remark-gfm

```
    >npm i remark-gfm
```

## Error MarkDown file date

```
date: 2022-01-29
```

Error serializing `.posts[5].frontmatter.date` returned from `getStaticProps` in "/blog".
Yarn build worked!

```
date: '2022-01-29'
```

solution: we have to format Date
on netlify config.yml

```
    format: 'Do MMM YYYY'
```
