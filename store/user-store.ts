import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  selectedCity: string;
  searchHistory: string[];
  setSelectedCity: (newCity: string) => void;
  addToHistory: (city: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      selectedCity: "",
      searchHistory: [],

      setSelectedCity: (newCity: string) => set({ selectedCity: newCity }),

      addToHistory: (city: string) =>
        set((state) => {
          const newArr = [
            city,
            ...state.searchHistory.filter((c) => c !== city),
          ];

          return { searchHistory: newArr.slice(0, 4) };
        }),
    }),
    {
      name: "user-store",
    }
  )
);
