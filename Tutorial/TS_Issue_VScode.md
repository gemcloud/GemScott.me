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
