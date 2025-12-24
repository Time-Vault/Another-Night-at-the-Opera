import {
  CharacterAttributes,
  SpecialCondition,
} from "../Characters/characterTypes";

import { Weapon, Item } from "../Characters/itemTypes";

// Generic building block of events to be shown to players
export interface eventType {
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
  successOutcome?: EventOutcome;
  failureOutcome?: EventOutcome;
  prereqItems?: string[];
  consumedItemsOnUse?: string[];
  prereqWeapons?: string[];
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
