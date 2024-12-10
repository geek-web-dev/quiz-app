export type UserType = {
  name: string;
  email: string;
};

export type DifficultyType = "easy" | "medium" | "hard";

export type BasicQuestionType = {
  category: string;
  correct_answer: string;
  difficulty: DifficultyType | "";
  type: string;
  question: string;
};

export type QuestionRespnoseType = BasicQuestionType & {
  incorrect_answers: string[];
};

export type QuestionType = BasicQuestionType & {
  answers: string[];
};

export type OptionsType = {
  amount: string;
  difficulty: DifficultyType | "";
  type: string;
  category: string;
};

export type CorrectAnswer = {
  difficultyId: number;
  categoryId: number;
};

export type ColorType = "red" | "blue" | "green" | "yellow" | "orange";

export type QuizResultType =
  | "perfect"
  | "very good"
  | "good"
  | "weak"
  | "very weak"
  | "nothing";
