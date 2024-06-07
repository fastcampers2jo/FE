import { create } from "zustand";

type IPopup = {
  searchPopup:boolean;
  openSearchPopup:()=>void;
  closeSearchPopup:()=>void;
};

export const usePopup = create<IPopup>((set) => ({
  searchPopup: false,
  openSearchPopup: () => set({ searchPopup: true }),
  closeSearchPopup: () => set({ searchPopup: false }),
}));
