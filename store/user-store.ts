"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  selectedCity: string;
  setSelectedCity: (newCity: string) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      selectedCity: "",
      setSelectedCity: (newCity) => set({ selectedCity: newCity }),
    }),
    {
      name: "user-store",
    }
  )
);
