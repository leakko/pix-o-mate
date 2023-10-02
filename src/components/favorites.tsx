import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';

export const Favorites = () => {
	const [ favorites, setFavorites ] = useState<number>(0);

	return (
		<div  className='flex items-center'>
			<AiFillHeart />
			<p className='ml-1'>{ favorites }</p>
		</div>
	)
}