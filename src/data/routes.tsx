import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/home'
import { Layout } from '../components/Layout'

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout title="Home" />,
		children: [
			{
				index: true,
				element: <Home />
			}
		]
	},
  ]