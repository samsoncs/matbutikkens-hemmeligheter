import { differenceInCalendarDays, format, isAfter } from "date-fns";
import type { Episode, Season } from "./types";
import season1 from "./season1";

const allEpisodes = [...season1].sort(
  (a, b) => a.season - b.season || a.number - b.number,
);

export function getSeasonEpisodes(season: number): Season {
  return allEpisodes.filter((ep) => ep.season === season);
}

export function getSeasonEpisode(season: number, episodeId: string): Episode {
  const episodes = allEpisodes.filter((ep) => ep.season === season);
  const episode = episodes?.find((ep) => ep.id === episodeId);

  if (!episode) {
    throw new Error(
      `Episode with ID "${episodeId}" not found in season "${season}".`,
    );
  }

  return episode;
}

export function getAllEpisodes(): Episode[] {
  return allEpisodes;
}

export function getAllSeasons(): number[] {
  return Array.from(new Set(allEpisodes.map((ep) => ep.season))).sort(
    (a, b) => a - b,
  );
}

export function isEpisodePublished(episode: Episode): boolean {
  return !isAfter(new Date(episode.published), new Date());
}

function parseLocalDate(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00`);
}

export function getUpcomingLabel(episode: Episode): string | undefined {
  const pub = parseLocalDate(episode.published);
  const today = new Date();
  const diffDays = differenceInCalendarDays(pub, today);
  const isUpcoming = !isEpisodePublished(episode);

  let upcomingLabel: string | undefined = undefined;
  if (isUpcoming) {
    if (diffDays > 30) {
      upcomingLabel = `Kommer: ${format(pub, "dd.MM.yyyy")}`;
    } else if (diffDays > 0) {
      upcomingLabel = `Kommer om ${diffDays} ${diffDays === 1 ? "dag" : "dager"}`;
    }
  }
  return upcomingLabel;
}

export function getAccentColor(episode: Episode): string {
  const isUpcoming = !isEpisodePublished(episode);
  const accentColor = isUpcoming
    ? "oklch(37.3% 0.034 259.733)"
    : episode.accentColor;
  return accentColor;
}

export function oklchWithAlpha(color: string, alpha = 0.55) {
  if (!color) return color;
  if (!color.startsWith("oklch(")) return color;
  if (/\/\s*\d*\.?\d+\s*\)/.test(color)) return color;
  return color.replace(/oklch\(([^)]+)\)/, (_, inner) => {
    const trimmed = inner.trim();
    return `oklch(${trimmed} / ${alpha})`;
  });
}
