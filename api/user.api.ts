import { APIRequestContext } from '@playwright/test';

export async function getUserProfile(request: APIRequestContext, token: string) {
  const response = await request.get('/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}