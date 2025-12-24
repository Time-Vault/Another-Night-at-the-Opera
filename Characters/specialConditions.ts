import { CharacterAttributes } from "./characterTypes";

export interface SpecialCondition {
  name: string;
  description: string;
  statEffects?: Partial<CharacterAttributes>;
}

export const specialConditionsLibrary: SpecialCondition[] = [
  {
    name: "MISSING_CONDITION",
    description: "SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.",
  },
  {
    name: "Caffeinated",
    description: "This character loves sucking down joe.",
    statEffects: {
      SAN: 5,
    },
  },
  {
    name: "Groversville Special",
    description: "My muscles are twitching with a mind of their own.",
    statEffects: {
      SAN: -10,
      STR: 15,
    },
  },
];
