import { create } from "zustand";

type ISearch = {
  search: string;
  setSearch: (search: string) => void;
  searchHistory: string[];
  setSearchHistory: (searchHistory: string[]) => void;
};

export const useSearch = create<ISearch>((set) => ({
  search: "",
  setSearch: (search) => set({ search: search }),
  searchHistory: [],
  setSearchHistory: (searchHistory) => set({ searchHistory: searchHistory }),
}));
