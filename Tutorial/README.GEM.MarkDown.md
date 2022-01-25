## MarkDown as your CMS

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

### solution : https://blog.logrocket.com/how-to-safely-render-markdown-using-react-markdown/

1. To use "react-markdown".
2. source codes : MarkdownToHtml.tsx + PrintMarkdown.tsx
3. install
   ```
    1. > npm i gray-matter
    2. > npm install react-markdown
    3. > npm i remark-gfm
   ```
