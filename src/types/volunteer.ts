export interface Volunteer {
  idx: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  currentParticipants: number;
  maxParticipants: number;
  requirements: string;
  organizerName: string;
  organizerContact: string;
  createdAt: string;
}

export interface VolunteerDetail extends Volunteer {
  participants: {
    userIdx: number;
    name: string;
    nickname: string;
  }[];
}

export interface Review {
  idx: number;
  volunteerIdx: number;
  content: string;
  author: string;
  date: string;
  location?: string;
  likes?: number;
  preview?: string;
} 