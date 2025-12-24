import { Weapon, Item } from "./itemTypes";
import { SpecialCondition } from "./specialConditions";

export type CharacterIDs = "LEAD AGENT" | "AGENT 2" | "AGENT 3" | "AGENT 4";

export interface CharacterSheet {
  id: CharacterIDs;
  name: string;
  job?: string;
  age?: number;
  attributes: CharacterAttributes;
  bonds: Bond[];
  weapons?: Weapon[];
  items?: Item[];
  specialConditions?: SpecialCondition[];
  specialTrainings?: SpecialTraining[];
}

export interface CharacterAttributes {
  // Strength
  STR: number;
  // Constitution
  CON: number;
  // Dexterity
  DEX: number;
  // Intelligence
  INT: number;
  // Power
  POW: number;
  // Charisma
  CHA: number;
  // Health
  HP: number;
  // Willpower
  WP: number;
  // Sanity
  SAN: number;
  // Breaking Point
  BP: number;
  Luck: 50;
}

interface Bond {
  name: string;
  score: number;
  relationship?: string;
}

interface SpecialTraining {
  name: string;
  description?: string;
}
