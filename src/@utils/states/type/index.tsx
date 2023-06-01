import { atom } from "recoil";

export const typeState = atom({
  key: "typeState",
  default: {
    I: 0,
    E: 0,
    F: 0,
    T: 0,
    P: 0,
    J: 0,
  },
});
