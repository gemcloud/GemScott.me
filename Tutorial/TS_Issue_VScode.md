## 2022-03-13

Production issue : recaptcha
ERROR for site owner:
Invalid domain for site key

## 2022-01-21

### Helper:

- React Prop Types with TypeScript
  [https://www.benmvp.com/blog/react-prop-types-with-typescript/](https://www.benmvp.com/blog/react-prop-types-with-typescript/)

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

## getStaticProps 7031 Binding element 'slug' implicitly has an 'any'

type.ts(7031) Binding element 'slug' implicitly has an 'any' type.ts(7031)

### ts-2339: "Property 'title' does not exist on type '{}'.ts(2339)"???

Property 'title' does not exist on type 'string | { slug: string; length: number; toString(): string; toLocaleString(): string; pop(): string | undefine

[https://simplernerd.com/typescript-dynamic-json/](https://simplernerd.com/typescript-dynamic-json/)

#### Solution 1. Quick and dirty : add "any"

```
		//({ title, slug, navigation, footer }) => ({
		({ title, slug, navigation, footer }: any) => ({

```

#### Solution 2: The Proper Fix : Consistency is key.

```
interface ExampleObject {
    [key: string]: any
}
let obj: ExampleObject = {};
obj.key1 = 1;
obj['key2'] = 'dog';

```

```
let obj: {[k: string]: any} = {};
obj.key1 = 1;
obj['key2'] = 'dog';

```

#### Solution 3: The JavaScript Fix: Pure JavaScript.

Object.assign().

```
let obj = {};
Object.assign(obj, {key1: 1});
Object.assign(obj, {key2: 'dog'});

```

## ts-2345: Argument of type 'string[]' is not assignable to parameter of type 'never[]'. Type 'string' is not assignable to type 'never'.ts(2345)

-Solution : add "(fields: string[] = [])"

- Solution : let name1:string = person.name!;
  // ^ note the exclamation mark here

```
export function getAllDynamicPages(fields: string[] = []) {
```

##

export function getSlugsFromDirectory(dir: fs.PathLike) {
return fs.readdirSync(dir)
}

## Type error: Element implicitly has an 'any' type because expression of type '"slug"' can't be used to index type '{}'.

Property 'slug' does not exist on type '{}'.
Element implicitly has an 'any' type because expression of type '' can't be used to index type '{}'.

- solution: add ": any"
  [https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript](https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript)

```
	// const items = {}
	const items : any = {}
   // var obj: any = {}
	// 	obj.prop = 5

```

### import('netlify-cms-app')

Failed to compile.
ts 2345 is not assignable to parameter of type 'DynamicOptions<{}> | Loader<{}>'

2345 Argument of type '() => Promise<void | React.ComponentClass<never, any> | React.FunctionComponent<never> | { default: React.ComponentType<never>; }>' is not assignable to parameter of type 'DynamicOptions<{}> | Loader<{}>'.
Type '() => Promise<void | React.ComponentClass<never, any> | React.FunctionComponent<never> | { default: React.ComponentType<never>; }>' is not assignable to type '() => LoaderComponent<{}>'.
Type 'Promise<void | ComponentClass<never, any> | FunctionComponent<never> | { default: ComponentType<never>; }>' is not assignable to type 'LoaderComponent<{}>'.
Type 'void | ComponentClass<never, any> | FunctionComponent<never> | { default: ComponentType<never>; }' is not assignable to type 'ComponentType<{}> | { default: ComponentType<{}>; }'.
Type 'void' is not assignable to type 'ComponentType<{}> | { default: ComponentType<{}>; }'.ts(2345)
