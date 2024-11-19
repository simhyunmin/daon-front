'use client';
import Link from 'next/link';

// 임시 데이터
const posts = [
  {
    id: 1,
    title: "봉사활동 처음 시작하시는 분들께 추천드립니다",
    author: "김다온",
    date: "2024-03-15",
    views: 128,
    comments: 12,
  },
  {
    id: 2,
    title: "주말 봉사활동 같이하실 분 계신가요?",
    author: "이봉사",
    date: "2024-03-14",
    views: 95,
    comments: 8,
  },
];

export default function FreeBoard() {
  return (
    <div className="min-h-screen bg-orange-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-amber-900">자유게시판</h1>
            <Link
              href="/board/free/write"
              className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800"
            >
              글쓰기
            </Link>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <ul className="divide-y divide-amber-200">
              {posts.map((post) => (
                <li key={post.id}>
                  <Link href={`/board/free/${post.id}`} className="block hover:bg-orange-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-amber-900">{post.title}</h3>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span className="mr-4">작성자: {post.author}</span>
                        <span className="mr-4">조회수: {post.views}</span>
                        <span>댓글: {post.comments}</span>
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