import ep1 from "../../../assets/episodes/season-2/ep1.png";
import ep2 from "../../../assets/episodes/season-2/ep2.png";
import type { Season } from "./types";

const season2: Season = [
  {
    id: "donella-og-sviskus",
    name: "Donella og Sviskus",
    season: 2,
    number: 1,
    published: "2026-03-27",
    length: "10:18",
    cover: ep1,
    description:
      "Svisken Sviskus og dorullen Donella er uvenner, men en dag finner de ut at de har noe helt spesielt til felles.",
    fromColor: "oklch(90.3% 0.076 319.62)",
    toColor: "oklch(92.2% 0.005 34.3)",
    accentColor: "oklch(51.8% 0.253 323.949)",
    spotifyUrl: "https://open.spotify.com/episode/3XKhPESS98yDp2BVVJdwDI?si=huvPtOtxTvqt0ULTKDSI8Q",
    appleUrl:
      "https://podcasts.apple.com/us/podcast/sviskus-og-donella-s2-episode-1/id1856799991?i=1000757619729",
  },
  {
    name: "Tomaten Tom",
    id: "tomated-tom",
    season: 2,
    number: 2,
    published: "2026-04-10",
    length: "09:50",
    cover: ep2,
    description:
      "Tomaten Tom er en skikkelig rød ildsint tomat, helt til bananen Benny legger en rampete plan.",
    fromColor: "oklch(89.9% 0.061 343.231)",
    toColor: "oklch(89.2% 0.058 10.001)",
    accentColor: "oklch(51.4% 0.222 16.935)",
    spotifyUrl: "",
    appleUrl: "",
  },
];

export default season2;
