import { atom } from "jotai";

import SearchParamType from "@/@types/api/searchParamType";

export const searchParamAtom = atom<SearchParamType | undefined>(undefined);
