import { useAppContext } from "../contexts/AppContext";
import Quiz from "../components/quiz/Quiz";
import QuizOptions from "../components/quiz/QuizOptions";
import Score from "../components/quiz/Score";

const QuizPage = () => {
  const { questions, isQuizStart } = useAppContext();

  return (
    <>
      {questions && isQuizStart ? (
        <Quiz />
      ) : questions && !isQuizStart ? (
        <Score />
      ) : (
        <QuizOptions />
      )}
    </>
  );
};

export default QuizPage;
