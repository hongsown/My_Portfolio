import { Url } from "next/dist/shared/lib/router/router";

export interface headerType {
  title: string;

  href: string;
}
export type languageType = {
  key: string;
  name: string;
  icon: string;
};
export interface socialType {
  id: number;
  icon: string;
  href: string;
}
export interface projectType {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  language: languageType[];
  demo: string | Url;
}
