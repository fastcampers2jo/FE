import { create } from "zustand";

type IRank = {
  agePopup: boolean;
  openAgePopup: () => void;
  closeCurrentAgePopup: (selected: string) => void;
  closeAgePopup: (beforeAge: string) => void;
  beforeAge: string;
  afterAge: string;
  setBeforeAge: (beforeAge: string) => void;
  setAfterAge: (afterAge: string) => void;

  timePopup: boolean;
  openTimePopup: () => void;
  closeTimePopup: (beforeTime: string) => void;
  afterTime: string;
  beforeTime: string;
  setAfterTime: (afterTime: string) => void;
  setBeforeTime: (beforeTime: string) => void;
  closeCurrentTimePopup: (selected: string) => void;
};

export const useRank = create<IRank>((set) => ({
  agePopup: false,
  openAgePopup: () => set({ agePopup: true }),
  closeAgePopup: (beforeAge) => set({ agePopup: false, afterAge: beforeAge }),
  closeCurrentAgePopup: (selectedAge) =>
    set({ agePopup: false, afterAge: selectedAge }),
  beforeAge: "전체",
  afterAge: "전체",
  setBeforeAge: (beforeAge) => set({ beforeAge }),
  setAfterAge: (afterAge) => set({ afterAge }),

  timePopup: false,
  openTimePopup: () => set({ timePopup: true }),
  closeTimePopup: (beforeTime) =>
    set({ timePopup: false, afterTime: beforeTime }),
  closeCurrentTimePopup: (selectedTime) =>
    set({ timePopup: false, afterTime: selectedTime }),
  afterTime: "실시간",
  setAfterTime: (afterTime) => set({ afterTime }),
  beforeTime: "실시간",
  setBeforeTime: (beforeTime) => set({ beforeTime }),
}));
