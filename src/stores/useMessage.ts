import { create } from "zustand";

type IMessage = {
  message: string;
  setMessage: (message: string) => void;
  clearMessage: () => void;
};

export const useMessage = create<IMessage>((set) => ({
  message: "",
  setMessage: (message) => set({ message: message }),
  clearMessage: () => set({ message: "" }),
}));
