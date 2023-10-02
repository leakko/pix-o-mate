import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/Header';
import { usersQuery } from '../data/queries/users';


export const Home = () => {
	const { isLoading, error, data, isFetching } = useQuery(usersQuery);

	if ( isLoading || isFetching ) return 'Loading...'
	if (error) return 'An error has occurred: ' + (error as { message: string }).message

	return (
		<>
			<Header title="Home" />
			Hello
		</>
	)
}