import { RouteObject } from 'react-router-dom'
import { Home } from '../pages/home'

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "about",
		element: <div>About</div>,
	},
  ]