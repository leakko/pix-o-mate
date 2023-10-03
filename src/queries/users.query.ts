import { UseInfiniteQueryOptions } from '@tanstack/react-query'
import { goApiService } from '../services/go-api.service'
import { Owner } from '../types/owner'
import { AxiosResponse } from 'axios'

export const usersQuery: UseInfiniteQueryOptions<AxiosResponse<Owner[]>> = {
		queryKey: ['users'],
		queryFn: ({ pageParam = 1 }) => {
			return goApiService.getUsers(pageParam)
			.then(resp => {
				// TODO: Increment dead cats counter
				return resp;
			})
			.then(resp => {
				return resp
			})
		},
		getNextPageParam: (lastPage: AxiosResponse, _) => Number(lastPage.headers['x-pagination-page']) + 1,
		refetchOnWindowFocus: false,
		staleTime: 600000 // revalidate data every 10 minutes
}