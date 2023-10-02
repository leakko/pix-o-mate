import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { usersQuery } from '../data/queries/users';
import SyncLoader from 'react-spinners/SyncLoader';
import { OwnersList } from '../components';

export const Owners = () => {
	const { isLoading, error, data, isFetching } = useQuery(usersQuery);

	if ( isLoading || isFetching ) return <SyncLoader />;
	if (error) return 'An error has occurred: ' + (error as { message: string }).message
	return (
		<div>
			<OwnersList owners={data ?? []} />
			<Link to="/" className='block mt-3'>Go back</Link>
		</div>
	)
}