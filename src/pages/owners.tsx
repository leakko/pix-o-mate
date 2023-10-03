import { useQuery } from '@tanstack/react-query';
import { usersQuery } from '../queries/users.query';
import SyncLoader from 'react-spinners/SyncLoader';
import { OwnersList, OwnerDetail } from '../components';
import { useState } from 'react';
import { Owner } from '../types/owner';
import { blackBorder } from '../data/tailwind-classes';

const owners: Owner[][] = [];

export const Owners = () => {
	const [ loadedPage, setLoadedPage ] = useState(1);
	const { isLoading, error, data, isFetching } = useQuery(usersQuery(loadedPage));
	const [ currentOwner, setCurrentOwner ] = useState<Owner | null>(null);

	if ( loadedPage === 1 && (isLoading || isFetching) ) return <SyncLoader />;
	if (error) return 'An error has occurred: ' + (error as { message: string }).message

	if(data) owners[loadedPage] = data;
	
	return (
		<div className='flex items-top flex-col'>
			<div className='flex items-top flex-col-reverse md:flex-row'>
				<OwnersList owners={owners.flat()}  setCurrentOwner={setCurrentOwner} currentOwner={currentOwner} />
				{ currentOwner && <OwnerDetail owner={currentOwner} /> }
			</div>
			{ (isLoading || isFetching) && <div className='flex justify-center my-1'><SyncLoader /></div>}
			<button onClick={() => setLoadedPage(page => page + 1)} className={`rounded-full py-1 mt-3 ${blackBorder} bg-white text-black`}>Ver más</button>
		</div>
	)
}