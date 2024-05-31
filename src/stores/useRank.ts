import { create } from "zustand";

type IRank = {
  isPop: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

export const useRank = create<IRank>((set) => ({
  isPop: false,
  openPopup: () => set({ isPop: true }),
  closePopup: () => set({ isPop: false }),
}));
