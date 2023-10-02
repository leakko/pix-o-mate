import { useQuery } from '@tanstack/react-query';
import { usersQuery } from '../data/queries/users';
import SyncLoader from 'react-spinners/SyncLoader';
import { OwnersList } from '../components';
import { useState } from 'react';
import { OwnerDetail } from '../components/owner-detail';
import { Owner } from '../types/owner';

export const Owners = () => {
	const { isLoading, error, data, isFetching } = useQuery(usersQuery);
	const [ currentOwner, setCurrentOwner ] = useState<Owner | null>(null);

	if ( isLoading || isFetching ) return <SyncLoader />;
	if (error) return 'An error has occurred: ' + (error as { message: string }).message
	return (
		<div className='flex items-top flex-col-reverse md:flex-row'>
			<OwnersList owners={data ?? []}  setCurrentOwner={setCurrentOwner} currentOwner={currentOwner} />
			{ currentOwner && <OwnerDetail owner={currentOwner} /> }
		</div>
	)
}