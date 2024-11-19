'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function WriteReview() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    volunteerTitle: '', // 실제로는 선택 가능한 봉사활동 목록에서 선택하도록 수정 필요
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log('후기 작성:', formData);
    router.push('/board/review');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-amber-900 mb-8">봉사활동 후기 작성</h1>

          <div className="bg-white shadow sm:rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="volunteerTitle" className="block text-sm font-medium text-amber-900">
                  봉사활동 선택
                </label>
                <select
                  id="volunteerTitle"
                  name="volunteerTitle"
                  required
                  className="mt-1 block w-full rounded-md border border-amber-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                  value={formData.volunteerTitle}
                  onChange={handleChange}
                >
                  <option value="">봉사활동을 선택해주세요</option>
                  <option value="지역 공원 청소 봉사">지역 공원 청소 봉사</option>
                  <option value="노인복지관 급식 봉사">노인복지관 급식 봉사</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-amber-900">
                  제목
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="mt-1 block w-full rounded-md border border-amber-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-amber-900">
                  내용
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={10}
                  required
                  className="mt-1 block w-full rounded-md border border-amber-300 px-3 py-2 focus:border-amber-500 focus:outline-none focus:ring-amber-500"
                  value={formData.content}
                  onChange={handleChange}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-amber-300 rounded-md text-amber-700 hover:bg-amber-50"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-800"
                >
                  작성완료
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 