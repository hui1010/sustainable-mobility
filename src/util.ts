import { fakeDb } from "./type";
import type { PersonInfo } from "./type";

export function createUser(user: PersonInfo) {
  fakeDb.push(user);
}

function userExist(name: string) {}
