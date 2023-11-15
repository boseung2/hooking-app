import { User } from "@/generated/graphql";
import { atom } from "recoil";

export const userState = atom<User | null | undefined>({
  key: "userState",
  default: null,
});
