import ep1 from "../../../assets/episodes/season-1/ep1.png";
import ep2 from "../../../assets/episodes/season-1/ep2.png";
import ep3 from "../../../assets/episodes/season-1/ep3.png";
import ep4 from "../../../assets/episodes/season-1/ep4.png";
import ep5 from "../../../assets/episodes/season-1/ep5.png";
import type { Season } from "./types";

const season1: Season = [
  {
    id: "brokkolien-brobert",
    name: "Brokkolien Brobert",
    season: 1,
    number: 1,
    published: "2025-09-18",
    length: "14:51",
    cover: ep1,
    description:
      "Brokkolien brobert er trist for ingen vil spise han. En dag dukker gutten Nils opp i matbutikken.",
    fromColor: "oklch(98.2% 0.018 155.826)",
    toColor: "oklch(95% 0.052 163.051)",
    accentColor: "oklch(50.8% 0.118 165.612)",
  },
  {
    name: "Purren Purnille",
    id: "purren-purnille",
    season: 1,
    number: 2,
    published: "2025-10-15",
    length: "11:51",
    cover: ep2,
    description:
      "Purnille sin store drøm er å bli en snømann-nese, men er ikke det bare for gulrøtter?",
    fromColor: "oklch(96.9% 0.016 293.756)",
    toColor: "oklch(96.9% 0.015 12.422)",
    accentColor: "oklch(44.6% 0.043 257.281)",
  },
  {
    name: "Bananen Bananders",
    id: "bananen-bananders",
    season: 1,
    number: 3,
    published: "2025-10-17",
    length: "11:49",
    cover: ep3,
    description:
      "Bananders er rampete, men en dag går det litt for langt når noen faller og slår seg.",
    fromColor: "oklch(98% 0.016 73.684)",
    toColor: "oklch(98.7% 0.026 102.212)",
    accentColor: "oklch(55.4% 0.135 66.442)",
  },
  {
    name: "Eggene",
    id: "eggene",
    season: 1,
    number: 4,
    published: "2025-12-19",
    length: "11:51",
    cover: ep4,
    description:
      "Eggene elsker å krangle, men når kokken kommer på besøk lærer de at de kanskje er best sammen.",
    fromColor: "oklch(96.9% 0.016 293.756)",
    toColor: "oklch(98.4% 0.019 200.873)",
    accentColor: "oklch(49.1% 0.27 292.581)",
  },
  {
    name: "Stjernekvelden",
    id: "stjernekvelden",
    season: 1,
    number: 5,
    published: "2027-12-19",
    length: "11:11",
    cover: ep5,
    description:
      "Brobert skal delta i talentkonkurranse, men blir nervøs når han hører Popcornelia sin vakre stemme.",
    fromColor: "oklch(87% 0.065 274.039)",
    toColor: "oklch(81.1% 0.111 293.571)",
    accentColor: "oklch(43.2% 0.232 292.759)",
  },
];

export default season1;
