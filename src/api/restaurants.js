const BASE_URL = 'http://localhost:3001';

export async function getRestaurants() {
  const response = await fetch(`${BASE_URL}/restaurants`);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurants');
  }
  return response.json();
}

export async function createRestaurant(restaurant) {
  const response = await fetch(`${BASE_URL}/restaurants`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(restaurant),
  });
  if (!response.ok) {
    throw new Error('Failed to create restaurant');
  }
  return response.json();
}
