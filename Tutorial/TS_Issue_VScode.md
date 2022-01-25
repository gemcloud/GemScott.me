## 2022-01-21

Fixed 1. TS2602 :
==> by reloading VSCode.
Ctrl + p and type "> Developer: Reload Window"

Fixed 2. Prevent missing props validation in a React component definition (react/prop-types)
https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md

e.g. const PageTemplate: NextPage<Props> = ({ content }: Props) => {

3. mapping "prop-types" to TypeScirpt interface
   // import PropTypes from 'prop-types'
   // Layout.propTypes = {
   // children: PropTypes.node.isRequired,
   // pageTitle: PropTypes.string.isRequired,
   // links: PropTypes.arrayOf(
   // PropTypes.exact({
   // title: PropTypes.string,
   // href: PropTypes.string,
   // navigation: PropTypes.bool,
   // footer: PropTypes.bool,
   // })
   // ).isRequired,
   // }

4. TypeError: links.filter is not a function
   -solution:
   const navLinks = Object.values(links).filter(({ navigation }) => navigation)

5. Invalid href passed to next/router: \, repeated forward-slashes (//) or backslashes \ are not valid in the href
   Invalid href passed to next/router: \about, repeated forward-slashes (//) or backslashes \ are not valid in the href
   Invalid href passed to next/router repeated forward-slashes (//) or backslashes \ are not valid in the href
   next link typescript repeated forward-slashes (//)

Fixed 6. use /_ eslint-disable @next/next/no-img-element _/ to build codes to avoid error

```
	// eslint-disable-next-line no-unused-vars
```

Fixed 7. Property 'content' does not exist on type 'string[]'.ts(2339)  
 Solution : https://stackoverflow.com/questions/38324949/error-ts2339-property-x-does-not-exist-on-type-y
`// markdown: page.content markdown: (page as any).content,`

Fixed 8. Invalid href passed to next/router: \, repeated forward-slashes (//) or backslashes \ are not valid in the href
origConsoleError.apply(window.console, args);
Solution : https://dev.to/gemcloud/invalid-href-passed-to-nextrouter-onnext-1207-269l

### Image : we should use next js image component by

[Next.js automatic image optimization with next/image](https://blog.logrocket.com/next-js-automatic-image-optimization-next-image/)

```
import Image from 'next/image'
```

<img src={require('../../images/stress.jpg')} />
[object Module]
