import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/home'
import { Layout } from '../components/Layout'
import { Owners } from '../pages/owners'

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'owners',
				element: <Owners />
			}
		]
	},
  ]