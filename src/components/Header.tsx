import { CatKiller } from './cat-killer';
import { Favorites } from './favorites';

interface Props {
	title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
	return (
		<div className='flex justify-between items-center'>
			<CatKiller />
			<h1 className='text-3xl font-bold'>{title}</h1>
			<Favorites />
		</div>
	)
}