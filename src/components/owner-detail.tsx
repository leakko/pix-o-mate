import { useContext, useMemo } from 'react'
import { blackBorder } from '../data/tailwind-classes'
import { Owner } from '../types/owner'
import { FavoritesContext } from '../providers/favorites'

interface Props {
	owner: Owner
}

export const OwnerDetail: React.FC<Props> = ({ owner }) => {
	const { favorites, addFavorite,removeFavorite } = useContext(FavoritesContext);

	const isFavorite = useMemo(() => {
		return !!favorites.find(favorite => favorite.id === owner.id)
	}, [favorites, owner.id]);

	const onclick = (owner: Owner): void => {
		isFavorite ? removeFavorite(owner) : addFavorite(owner);
	}

	return (
		<div className={`flex flex-col justify-between p-3 my-3 md:mx-2 md:my-0 ${blackBorder}`}>
			<div>
				<p>{ owner.name }</p>
				<p>{ owner.status }</p>
				<p>{ owner.gender }</p>
				<p>{ owner.email }</p>
			</div>
			<button 
				className={`rounded-full py-1 ${blackBorder} ${isFavorite ? 'bg-black text-white': 'bg-white text-black'}`}
				onClick={() => onclick(owner)}
			>
				{ `${isFavorite ? 'Quitar de ' : 'Añadir a '}  favoritos` }
			</button>
		</div>
	)
}