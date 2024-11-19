'use client';

import { useEffect, useState } from 'react';
import { volunteerService } from '@/services/volunteerService';
import { Volunteer } from '@/types/volunteer';

export default function VolunteerPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const data = await volunteerService.getVolunteers();
        setVolunteers(data);
      } catch (error) {
        console.error('봉사활동 목록을 불러오는데 실패했습니다:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">봉사활동 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteers.map((volunteer) => (
          <div key={volunteer.idx} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{volunteer.title}</h2>
            <p className="text-gray-600">{volunteer.description}</p>
            <div className="mt-2">
              <span className="text-sm text-gray-500">장소: {volunteer.location}</span>
              <span className="text-sm text-gray-500 ml-4">날짜: {volunteer.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 