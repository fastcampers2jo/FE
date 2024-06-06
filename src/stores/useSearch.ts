import { create } from "zustand";

type ISearch = {
  search: string;
  setSearch: (search: string) => void;
  boardHistory: string[];
  searchHistorys: string[];
  setSearchHistorys: (searchHistorys: string[]) => void;
  setBoardHistory: (boardHistory: string[]) => void;
  searchFocus: boolean;
  setSearchFocus: () => void;
  setSearchOutFocus: () => void;
};

export const useSearch = create<ISearch>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  boardHistory: [],
  setBoardHistory: (boardHistory) => set({ boardHistory }),
  searchHistorys: [],
  setSearchHistorys: (searchHistorys) => set({ searchHistorys }),
  setSearchFocus: () => set({ searchFocus: true }),
  setSearchOutFocus: () => set({ searchFocus: false }),
  searchFocus: false,
}));
