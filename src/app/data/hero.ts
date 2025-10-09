import { HeroInformation, HeroSocial } from "../types/hero";

export const hero: HeroInformation = {
  name: "Thanh Hieu",
  description: "Fullstack Web Developer.",
  subDescription: "React, Next.js & NestJS — where code meets creativity.",
  role: "Web Developer",
};

export const socials: HeroSocial[] = [
  {
    label: "GitHub",
    icon: "/imgs/icons/github-white-icon.svg",
    url: "https://github.com/hieulethanh243",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hi%E1%BA%BFu-l%C3%AA-thanh-238a84189/",
    icon: "/imgs/icons/linkedin.svg",
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@th.code.website",
    icon: "/imgs/icons/tiktok.svg",
  },
  {
    label: "Facebook",
    url: "",
    icon: "/imgs/icons/facebook.svg",
  },
];
