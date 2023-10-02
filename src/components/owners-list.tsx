import { Owner } from '../types/owner';

interface Props {
	owners: Owner[]
}

export const OwnersList: React.FC<Props> = ({ owners }) => {
	return (
		<ul>
			{ owners.map(({name, status}, i) => {
				return (
					<li className={`p-2 border-2 border-solid border-black ${i !== owners.length - 1 && 'border-b-0'}`}>
						{ name }, {status}
					</li>
				)
			}) }
		</ul>
	)
}