import { useQuery } from '@tanstack/react-query';
import { goApiService } from '../services/go-api.service';


export const Home = () => {
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ['users'],
		queryFn: () => {
			return goApiService.getUsers().then(resp => {
				return resp.data
			})
		}
	})

	if ( isLoading || isFetching ) return 'Loading...'
	if (error) return 'An error has occurred: ' + (error as { message: string }).message

	return (
		<>
			{ JSON.stringify(data) }
		</>
	)
}