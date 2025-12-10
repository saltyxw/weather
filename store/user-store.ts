import { create } from "zustand";

type UserStore = {
  selectedCity: string;
  setSelectedCity: (newCity: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  selectedCity: "",
  setSelectedCity: (newCity: string) => set({ selectedCity: newCity }),
}));
