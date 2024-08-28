import { DefaultValue, atom } from "recoil";

export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  token: string | null;
}

// LocalStorage와 연동된 atomEffect 생성
const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
  const savedValue = localStorage.getItem(key);
  
  if (savedValue != null) {
    setSelf(savedValue);
  }

  onSet((newValue: any) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, newValue);
    }
  });
};

export const authState = atom<AuthState>({
  key: "authState",
  default: {
    isLoggedIn: false,
    username: null,
    token: null,
  },
});

export const phoneNumberState = atom<string>({
  key: 'phoneNumberState',
  default: '',
});

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const userTypeState = atom({
  key: 'userType',
  default: '',
});

export const partState = atom({
  key: 'partState',
  default: '',
});

export const clubState = atom({
  key: 'clubState',
  default: '',
});

// partSearchState
export const partSearchState = atom<string>({
  key: 'partSearchState',
  default: '',
  effects: [localStorageEffect('partSearchState')],
});

// clubSearchState
export const clubSearchState = atom<string>({
  key: 'clubSearchState',
  default: '',
  effects: [localStorageEffect('clubSearchState')],
});
