import { create } from "zustand";
import { EnterpriseDefault } from "../generated/graphql";

interface EnterprisesState {
  enterprisesList: EnterpriseDefault[];
  setEnterprisesList: (newValue: EnterpriseDefault[]) => void;

  totalEnterprises: number;
  setTotalEnterprises: (newValue: number) => void;
}

export const useEnterprisesStore = create<EnterprisesState>()((set) => ({
  enterprisesList: [],
  setEnterprisesList: (newValue) => set(() => ({ enterprisesList: newValue })),
  totalEnterprises: 0,
  setTotalEnterprises: (newValue) =>
    set(() => ({ totalEnterprises: newValue })),
}));
