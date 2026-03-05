import type { TeamInitials } from "./theme";

// --- Types ---

export type Division = "Boys A" | "Boys B" | "Girls";
export type DivisionGroup = "All" | "Boys" | "Girls";

export interface TeamEntry {
  id: string;
  name: string;
  initials: TeamInitials;
  division: Division;
  seed: number;
  champsCount: number;
  record: string;
}

export interface ChampionRow {
  initials: TeamInitials;
  name: string;
  division: Division;
  mvp?: string;
}

export interface ChampionYear {
  year: number;
  cancelled?: boolean;
  champions: ChampionRow[];
}

export interface DynastyEntry {
  initials: TeamInitials;
  name: string;
  titles: number;
}

export interface RecordEntry {
  division: Division;
  label: string;
  detail: string;
  value: string;
}

export interface HallOfFameEntry {
  initials: TeamInitials;
  name: string;
  team: string;
  years: string;
  stats: { label: string; value: string }[];
}

// --- Data ---

export const teams: TeamEntry[] = [
  { id: "ss-boys-a", name: "Saint Sophia", initials: "SS", division: "Boys A", seed: 1, champsCount: 4, record: "3-0" },
  { id: "ss-boys-b", name: "Saint Sophia", initials: "SS", division: "Boys B", seed: 1, champsCount: 3, record: "3-0" },
  { id: "ss-girls", name: "Saint Sophia", initials: "SS", division: "Girls", seed: 1, champsCount: 3, record: "3-0" },
  { id: "ht-boys-a", name: "Holy Trinity", initials: "HT", division: "Boys A", seed: 2, champsCount: 2, record: "2-1" },
  { id: "ht-boys-b", name: "Holy Trinity", initials: "HT", division: "Boys B", seed: 2, champsCount: 1, record: "2-1" },
  { id: "ht-girls", name: "Holy Trinity", initials: "HT", division: "Girls", seed: 2, champsCount: 2, record: "2-1" },
  { id: "a-boys-a", name: "Annapolis", initials: "A", division: "Boys A", seed: 3, champsCount: 2, record: "1-2" },
  { id: "a-boys-b", name: "Annapolis", initials: "A", division: "Boys B", seed: 3, champsCount: 1, record: "1-2" },
  { id: "a-girls", name: "Annapolis", initials: "A", division: "Girls", seed: 3, champsCount: 1, record: "1-2" },
  { id: "b-boys-a", name: "Brooklyn", initials: "B", division: "Boys A", seed: 4, champsCount: 1, record: "1-2" },
  { id: "b-boys-b", name: "Brooklyn", initials: "B", division: "Boys B", seed: 4, champsCount: 2, record: "1-2" },
  { id: "b-girls", name: "Brooklyn", initials: "B", division: "Girls", seed: 4, champsCount: 1, record: "1-2" },
  { id: "sg-boys-a", name: "Saint George", initials: "SG", division: "Boys A", seed: 5, champsCount: 1, record: "0-3" },
  { id: "sg-boys-b", name: "Saint George", initials: "SG", division: "Boys B", seed: 5, champsCount: 1, record: "0-3" },
  { id: "sg-girls", name: "Saint George", initials: "SG", division: "Girls", seed: 5, champsCount: 1, record: "0-3" },
  { id: "sk-boys-a", name: "Saint Katherine", initials: "SK", division: "Boys A", seed: 6, champsCount: 0, record: "0-3" },
  { id: "sk-boys-b", name: "Saint Katherine", initials: "SK", division: "Boys B", seed: 6, champsCount: 1, record: "0-3" },
  { id: "sk-girls", name: "Saint Katherine", initials: "SK", division: "Girls", seed: 6, champsCount: 1, record: "0-3" },
];

