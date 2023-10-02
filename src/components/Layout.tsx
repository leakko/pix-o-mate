import { Outlet, useLocation } from 'react-router-dom';
import { CatKiller } from './cat-killer';
import { Favorites } from './favorites';
import { useEffect, useState } from 'react';


export const Layout: React.FC = () => {
	const location = useLocation();
	const [ title, setTitle ] = useState('HOME');

	
	useEffect(() => {
		const currentSection = location.pathname.replace('/', '').toUpperCase() || 'HOME';
		setTitle(currentSection);
	}, [location, setTitle]);

	return (
		<>
			<header className='flex justify-between items-center'>
				<CatKiller />
				<h1 className='text-3xl font-bold'>{ title }</h1>
				<Favorites />
			</header>
			<main className='mt-20 flex justify-center items-center'>
				<Outlet />
			</main>
		</>
	)
}