import { atom } from "jotai";

import { ResultOnly } from "@/@types/api/resultsType";

export const searchInfoAtom = atom<ResultOnly | null>(null);
