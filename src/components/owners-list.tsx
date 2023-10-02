import { Dispatch, SetStateAction } from 'react';
import { Owner } from '../types/owner';

interface Props {
	owners: Owner[],
	setCurrentOwner: Dispatch<SetStateAction<Owner | null>>,
	currentOwner: Owner | null
}

export const OwnersList: React.FC<Props> = ({ owners, currentOwner, setCurrentOwner }) => {
	const onClick = (owner: Owner): void => {
		const selectedUser = owner.id === currentOwner?.id ? null: owner;
		setCurrentOwner(selectedUser)
	}
	return (
		<ul>
			{ owners.map((owner, i) => {
				return (
					<li 
						className={`
							p-2 border-2 border-solid border-black cursor-pointer
							${i !== owners.length - 1 && 'border-b-0'}
							${owner.id === currentOwner?.id ? 'bg-black text-white': 'bg-white text-black'}
						`}
						onClick={() => onClick(owner)}
					>
						{ owner.name }, {owner.status}
					</li>
				)
			}) }
		</ul>
	)
}