import { Weapon, Item } from "./itemTypes";

export interface CharacterSheet {
  id: string;
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

export interface SpecialCondition {
  name: string;
  description: string;
  statEffects?: Partial<CharacterAttributes>;
}
