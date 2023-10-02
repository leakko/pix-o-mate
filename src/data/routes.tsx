import { RouteObject } from 'react-router-dom';
import { Layout } from '../components';
import { Home, Owners, Search } from '../pages'

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
			},
			{
				path: 'search',
				element: <Search />
			}
		]
	},
  ]