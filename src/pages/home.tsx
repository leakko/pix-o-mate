import { blackBorder } from '../data/tailwind-classes';
import { Link } from 'react-router-dom';


export const Home = () => {
	return (
		<>
			<Link to="owners">
				<button className={`mr-5 md:mr-10 p-5 md:p-10 ${blackBorder}`}>Dueños</button>
			</Link>
			<Link to="search">
				<button className={`p-10 p-5 md:p-10 ${blackBorder}`}>Buscar</button>
			</Link>
		</>
	)
}