export interface Episode {
  name: string;
  published: string;
  length: string;
  cover: ImageMetadata;
  description: string;
  shortDescription: string;
  fromColor: string;
  toColor: string;
  accentColor: string;
  season: number;
  id: string;
  number: number;
}

export type Season = Episode[];
