import { create } from 'zustand';

interface ApplyModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useApplyModal = create<ApplyModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

