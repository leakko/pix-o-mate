import { Dispatch, SetStateAction } from 'react';
import { Owner } from '../types/owner';

interface Props {
	owners: Owner[],
	setCurrentOwner: Dispatch<SetStateAction<Owner | null>>,
	currentOwner: Owner | null,
	lastOwnerList: boolean
}

export const OwnersList: React.FC<Props> = ({ owners, currentOwner, setCurrentOwner, lastOwnerList }) => {
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
							p-2 border-2 border-solid border-black cursor-pointer border-b-0
							${ lastOwnerList && i === owners.length - 1 && 'border-b-2' }
							${owner.id === currentOwner?.id ? 'bg-black text-white': 'bg-white text-black'}
						`}
						onClick={() => onClick(owner)}
						key={ owner.id }
					>
						{ owner.name }, {owner.status}
					</li>
				)
			}) }
		</ul>
	)
}