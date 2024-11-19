import { Volunteer, VolunteerDetail } from '@/types/volunteer';

interface VolunteerService {
  getVolunteers: () => Promise<Volunteer[]>;
  getVolunteerById: (id: number) => Promise<VolunteerDetail>;
  createVolunteer: (data: Partial<Volunteer>) => Promise<Volunteer>;
}

export const volunteerService: VolunteerService = {
  getVolunteers: async () => {
    const response = await fetch('/api/volunteers');
    return response.json();
  },

  getVolunteerById: async (id: number) => {
    const response = await fetch(`/api/volunteers/${id}`);
    return response.json();
  },

  createVolunteer: async (data) => {
    const response = await fetch('/api/volunteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
}; 