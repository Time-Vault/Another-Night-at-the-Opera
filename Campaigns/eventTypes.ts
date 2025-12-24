import { CharacterAttributes } from "../Characters/characterTypes";

import { SpecialCondition } from "../Characters/specialConditions";

import { Weapon, Item } from "../Characters/itemTypes";

// Generic building block of events to be shown to players
export interface Event {
  id: string;
  title: string;
  description: string;
  presentCharacters: string[];
  options: EventOptions[];
}

// An option that will be used as part of an event's resolution
interface EventOptions {
  title: string;
  description: string;
  testAttribute?: keyof CharacterAttributes;
  testModifier?: number;
  defaultOutcome?: EventOutcome;
  successOutcome?: EventOutcome;
  failureOutcome?: EventOutcome;
  prereq?: [
    {
      compared: "TRAINING" | "CONDITION" | "ITEM" | "WEAPON";
      name: string;
    }
  ];
  consumedItemsOnUse?: string[];
  consumedWeaponsOnUse?: string[];
}

// The outcome of an event option
interface EventOutcome {
  description: string;
  effectOnAttributes?: Partial<CharacterAttributes>;
  conditionsGained?: SpecialCondition[];
  weaponsGained?: Weapon[];
  consumedWeapons?: string[];
  itemsGained?: Item[];
  consumedItems?: string[];
}
