import { Outlet } from 'react-router-dom';
import { CatKiller } from './cat-killer';
import { Favorites } from './favorites';

interface Props {
	title: string;
}

export const Layout: React.FC<Props> = ({ title }) => {
	return (
		<>
			<header className='flex justify-between items-center'>
				<CatKiller />
				<h1 className='text-3xl font-bold'>{title}</h1>
				<Favorites />
			</header>
			<main className='mt-20 flex justify-center items-center'>
				<Outlet />
			</main>
		</>
	)
}