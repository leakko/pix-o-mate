import { UseQueryOptions } from '@tanstack/react-query'
import { goApiService } from '../../services/go-api.service'

export const usersQuery: UseQueryOptions = {
	queryKey: ['users'],
	queryFn: () => {
		return goApiService.getUsers().then(resp => {
			return resp.data
		})
	},
	refetchOnWindowFocus: false
}