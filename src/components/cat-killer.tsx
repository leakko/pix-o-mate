import { useState } from 'react';
import { FaCat } from 'react-icons/fa';

export const CatKiller = () => {
	const [ catsKilled, setCatsKilled ] = useState<number>(0);
	return (
		<div className='flex items-center'>
			<FaCat />
			<p className='ml-1'>{ catsKilled }</p>
		</div>
	)
}