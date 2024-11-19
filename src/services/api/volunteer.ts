import axios from 'axios';

const BASE_URL = 'http://localhost:4999/api';

export const volunteerApi = {
  getVolunteers: async () => {
    const response = await axios.get(`${BASE_URL}/volunteers`);
    return response.data;
  },

  getVolunteerDetail: async (id: string) => {
    const response = await axios.get(`${BASE_URL}/volunteers/${id}`);
    return response.data;
  },

  applyVolunteer: async (id: string) => {
    const response = await axios.post(`${BASE_URL}/volunteers/${id}/apply`);
    return response.data;
  }
}; 