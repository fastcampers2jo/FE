import { create } from "zustand";

type ITabs = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const useTab = create<ITabs>((set) => ({
  activeTab: "",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
