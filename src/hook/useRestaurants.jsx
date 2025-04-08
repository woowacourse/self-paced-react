import { useState, useEffect } from 'react';
import { getRestaurants, createRestaurant } from '../api/restaurants';

export function useRestaurants() {
  const [state, setState] = useState({
    restaurants: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const data = await getRestaurants();
      setState({
        restaurants: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState((prev) => ({ ...prev, error: '음식점 목록을 불러오는데 실패했습니다.', isLoading: false }));
    }
  };

  const addRestaurant = async (newRestaurant) => {
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const created = await createRestaurant(newRestaurant);
      setState((prev) => ({ ...prev, restaurants: [...prev.restaurants, created], isLoading: false }));
      return created;
    } catch (error) {
      setState((prev) => ({ ...prev, error: '음식점 추가에 실패했습니다.', isLoading: false }));
      throw error;
    }
  };

  return {
    ...state,
    addRestaurant,
  };
}
