import { create } from 'zustand';

type SwitchOrgPendingState = {
  isPending: boolean;
  setIsPending: (value: boolean) => void;
};

export const switchOrgPendingState = create<SwitchOrgPendingState>()((set) => ({
  isPending: false,
  setIsPending: (value) => set({ isPending: value })
}));
