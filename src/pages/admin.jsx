import React from 'react'
import dynamic from 'next/dynamic'
import { config } from '@/../cms/netlify.config' // you have to use "import config"!

// solution for jsx!!!
const NetlifyCMS = dynamic(
	async () =>
		import('netlify-cms-app').then(cms => {
			// cms.init({ config })
			cms.init(config)
		}),
	{
		ssr: false,
		loading: () => <p>Loading NetlifyCMS Admin...</p>,
	}
)

const AdminPage = () => {
	return <NetlifyCMS />
}

export default AdminPage

// TODO: maybe

// const namedComponent = async <T, N extends keyof T>(
// 	modPromise: Promise<T>,
// 	exportName: N
// ) => {
// 	const mod = await modPromise
// 	return mod[exportName]
// }

// const NetlifyCMS = {
// 	CheckboxFormControl: dynamic(() =>
// 		namedComponent(
// 			import('netlify-cms-app').then(cms => {
// 				cms.init({ config })
// 			}),
// 			{ ssr: false, loading: () => <p>Netfily CMS Loading...</p> }
// 		)
// 	),
// }

// // const NetlifyCMS = dynamic<{}>(
// const NetlifyCMS = dynamic(
// 	(): any =>
// 		import('netlify-cms-app').then(cms => {
// 			// cms.NetlifyCmsApp.init({ config })
// 			// return cms.NetlifyCmsApp.init({ config })
// 			cms.NetlifyCmsApp.init({ config } : CmsConfig)
// 		}),
// 	{ ssr: false, loading: () => <p>Netfily CMS Loading...</p> }
// )

// const NetlifyCMS = dynamic(
// 	() =>
// 		import('netlify-cms-app').then(cms => {
// 			cms.init({ config })
// 		}),
// 	{ ssr: false, loading: () => <p>Netfily CMS Loading...</p> }
// )

// const NetlifyCMS = dynamic(
// 	() =>
// 		import('netlify-cms-app').then(cms => {
// 			cms.init({ config })
// 		}),
// 	{ ssr: false, loading: () => <p>Netfily CMS Loading...</p> }
// )

// const AdminPage: React.FC = () => {
// 	return <NetlifyCMS />
// }

// export default AdminPage

// import React from 'react'
// import dynamic from 'next/dynamic'
// import config from '@/../cms/netlify.config' // you have to use "import config"!
// // import CMS from 'netlify-cms-app'
// // you can hard-code as below:
// // const config = {
// // 	cms_manual_init: true,
// // 	backend: {
// // 		name: 'github',
// // 		repo: 'gemcloud/GemScott.me',
// // 		branch: 'main',
// // 	},
// // 	media_folder: 'public/images',
// // 	public_folder: 'images',
// // 	collections: [
// // 		{
// // 			name: 'pages',
// // 			label: 'Pages',
// // 			files: [
// // 				{
// // 					label: 'Home',
// // 					name: 'home',
// // 					file: 'content/pages/home.md',
// // 					fields: [
// // 						{
// // 							label: 'Hero Title',
// // 							name: 'hero_title',
// // 							widget: 'string',
// // 						},
// // 						{
// // 							label: 'Hero Description',
// // 							name: 'hero_description',
// // 							widget: 'markdown',
// // 						},
// // 						{
// // 							label: 'Hero Image',
// // 							name: 'hero_image',
// // 							widget: 'image',
// // 						},
// // 					],
// // 				},
// // 			],
// // 		},
// // 	],
// // }

// // const namedComponent = async <T, N extends keyof T>(modPromise: Promise<T>, exportName: N) => {
// //   const mod = await modPromise;
// //   return mod[exportName];
// // };

// // //  dynamic(async () => {
// // //     const mod = await import('./blocks/FormBlock/CheckboxFormControl');
// // //     return mod.CheckboxFormControl;
// // //   }),

// // const NetlifyCMS = dynamic(async () =>
// // 		import('netlify-cms-app').then(cms => {
// // 			cms.init({ config })
// // 		}),
// // 	{
// // 		ssr: false,
// // 		loading: () => <p>Loading NetlifyCMS Admin...</p>,
// // 	}
// // )

// // const NetlifyCMS = {

// //   CheckboxFormControl: dynamic(() =>
// //     namedComponent(import('./blocks/FormBlock/CheckboxFormControl'), 'CheckboxFormControl')
// //   ),

// // }

// // const NetlifyCMS = {
// // 	CheckboxFormControl: dynamic(() =>
// // 		namedComponent(CMS.init({ config })
// // // 		}), 'CheckboxFormControl')
// // 	),
// // }

// // const MyComponent = dynamic<{}>(
// // 	() => import('netlify-cms-app').then(cms => {cms.init({ config })),
// // 	{
// // 		ssr: false,
// // 		loading: () => <p>Loading NetlifyCMS Admin...</p>,
// // 	}
// // )

// // const Sample = dynamic(() => import('netlify-cms-app'), { ssr: false })

// // const CMS = dynamic<{}>(()) =>
// // 		import('netlify-cms-app').then(cms => {
// // 			cms.init({ config })
// // 		}),
// // 	{
// // 		ssr: false,
// // 		loading: () => <p>Loading NetlifyCMS Admin...</p>,
// // 	}
// // )
