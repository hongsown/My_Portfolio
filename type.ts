export interface headerType {
  title: string;

  href: string;
}
export type languageType = {
  key: string;
  name: string;
  icon: string;
};
export interface projectType {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  language: languageType[];
  demo?: string;
}
