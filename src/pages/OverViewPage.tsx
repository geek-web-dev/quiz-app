import {
  faCheckCircle,
  faFile,
  faTrash,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import CardInfo from "../components/common/CardInfo";
import Title from "../components/common/Title";
import { useAppContext } from "../contexts/AppContext";
import LinearProgress1 from "../components/common/LinearProgress1";
import { getPercent } from "../lib/utils";
import { CATEGORY_OPTIONS } from "../constants";
import Button from "../components/form/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OverViewPage = () => {
  const {
    completedQuizes,
    correctAnswers,
    wrongAnswersCount,
    setIsPopupOpen,
  } = useAppContext();

  const correctAnswersLen = correctAnswers.length;

  const clear = () => {
    setIsPopupOpen(true);
  };

  const countOfQuizGenre = (
    genre: "categoryId" | "difficultyId",
    genreV: number
  ) => {
    let count = 0;
    for (let i = 0; i < correctAnswersLen; i++) {
      if (correctAnswers[i][genre] === genreV) count++;
    }
    return count;
  };

  return (
    <div>
      <Title title="overview" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mb-4">
        <CardInfo
          title="Completed quizes"
          count={completedQuizes}
          Icon={faFile}
        />
        <CardInfo
          title="All wrong answers"
          count={wrongAnswersCount}
          Icon={faXmarkCircle}
        />
        <CardInfo
          title="All correct answers"
          count={correctAnswers.length}
          Icon={faCheckCircle}
        />
      </div>

      <hr className="my-8 border-white/15" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <CardInfo
          title="Easy questions solved"
          count={countOfQuizGenre("difficultyId", 0)}
          Icon={"easy"}
        />
        <CardInfo
          title="Medium questions solved"
          count={countOfQuizGenre("difficultyId", 1)}
          Icon={"medium"}
        />
        <CardInfo
          title="Hard questions solved"
          count={countOfQuizGenre("difficultyId", 2)}
          Icon={"hard"}
        />
      </div>

      <hr className="my-8 border-white/15" />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {CATEGORY_OPTIONS.map((item, i) => {
          const questionsCnt = countOfQuizGenre("categoryId", item.id);
          return (
            <CardInfo key={i}>
              <LinearProgress1
                title={item.category}
                value={getPercent(questionsCnt, correctAnswersLen)}
              />
              <p className="mt-4">
                <b>{questionsCnt}</b> questions solved
              </p>
            </CardInfo>
          );
        })}
      </div>

      <hr className="my-8 border-white/15" />

      <Button onClick={clear} variant="red" className="space-x-2">
        <span>Clear</span>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};

export default OverViewPage;
