import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { QuizResultType } from "../shared";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shuffleAnswers = (array: string[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const decodeHtmlEntities = (input: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(input, "text/html");
  return doc.documentElement.textContent || "";
};

export const decodeHtmlEntitiesWithArray = (input: string[]) => {
  const parser = new DOMParser();
  for (let i = 0; i < input.length; i++) {
    const doc = parser.parseFromString(input[i], "text/html");
    input[i] = doc.documentElement.textContent || "";
  }
  return input;
};

export const getPercent = (part: number, total: number) => {
  return part ? +((part * 100) / total).toFixed(2) : 0;
};

export const rating = (
  correctAnswers: number,
  countOfQuestions: number
): QuizResultType => {
  const p = getPercent(correctAnswers, countOfQuestions);

  return p === 100
    ? "perfect"
    : p <= 90 && p >= 80
    ? "very good"
    : p <= 79 && p >= 60
    ? "good"
    : p <= 59 && p >= 20
    ? "weak"
    : p <= 19 && p >= 10
    ? "very weak"
    : "nothing";
};

export const playAudio = (path: string) => {
  const audio = new Audio(path);
  audio.play();
};
