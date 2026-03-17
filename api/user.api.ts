import { APIRequestContext } from '@playwright/test';

export async function getUserProfile(request: APIRequestContext) {
  const res = await request.get('/user/profile');
  return res.json();
}