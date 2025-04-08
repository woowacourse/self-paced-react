import { useState } from 'react';

export function useModal() {
  const [modalState, setModalState] = useState({
    isDetailOpen: false,
    isAddOpen: false,
    selectedRestaurant: null,
  });

  const openDetailModal = (restaurant) => {
    setModalState((prev) => ({
      ...prev,
      isDetailOpen: true,
      selectedRestaurant: restaurant,
    }));
  };

  const openAddModal = () => {
    setModalState((prev) => ({
      ...prev,
      isAddOpen: true,
    }));
  };

  const closeModals = () => {
    setModalState((prev) => ({ ...prev, isDetailOpen: false, isAddOpen: false, selectedRestaurant: null }));
  };

  return { modalState, openDetailModal, openAddModal, closeModals };
}
