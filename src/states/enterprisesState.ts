import { create } from "zustand";

interface EnterprisesState {
  enterprisesList: any[];
  setEnterprisesList: (by: any[]) => void;
}

export const useEnterprisesStore = create<EnterprisesState>()((set) => ({
  enterprisesList: [],
  setEnterprisesList: (newValue) => set(() => ({ enterprisesList: newValue })),
}));
