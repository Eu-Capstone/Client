import { atom } from "recoil";

export const typeState = atom<string>({
  key: "typeState",
  default: "",
});
