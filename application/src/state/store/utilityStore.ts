import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type UtilityStoreState = {
  isScrolled: boolean; // 스크롤 여부
  isMobile: boolean;
}

type SetUtilityStore = {
  setIsScrolled: (payload: boolean) => void;
  setIsMobile: (payload: boolean) => void;
}

const initialState: UtilityStoreState = {
  isScrolled: false,
  isMobile: false
};

const useUtilityStore = create(devtools(
  combine<UtilityStoreState, SetUtilityStore>(initialState, (set) => ({
    setIsScrolled: (payload: boolean) => set(() => ({isScrolled: payload})),
    setIsMobile: (payload: boolean) => set(() => ({isMobile: payload}))
  }))
))

export default useUtilityStore;