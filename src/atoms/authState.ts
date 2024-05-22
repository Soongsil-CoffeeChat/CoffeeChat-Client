import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    isLoggedIn: false,
    username: null,
    token: null,
  },
});
