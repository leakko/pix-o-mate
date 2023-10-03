import { UseQueryOptions } from '@tanstack/react-query'
import { goApiService } from '../services/go-api.service'
import { Owner } from '../types/owner'

export const usersQuery = (page: number): UseQueryOptions<Owner[]> => {
	return {
		queryKey: ['users', page],
		queryFn: () => {
			return goApiService.getUsers(page).then(resp => {
				return resp.data
			})
		},
		refetchOnWindowFocus: false,
		staleTime: 600000 // revalidate data every 10 minutes
	}
}