import { useQuery } from '@tanstack/react-query';
import { usersQuery } from '../data/queries/users';
import SyncLoader from 'react-spinners/SyncLoader';
import { OwnersList } from '../components';
import { useState } from 'react';
import { OwnerDetail } from '../components/owner-detail';

export const Owners = () => {
	const { isLoading, error, data, isFetching } = useQuery(usersQuery);
	const [ owner, setOwner ] = useState(null);

	if ( isLoading || isFetching ) return <SyncLoader />;
	if (error) return 'An error has occurred: ' + (error as { message: string }).message
	return (
		<div className='flex items-top'>
			<OwnersList owners={data ?? []} />
			{ owner && <OwnerDetail owner={owner} /> }
		</div>
	)
}