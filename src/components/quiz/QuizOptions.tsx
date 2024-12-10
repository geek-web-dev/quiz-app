import { FormEvent, useEffect, useRef, useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import { getQuestions } from "../../services/questions";
import Select from "../form/Select";
import {
  AMOUNT_OPTIONS,
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  QUESTION_TIME,
  TYPE_OPTIONS,
} from "../../constants";
import Options from "../form/Options";
import Spinner from "../common/Spinner";
import Button from "../form/Button";
import { DifficultyType } from "../../shared";
import Title from "../common/Title";
import { useSettnigsContext } from "../../contexts/SettingsContext";

const QuizOptions = () => {
  const { setQuestions, setQuestion, isQuizStart, setIsQuizStart } =
    useAppContext();

  const { setTime, isShowTime } = useSettnigsContext();

  const amountRef = useRef<HTMLSelectElement>(null);
  const difficultyRef = useRef<HTMLSelectElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const [loading, setLoading] = useState(false);

  const getQuestionsHandler = async () => {
    const { amount, difficulty, type, category } = {
      amount: amountRef.current?.value as string,
      difficulty: difficultyRef.current?.value as string,
      type: typeRef.current?.value as string,
      category: categoryRef.current?.value as string,
    };

    try {
      setLoading(true);

      const quizData = await getQuestions({
        amount,
        difficulty: difficulty as DifficultyType,
        type,
        category,
      });

      setQuestions(quizData);

      setQuestion(quizData[0]);

      if (isShowTime) setTime(quizData.length * QUESTION_TIME);
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const startQuizHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsQuizStart(true);
  };

  useEffect(() => {
    if (isQuizStart) {
      getQuestionsHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isQuizStart]);

  return (
    <div>
      <Title title="options" />
      <form onSubmit={startQuizHandler}>
        <div className="grid md:grid-cols-2 gap-4">
          <Select label="amount" ref={amountRef} defaultValue={10}>
            <Options options={AMOUNT_OPTIONS} optionAny={false} />
          </Select>

          <Select label="difficulty" ref={difficultyRef}>
            <Options options={DIFFICULTY_OPTIONS} />
          </Select>

          <Select label="type" ref={typeRef}>
            <Options options={TYPE_OPTIONS} />
          </Select>

          <Select label="category" ref={categoryRef}>
            <option value={""}>Any</option>
            {CATEGORY_OPTIONS.map((item, i) => (
              <option key={i} value={item.id} className="hover:!bg-gray-300">
                {item.category}
              </option>
            ))}
          </Select>
        </div>
        <Button type="submit" className="w-28 mt-16">
          {loading ? <Spinner /> : "Start Quiz"}
        </Button>
      </form>
    </div>
  );
};

export default QuizOptions;
