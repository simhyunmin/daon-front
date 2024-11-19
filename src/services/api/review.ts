const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4999/api';

interface Review {
  id: number;
  content: string;
}

export const reviewApi = {
  getReviews: async (): Promise<Review[]> => {
    const response = await fetch(`${BASE_URL}/reviews`);
    return response.json();
  },
  
  createReview: async (data: Partial<Review>): Promise<Review> => {
    const response = await fetch(`${BASE_URL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}; 