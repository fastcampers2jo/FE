import { create } from "zustand";
import { persist } from "zustand/middleware";

const StorageKey = "recommend";

type IRecommend = {
  ageGroup: string;
  incomeGroup: string;
  ageGroups: string;
  incomeGroups: string;
  savingGoal: number;
  savingEnd: number;
  savingType: string;
  setAgeGroups: (ageGroups: string) => void;
  setIncomeGroups: (incomeGroups: string) => void;
  setAgeGroup: (ageGroup: string) => void;
  setIncomeGroup: (incomeGroup: string) => void;
  setSavingGoal: (savingGoal: number) => void;
  setSavingEnd: (savingEnd: number) => void;
  setSavingType: (savingType: string) => void;
};

export const useRecommend = create(
  persist<IRecommend>(
    (set) => ({
      ageGroup: "",
      incomeGroup: "",
      ageGroups: "",
      incomeGroups: "",
      savingGoal: 0,
      savingEnd: 0,
      savingType: "",
      setAgeGroups: (ageGroups) => set({ ageGroups }),
      setIncomeGroups: (incomeGroups) => set({ incomeGroups }),
      setAgeGroup: (ageGroup) => set({ ageGroup }),
      setIncomeGroup: (incomeGroup) => set({ incomeGroup }),
      setSavingGoal: (savingGoal) => set({ savingGoal }),
      setSavingEnd: (savingEnd) => set({ savingEnd }),
      setSavingType: (savingType) => set({ savingType }),
    }),
    {
      name: StorageKey,
    }
  )
);
