import type { CollectionEntry } from "astro:content";

type EpisodeEntry = CollectionEntry<"episodes">;

export function GetEpisodeDataBySlug(
  episodes: EpisodeEntry[],
  slug: string,
): EpisodeEntry & { meta: { season: number; episode: string } } {
  const ep = episodes.find((e) => e.id === slug);
  if (!ep) {
    throw new Error(`Could not find episode with slug "${slug}"`);
  }

  const [seasonSlug, episodeSlug] = slug.split("/");
  const season = Number(seasonSlug.split("_")[1]);
  if (!season) {
    throw new Error(
      `Could not determine season for episode with slug "${slug}"`,
    );
  }
  return { ...ep, meta: { season, episode: episodeSlug } };
}
