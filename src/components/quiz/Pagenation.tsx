import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../../contexts/AppContext";
import Button from "../form/Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSettnigsContext } from "../../contexts/SettingsContext";

const Pagenation = () => {
  const {
    questionIdx,
    setQuestionIdx,
    setQuestion,
    questions,
    isAnswer,
    setIsAnswer,
    setCompletedQuizes,
    setIsQuizStart,
  } = useAppContext();

  const { setTime } = useSettnigsContext();

  if (!questions) return <></>;

  const finish = () => {
    setIsQuizStart(false);
    setTime(0);
  };

  const next = () => {
    if (questionIdx < questions.length - 1) {
      setQuestionIdx(questionIdx + 1);
      setQuestion(questions[questionIdx]);
      setIsAnswer(false);
    } else {
      finish();
      setCompletedQuizes((p) => p + 1);
    }
  };

  return (
    <div className="flex justify-between">
      <Button onClick={next} variant="water" disabled={!isAnswer}>
        {questionIdx < questions.length - 1 ? (
          <I icon={faArrowRight} />
        ) : (
          "Finish"
        )}
      </Button>
      {questionIdx < questions.length - 1 ? (
        <Button variant="red" onClick={finish}>
          Exist
        </Button>
      ) : null}
    </div>
  );
};

export default Pagenation;
