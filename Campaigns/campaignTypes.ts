import { Event } from "./eventTypes";

export interface CampaignStructure {
  id: string;
  title: string;
  description: string;
  numberOfActs: number;
  specialEventsPerAct: number[];
  genericEventsPerAct: number[];
  // Acts should be undefined to start so that they can be randomly chosen later
  acts?: CampaignAct[];
}

interface CampaignAct {
  events: Event[];
}
