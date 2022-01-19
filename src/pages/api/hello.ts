/** A JSDoc Comment to explain what the function does.
 * Home: The Landing page of the web app
 * @return {JSX.Element} The JSX Code for the Home Page
 */
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	name: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ name: 'John Doe' }) // Scott Tiger
}
