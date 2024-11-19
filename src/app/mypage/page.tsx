'use client';
import Link from 'next/link';

// 임시 데이터
const myVolunteers = [
  {
    id: 1,
    title: "지역 공원 청소 봉사",
    date: "2024-04-01",
    status: "신청완료",
    location: "서울시 강남구",
  },
  {
    id: 2,
    title: "노인복지관 급식 봉사",
    date: "2024-04-15",
    status: "활동완료",
    location: "서울시 서초구",
  },
];

export default function MyPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-amber-900 mb-8">마이페이지</h1>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-medium text-amber-900">나의 봉사활동</h2>
            </div>
            
            <div className="border-t border-amber-200">
              <ul className="divide-y divide-amber-200">
                {myVolunteers.map((volunteer) => (
                  <li key={volunteer.id} className="px-4 py-4 sm:px-6 hover:bg-orange-50">
                    <Link href={`/volunteer/${volunteer.id}`} className="block">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-amber-900">{volunteer.title}</h3>
                          <div className="mt-2 flex items-center text-sm text-gray-600">
                            <span className="mr-4">📍 {volunteer.location}</span>
                            <span>📅 {volunteer.date}</span>
                          </div>
                        </div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium
                            ${volunteer.status === '신청완료' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {volunteer.status}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}