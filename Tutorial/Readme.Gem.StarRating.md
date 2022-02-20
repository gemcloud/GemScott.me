## A Five Star Rating Component, implement images by difference ways!

[StarRating](https://css-tricks.com/five-methods-for-five-star-ratings/)
[w3c]https://www.w3schools.com/howto/howto_css_star_rating.asp

#### We have several ways to implement images.

1. Image Files
2. Background Image
3. SVG --> SVGStarRating
4. CSS Shapes
5. Unicode Symbols --> UnicodeStarRating

#### Nextjs + typescript +styled-components(https://dev.to/rffaguiar/nextjs-typescript-styled-components-1i3m#styled-components)

`

> npm install --save styled-components
> npm i @types/styled-components
> `

#### Fixed TS style css variables (https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)

Fix CSS variable keys in style attributes in React and Typescript(https://chaseadams.io/posts/typescript-var-cssproperties/)

`style={{ ['--rating' as any]: param.ratingOfStars }}`
