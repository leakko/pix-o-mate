import { useQuery } from '@tanstack/react-query';
import { usersQuery } from '../data/queries/users';
import { blackBorder } from '../data/tailwind-classes';
import { useNavigate } from 'react-router-dom';


export const Home = () => {
	const { isLoading, error, data, isFetching } = useQuery(usersQuery);

	if ( isLoading || isFetching ) return 'Loading...'
	if (error) return 'An error has occurred: ' + (error as { message: string }).message


	return (
		<>
			<button className={`mr-5 md:mr-10 p-5 md:p-10 ${blackBorder}`}>Dueños</button>
			<button className={`p-10 p-5 md:p-10 ${blackBorder}`}>Buscar</button>
		</>
	)
}