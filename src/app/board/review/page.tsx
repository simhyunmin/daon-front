'use client';
import Link from 'next/link';

// 임시 데이터
const reviews = [
  {
    id: 1,
    title: "처음으로 참여한 공원 청소 봉사 후기",
    author: "김다온",
    date: "2024-03-15",
    views: 42,
    volunteerTitle: "지역 공원 청소 봉사",
  },
  {
    id: 2,
    title: "노인복지관 급식 봉사 다녀왔습니다",
    author: "이봉사",
    date: "2024-03-14",
    views: 38,
    volunteerTitle: "노인복지관 급식 봉사",
  },
];

export default function ReviewBoard() {
  return (
    <div className="min-h-screen bg-orange-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-amber-900">봉사활동 후기</h1>
            <Link
              href="/board/review/write"
              className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800"
            >
              후기 작성
            </Link>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-amber-200">
              {reviews.map((review) => (
                <li key={review.id}>
                  <Link href={`/board/review/${review.id}`} className="block hover:bg-orange-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-amber-900">{review.title}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">봉사활동: {review.volunteerTitle}</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="mr-4">작성자: {review.author}</span>
                          <span>조회수: {review.views}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 