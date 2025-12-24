import { Event } from "../eventTypes";
import { CharacterIDs } from "../../Characters/characterTypes";

// Function to randomly choose present characters for an event
function choosePresentCharacters(numberPresent: number): CharacterIDs[] {
  const allCharacters: CharacterIDs[] = [
    "LEAD AGENT",
    "AGENT 2",
    "AGENT 3",
    "AGENT 4",
  ];

  // If selecting all characters, return all
  if (numberPresent >= 4) return allCharacters;
  // If a 0 is for provided for some reason, default to lead agent
  else if (numberPresent < 1) return ["LEAD AGENT"];

  const presentCharacters: CharacterIDs[] = [];

  for (let i = 0; i < numberPresent; i++) {
    // Pick a random index
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    presentCharacters.push(allCharacters[randomIndex]);
    // Remove from pool to avoid duplicates
    allCharacters.splice(randomIndex, 1);
  }

  return presentCharacters;
}

export const genericEventsLibrary: Event[] = [
  {
    title: "Coffee Break",
    presentCharacters: choosePresentCharacters(2),
    description:
      "${0} and ${1} stop for donuts and coffee to forget about the persisting horrors.",
    id: "coffee_please",
    options: [
      {
        title: "2 Coffees. Black. ",
        description:
          "The Agents sit in silence, sipping on their coffee and enjoying their rainbow sprinkled donuts.",
        testAttribute: "Luck",
        testModifier: 20,
        successOutcome: {
          description: "Nothing beats a hot cup of joe.",
          effectOnAttributes: {
            SAN: 5,
          },
        },
        failureOutcome: {
          description: "Groversville coffee always has tasted a bit strange...",
          effectOnAttributes: {
            SAN: 2,
          },
        },
      },
    ],
  },
];
