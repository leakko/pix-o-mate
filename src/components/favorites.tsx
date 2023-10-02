import { useContext } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FavoritesContext } from '../providers/favorites';

export const Favorites = () => {
	const { favorites } = useContext(FavoritesContext);

	return (
		<div  className='flex items-center'>
			<AiFillHeart />
			<p className='ml-1'>{ favorites?.length || 0 }</p>
		</div>
	)
}