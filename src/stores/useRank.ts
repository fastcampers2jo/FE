import { create } from "zustand";

type IRank = {
  agePopup: boolean;
  openAgePopup: () => void;
  closeAgePopup: () => void;

  timePopup: boolean;
  openTimePopup: () => void;
  closeTimePopup: () => void;

  bankPopup: boolean;
  openBankPopup: () => void;
  closeBankPopup: () => void;
};

export const useRank = create<IRank>((set) => ({
  agePopup: false,
  openAgePopup: () => set({ agePopup: true }),
  closeAgePopup: () => set({ agePopup: false }),

  timePopup: false,
  openTimePopup: () => set({ timePopup: true }),
  closeTimePopup: () => set({ timePopup: false }),

  bankPopup: false,
  openBankPopup: () => set({ bankPopup: true }),
  closeBankPopup: () => set({ bankPopup: false }),

}));
