import { createContext, useMemo, useReducer } from 'react';
import { Owner } from '../types/owner';
import { FavoritesActions } from '../types/favorites.actions';

interface Props {
	children: React.ReactNode
}

interface IFavoritesContext {
	favorites: Owner[],
	addFavorite: (favorite: Owner) => void,
	removeFavorite: (favorite: Owner) => void
}

export const FavoritesContext = createContext<IFavoritesContext>({ favorites: [], addFavorite: () => {}, removeFavorite: () => {} });

const reducer = (state: Owner[], action: { type: FavoritesActions, payload: Owner }) => {
	switch (action.type) {
		case FavoritesActions['[Favorites] Add']: {
			const alreadyExistingFavourite = state.find(favorite => favorite.id === action.payload.id);
			return alreadyExistingFavourite ? state : [...state, action.payload];
		}
		case FavoritesActions['[Favorites] Remove']: {
			return state.filter(favorite => favorite.id !== action.payload?.id);
		}
	}
}

export const FavoritesProvider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, []);
	const providerValue: IFavoritesContext = useMemo(() => {
		return {
			favorites: state,
			addFavorite: (favorite: Owner) => dispatch({ type: FavoritesActions['[Favorites] Add'], payload: favorite }),
			removeFavorite: (favorite: Owner) => dispatch({ type: FavoritesActions['[Favorites] Remove'], payload: favorite })
		}
	}, [state, dispatch])

	return (
		<FavoritesContext.Provider value={providerValue}>
			{ children }
		</FavoritesContext.Provider>
	)
}