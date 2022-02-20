import React from 'react'
import { createGlobalStyle } from 'styled-components'

// Styles
// const theme = {
// 	colors: {
// 		primary: '#fafafa',
// 	},
// }
// the "--rating" is an inlined custom CSS property
const GlobalStarRating = createGlobalStyle`
// :root {
//   --star-size: 60px;
//   --star-color: #fff;
//   --star-background: #fc0;
// }

:root {
  --star-size: 40px;
  --star-color: #fff;
  --star-background: #fc0;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);
  
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;
  
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

// Just to make a preview more beautifull

body {
  background: #eee;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
}

// * {
//   position: relative;
//   box-sizing: border-box;
// }
`

type Props = {
	ratingOfStars: number
}

export default function UnicodeStarRating(param: Props) {
	return (
		<>
			<GlobalStarRating></GlobalStarRating>
			<div
				className='Stars'
				style={{
					['--rating' as any]: param.ratingOfStars,
					['--star-color' as any]: '#b3b3b3',
				}}
				aria-label={
					`Rating of this product is` + param.ratingOfStars + ` out of 5.`
				}
			></div>
		</>
	)
}

// // Properties
// export interface CSSPropertiesWithVars extends CSSProperties {
// 	'--color': string
// 	'--rating': number
// 	// any other vars you may use
// }

// export interface CSSProperties extends CSS.Properties<string | number> {
// 	/**
// 	 * The index signature was removed to enable closed typing for style
// 	 * using CSSType. You're able to use type assertion or module augmentation
// 	 * to add properties or an index signature of your own.
// 	 *
// 	 * For examples and more information, visit:
// 	 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
// 	 */
// }
