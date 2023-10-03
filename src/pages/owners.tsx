import { useInfiniteQuery } from '@tanstack/react-query';
import { usersQuery } from '../queries/users.query';
import SyncLoader from 'react-spinners/SyncLoader';
import { OwnersList, OwnerDetail } from '../components';
import { useState } from 'react';
import { Owner } from '../types/owner';
import { blackBorder } from '../data/tailwind-classes';
import React from 'react';

export const Owners = () => {
	const { error, data, fetchNextPage, status, hasNextPage, isFetchingNextPage } = useInfiniteQuery(usersQuery);
	const [ currentOwner, setCurrentOwner ] = useState<Owner | null>(null);

	if ( status === 'loading' ) return <SyncLoader />;
	if ( status === 'error' ) return 'An error has occurred: ' + (error as { message: string }).message
	
	return (
		<div className='flex items-top flex-col'>
			<div className='flex items-top flex-col-reverse md:flex-row'>
				<div className='flex flex-col'>
					{data?.pages.map((group, i) => (
						<React.Fragment key={i}>
						{ <OwnersList owners={group.data}  setCurrentOwner={setCurrentOwner} currentOwner={currentOwner} lastOwnerList={i === data?.pages.length - 1} /> }
						</React.Fragment>
					))}
					{isFetchingNextPage
						? <div className='flex justify-center mt-4'><SyncLoader /></div>
						: <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} className={`rounded-full py-1 mt-3 ${blackBorder} bg-white text-black`}>Ver más</button>
					}
				</div>
				{ currentOwner && <OwnerDetail owner={currentOwner} /> }
			</div>
		</div>
	)
}