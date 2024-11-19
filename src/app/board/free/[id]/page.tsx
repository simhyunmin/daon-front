'use client';

// 임시 데이터
const postDetail = {
  id: 1,
  title: "봉사활동 처음 시작하시는 분들께 추천드립니다",
  author: "김다온",
  date: "2024-03-15",
  views: 128,
  content: `안녕하세요! 봉사활동을 처음 시작하시는 분들을 위해 몇 가지 팁을 공유하고자 합니다.

1. 시작은 가벼운 활동부터
처음부터 너무 큰 활동은 부담될 수 있습니다. 공원 청소나 도서관 봉사 등 비교적 쉬운 활동부터 시작해보세요.

2. 정기적인 활동 찾기
한 번의 활동보다는 정기적으로 할 수 있는 봉사를 찾아보세요. 지속적인 활동이 더 큰 보람을 줍니다.

3. 관심 분야 선택하기
본인이 관심 있는 분야의 봉사활동을 찾으면 더 즐겁게 참여할 수 있습니다.

함께 좋은 경험 만들어가요!`,
  comments: [
    {
      id: 1,
      author: "이봉사",
      content: "좋은 정보 감사합니다!",
      date: "2024-03-15",
    },
    {
      id: 2,
      author: "박나눔",
      content: "저도 처에는 막막했는데 이런 글이 있었더라면 좋았을 것 같아요.",
      date: "2024-03-15",
    },
  ],
};

export default function FreePostDetail() {
  return (
    <div className="min-h-screen bg-orange-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-2xl font-bold text-amber-900">{postDetail.title}</h1>
              <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>작성자: {postDetail.author}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>작성일: {postDetail.date}</span>
                  <span>조회수: {postDetail.views}</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-amber-200 px-4 py-5 sm:px-6">
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans">{postDetail.content}</pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 