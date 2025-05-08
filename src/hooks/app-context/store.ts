import { createStore } from "zustand/vanilla";

export type AppStoreState = {
  profile: any;
  roles: string[];
};

type AppStoreAction = {
  defineProfile: (profile: any) => void;
};

export const appStore = createStore<AppStoreState & AppStoreAction>((set) => ({
  profile: {},
  roles: [],
  defineProfile: (profile) =>
    set({
      profile: { fullName: profile.fullName, email: profile.email },
      roles: profile.roles,
    }),
}));
