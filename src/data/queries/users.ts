import { UseQueryOptions } from '@tanstack/react-query'
import { goApiService } from '../../services/go-api.service'
import { Owner } from '../../types/owner'

export const usersQuery: UseQueryOptions<Owner[]> = {
	queryKey: ['users'],
	queryFn: () => {
		return goApiService.getUsers().then(resp => {
			return resp.data
		})
	},
	refetchOnWindowFocus: false,
	staleTime: 600000 // revalidate data every 10 minutes
}