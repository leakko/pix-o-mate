import axios from 'axios';
import { GO_API_ENDPOINTS } from '../data/constants/go-api-endpoints';

class GoApiService {
	getUsers(page: number) {
		return axios.get(GO_API_ENDPOINTS.USERS, {
			headers: { Authorization: `Bearer ${import.meta.env.VITE_GO_REST_TOKEN}` },
			params: { page }
		})
	}
}

export const goApiService = new GoApiService();