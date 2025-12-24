export interface CharacterSheet {
  name: string;
  job?: string;
  age?: number;
  attributes: CharacterAttributes;
  bonds: Bond[];
  weapons: Weapon[];
  specialConditions: SpecialCondition[];
  specialTrainings: SpecialTraining[];
}

interface CharacterAttributes {
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

interface Weapon {
  name: string;
  damage: string;
  range: string;
  ammo?: number;
  description?: string;
}

interface SpecialTraining {
  name: string;
}

interface SpecialCondition {
  name: string;
  description: string;
  statEffects?: Partial<CharacterAttributes>;
}
