import { useEffect, useState } from "react";
import {
  ANSWERS_LETTER,
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
} from "../../constants";
import { cn, playAudio } from "../../lib/utils";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../contexts/AppContext";
import { useSettnigsContext } from "../../contexts/SettingsContext";

const Answer = ({ answer, idx }: { answer: string; idx: number }) => {
  const {
    question,
    questionIdx,
    setCorrectAnswers,
    isAnswer,
    setIsAnswer,
    setcurrCorrectAnswersCount,
    setWrongAnswersCount,
  } = useAppContext();

  const { isShowAnswer, isSound } = useSettnigsContext();

  const [show, setShow] = useState(false);

  const isCorrect = question?.correct_answer === answer;

  const variant = isCorrect ? "bg-green-400" : "bg-red-400";
  const Icon = isCorrect ? faCheckCircle : faXmarkCircle;

  useEffect(() => {
    setShow(false);
  }, [questionIdx]);

  if (!question) return <></>;

  const { difficulty, category } = question;

  const chooseHander = () => {
    setShow(true);
    setIsAnswer(true);
    if (isCorrect) {
      if (isSound) playAudio("/audios/true.mp3");
      setCorrectAnswers((prev) => [
        ...prev,
        {
          difficultyId: DIFFICULTY_OPTIONS.indexOf(difficulty),
          categoryId: CATEGORY_OPTIONS.find((e) => e.category === category)
            ?.id as number,
        },
      ]);
      setcurrCorrectAnswersCount((p) => p + 1);
    } else {
      if (isSound) playAudio("/audios/false.mp3");
      setWrongAnswersCount((p) => p + 1);
    }
  };

  return (
    <div
      className={cn(
        "bg-white/15 p-4 rounded-md cursor-pointer duration-150 flex justify-between items-center",
        isAnswer ? "pointer-events-none" : "",
        isShowAnswer && show
          ? variant
          : show
          ? "bg-white/50"
          : "hover:bg-white/20",

        isShowAnswer && isAnswer && isCorrect ? "bg-green-400" : ""
      )}
      onClick={chooseHander}
    >
      <span>
        {ANSWERS_LETTER[idx]} - {answer}
      </span>
      {isShowAnswer && show ? <I icon={Icon} color="white" /> : null}
      {isShowAnswer && isAnswer && isCorrect && !show ? (
        <I icon={faCheckCircle} color="white" />
      ) : null}
    </div>
  );
};

export default Answer;
