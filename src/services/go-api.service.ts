import axios from 'axios';
import { User } from '../types/user';
import { GO_API_ENDPOINTS } from '../constants/go-api-endpoints';

class GoApiService {
	getUsers(): Promise<{ data: User[] }> {
		return axios.get(GO_API_ENDPOINTS.USERS, {
			headers: { Authorization: `Bearer ${import.meta.env.VITE_GO_REST_TOKEN}` }
		})
	}
}

export const goApiService = new GoApiService();