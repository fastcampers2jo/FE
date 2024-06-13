import { create } from "zustand";

type IPopup = {
  searchPopup: boolean;
  openSearchPopup: () => void;
  closeSearchPopup: () => void;
  loginPopup: boolean;
  openLoginPopup: () => void;
  closeLoginPopup: () => void;
};

export const usePopup = create<IPopup>((set) => ({
  searchPopup: false,
  openSearchPopup: () => set({ searchPopup: true }),
  closeSearchPopup: () => set({ searchPopup: false }),
  loginPopup: false,
  openLoginPopup: () => set({ loginPopup: true }),
  closeLoginPopup: () => set({ loginPopup: false }),
}));
