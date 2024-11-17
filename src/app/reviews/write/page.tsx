'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WriteReviewPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    location: '',
  });
  
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImages(prev => [...prev, ...newImages]);

      // 이미지 미리보기 생성
      newImages.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: API 연동 로직 구현
    console.log('제출된 데이터:', { ...formData, images });
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* 네비게이션 바 */}
      <nav className="bg-warm-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-amber-700">다온</Link>
            <Link href="/reviews" className="text-amber-900 hover:text-amber-700">봉사후기</Link>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-amber-900 mb-8">봉사 후기 작성</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 제목 입력 */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-amber-900 mb-2">
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* 봉사 장소 입력 */}
          <div>
            <label htmlFor="location" className="block text-lg font-medium text-amber-900 mb-2">
              봉사 장소
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* 내용 입력 */}
          <div>
            <label htmlFor="content" className="block text-lg font-medium text-amber-900 mb-2">
              내용
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={10}
              className="w-full px-4 py-2 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {/* 이미지 업로드 */}
          <div>
            <label className="block text-lg font-medium text-amber-900 mb-2">
              사진 첨부
            </label>
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-md hover:bg-amber-200"
              >
                사진 선택하기
              </label>
            </div>

            {/* 이미지 미리보기 */}
            {previews.length > 0 && (
              <div className="mt-4 grid grid-cols-3 gap-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative">
                    <Image
                      src={preview}
                      alt={`미리보기 ${index + 1}`}
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 버튼 그룹 */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              href="/reviews"
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            >
              취소
            </Link>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-700 text-white rounded-md hover:bg-orange-800"
            >
              작성완료
            </button>
          </div>
        </form>
      </main>
    </div>
  );
} 