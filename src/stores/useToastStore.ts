import { ToastConfig } from "components/@base/Toast";
import { create } from "zustand";

type State = {
  config: ToastConfig | undefined;
};

type Actions = {
  setConfig: (by: ToastConfig) => void;
  clearConfig: () => void;
};

const initialState: State = {
  config: undefined,
};

const useToastStore = create<State & Actions>()((set) => ({
  ...initialState,
  setConfig: (by) => set((state) => ({ ...state, config: by })),
  clearConfig: () =>
    set((state) => ({ ...state, config: initialState.config })),
}));

export default useToastStore;
