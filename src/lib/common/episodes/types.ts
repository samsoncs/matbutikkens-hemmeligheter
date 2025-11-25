export interface Episode {
  name: string;
  published: string;
  length: string;
  cover: ImageMetadata;
  description: string;
  fromColor: string;
  toColor: string;
  accentColor: string;
  season: number;
  id: string;
  number: number;
  spotifyUrl?: string;
  appleUrl?: string;
}

export type Season = Episode[];
