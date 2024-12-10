import axios from "axios";
import { OptionsType, QuestionRespnoseType, QuestionType } from "../shared";
import {
  decodeHtmlEntities,
  decodeHtmlEntitiesWithArray,
  shuffleAnswers,
} from "../lib/utils";

export const getQuestions = async (options: OptionsType) => {
  const { amount, difficulty, type, category } = options;

  const difficultyQ = difficulty !== "" ? `&difficulty=${difficulty}` : "";
  const typeQ = type !== "" ? `&type=${type}` : "";
  const categoryQ = category !== "" ? `&category=${category}` : "";

  const URL = `${
    import.meta.env.VITE_QUESTIONS_API
  }?amount=${amount}${difficultyQ}${typeQ}${categoryQ}`;

  const { data: data } = await axios.get(URL);
  const results: QuestionRespnoseType[] = data.results;

  const questions: QuestionType[] = results.map((q: QuestionRespnoseType) => ({
    category: decodeHtmlEntities(q.category),
    correct_answer: decodeHtmlEntities(q.correct_answer),
    difficulty: q.difficulty,
    type: q.type,
    question: decodeHtmlEntities(q.question),
    answers: shuffleAnswers([
      decodeHtmlEntities(q.correct_answer),
      ...decodeHtmlEntitiesWithArray(q.incorrect_answers),
    ]),
  }));

  return questions;
};
