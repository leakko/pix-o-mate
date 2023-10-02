import { blackBorder } from '../data/tailwind-classes'
import { Owner } from '../types/owner'

interface Props {
	owner: Owner
}

export const OwnerDetail: React.FC<Props> = ({ owner }) => {
	return (
		<div className={`${blackBorder}`}>
			{
				Object.values(owner).map(value => <p>{value}</p>)
			}
		</div>
	)
}