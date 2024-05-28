import { atom } from "recoil";

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  token: string | null;
}

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isLoggedIn: false,
    username: null,
    token: null,
  },
});