export const championsByYear: ChampionYear[] = [
  {
    year: 2024,
    champions: [
      { initials: "SS", name: "Saint Sophia", division: "Boys A", mvp: "Steve Rogers" },
      { initials: "HT", name: "Holy Trinity", division: "Boys B", mvp: "Bruce Wayne" },
      { initials: "SS", name: "Saint Sophia", division: "Girls", mvp: "Diana Prince" },
    ],
  },
  {
    year: 2023,
    champions: [
      { initials: "HT", name: "Holy Trinity", division: "Boys A", mvp: "Barry Allen" },
      { initials: "SS", name: "Saint Sophia", division: "Boys B", mvp: "Peter Parker" },
      { initials: "A", name: "Annapolis", division: "Girls", mvp: "Wanda Maximoff" },
    ],
  },
  {
    year: 2022,
    champions: [
      { initials: "SS", name: "Saint Sophia", division: "Boys A", mvp: "Peter Parker" },
      { initials: "B", name: "Brooklyn", division: "Boys B", mvp: "Clark Kent" },
      { initials: "SS", name: "Saint Sophia", division: "Girls", mvp: "Diana Prince" },
    ],
  },
  {
    year: 2021,
    champions: [
      { initials: "A", name: "Annapolis", division: "Boys A", mvp: "T'Challa" },
      { initials: "SS", name: "Saint Sophia", division: "Boys B", mvp: "Steve Rogers" },
      { initials: "HT", name: "Holy Trinity", division: "Girls", mvp: "Wanda Maximoff" },
    ],
  },
  { year: 2020, cancelled: true, champions: [] },
  {
    year: 2019,
    champions: [
      { initials: "B", name: "Brooklyn", division: "Boys A", mvp: "Clark Kent" },
      { initials: "HT", name: "Holy Trinity", division: "Boys B", mvp: "Barry Allen" },
      { initials: "SS", name: "Saint Sophia", division: "Girls", mvp: "Diana Prince" },
    ],
  },
  { year: 2018, champions: [{ initials: "SS", name: "Saint Sophia", division: "Boys A", mvp: "Peter Parker" }] },
  { year: 2017, champions: [{ initials: "A", name: "Annapolis", division: "Boys A", mvp: "T'Challa" }] },
  { year: 2016, champions: [{ initials: "B", name: "Brooklyn", division: "Boys A", mvp: "Clark Kent" }] },
  { year: 2015, champions: [{ initials: "HT", name: "Holy Trinity", division: "Boys A", mvp: "Barry Allen" }] },
  { year: 2014, champions: [{ initials: "SS", name: "Saint Sophia", division: "Boys A", mvp: "Steve Rogers" }] },
  { year: 2013, champions: [{ initials: "SG", name: "Saint George", division: "Boys A", mvp: "Wanda Maximoff" }] },
];

export const dynastyTracker: DynastyEntry[] = [
  { initials: "SS", name: "Saint Sophia", titles: 10 },
  { initials: "HT", name: "Holy Trinity", titles: 6 },
  { initials: "A", name: "Annapolis", titles: 5 },
  { initials: "B", name: "Brooklyn", titles: 5 },
  { initials: "SG", name: "Saint George", titles: 4 },
  { initials: "SK", name: "Saint Katherine", titles: 2 },
];

export const records: RecordEntry[] = [
  { division: "Boys A", label: "Most Points (Game)", detail: "Peter Parker · 2022 Finals", value: "42" },
  { division: "Boys B", label: "Highest Team Score", detail: "Holy Trinity · 2023 Semis", value: "98" },
  { division: "Girls", label: "Longest Win Streak", detail: "Saint Sophia · 2021-2024", value: "19" },
  { division: "Boys A", label: "Most Rebounds (Game)", detail: "T'Challa · 2021 Finals", value: "14" },
  { division: "Boys A", label: "Most Career Points", detail: "Peter Parker · 2014-now", value: "32" },
  { division: "Boys A", label: "Closest Final", detail: "Brooklyn vs Annapolis · 2016", value: "77-74" },
];

export const hallOfFame: HallOfFameEntry[] = [
  {
    initials: "SS",
    name: "Peter Parker",
    team: "Saint Sophia",
    years: "2014-now",
    stats: [
      { label: "Championships", value: "4" },
      { label: "MVPs", value: "3" },
    ],
  },
  {
    initials: "B",
    name: "Clark Kent",
    team: "Brooklyn",
    years: "2013-2023",
    stats: [
      { label: "Championships", value: "2" },
      { label: "MVPs", value: "3" },
    ],
  },
  {
    initials: "HT",
    name: "Barry Allen",
    team: "Holy Trinity",
    years: "2015-now",
    stats: [
      { label: "Championships", value: "3" },
      { label: "MVPs", value: "2" },
    ],
  },
];

export const throwbackMoment = {
  teamInitials: "B" as TeamInitials,
  text: "2019: Clark Kent's buzzer-beater forces OT. Brooklyn win 77-74.",
};

export function filterTeams(group: DivisionGroup): TeamEntry[] {
  if (group === "All") return teams;
  if (group === "Boys") return teams.filter((t) => t.division.startsWith("Boys"));
  return teams.filter((t) => t.division === "Girls");
}
