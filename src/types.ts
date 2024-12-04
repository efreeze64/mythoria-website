export type Concert = {
  date: Date | null;
  location: string;
  bands: Array<string>;
  tickets?: string;
  link?: string;
};
