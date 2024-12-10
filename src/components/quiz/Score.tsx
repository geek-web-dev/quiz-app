import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import Button from "../form/Button";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { getPercent, rating } from "../../lib/utils";
import CircularProgress from "../common/CircularProgress";
import { SCORE_COLOR } from "../../constants";
import { ColorType } from "../../shared";
import Title from "../common/Title";

const Score = () => {
  const { currCorrectAnswersCount, questions } = useAppContext();
  const navigate = useNavigate();
  const scoreResult = rating(
    currCorrectAnswersCount,
    questions?.length as number
  );
  return (
    <div>
      <Title title="my score" />
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold capitalize ">{scoreResult}</h1>

        <p>
          you have <b>{currCorrectAnswersCount}</b> correct answers of{" "}
          <b>{questions?.length}</b> from previous quiz
        </p>

        <CircularProgress
          value={getPercent(
            currCorrectAnswersCount,
            questions?.length as number
          )}
          color={SCORE_COLOR[scoreResult] as ColorType}
        />

        <Button variant="water" onClick={() => navigate(0)}>
          <I icon={faRotateRight} />
        </Button>
      </div>
    </div>
  );
};

export default Score;
