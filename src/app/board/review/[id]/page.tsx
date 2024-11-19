'use client';
import { useRouter } from 'next/navigation';

// 임시 데이터
const reviewDetail = {
  id: 1,
  title: "처음으로 참여한 공원 청소 봉사 후기",
  author: "김다온",
  date: "2024-03-15",
  views: 42,
  volunteerTitle: "지역 공원 청소 봉사",
  content: `안녕하세요! 처음으로 봉사활동에 참여하게 되어 후기를 남깁니다.
  
처음에는 걱정도 많았지만, 다른 봉사자분들과 함께하면서 즐겁게 활동할 수 있었습니다.
특히 공원이 깨끗해지는 모습을 보면서 큰 보람을 느꼈습니다.

다음에도 꼭 참여하고 싶네요! 함께해주신 모든 분들께 감사드립니다.`,
};

export default function ReviewDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-orange-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-amber-900">{reviewDetail.title}</h1>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>작성자: {reviewDetail.author}</span>
                  <span>봉사활동: {reviewDetail.volunteerTitle}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>작성일: {reviewDetail.date}</span>
                  <span>조회수: {reviewDetail.views}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-amber-200 px-4 py-5 sm:px-6">
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans">{reviewDetail.content}</pre>
              </div>
            </div>

            <div className="border-t border-amber-200 px-4 py-4 sm:px-6">
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-amber-300 rounded-md text-amber-700 hover:bg-amber-50"
                >
                  목록으로
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 