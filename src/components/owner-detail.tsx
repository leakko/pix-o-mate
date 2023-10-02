import { blackBorder } from '../data/tailwind-classes'
import { Owner } from '../types/owner'

interface Props {
	owner: Owner
}

export const OwnerDetail: React.FC<Props> = ({ owner }) => {
	return (
		<div className={`p-3 my-3 md:mx-2 md:my-0 ${blackBorder}`}>
			<p>{ owner.name }</p>
			<p>{ owner.status }</p>
			<p>{ owner.gender }</p>
			<p>{ owner.email }</p>
		</div>
	)
}