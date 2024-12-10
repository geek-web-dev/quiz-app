import { useAppContext } from "../../contexts/AppContext";
import { useSettnigsContext } from "../../contexts/SettingsContext";
import Title from "../common/Title";
import Answer from "./Answer";
import Badge from "./Badge";
import Pagenation from "./Pagenation";

const Quiz = () => {
  const { questions, question, questionIdx } = useAppContext();
  const { isShowTime, time } = useSettnigsContext();

  if (!question) return <h1>questions not available now</h1>;

  const bg =
    question.difficulty === "easy"
      ? "bg-green-500"
      : question.difficulty === "medium"
      ? "bg-amber-500"
      : "bg-red-500";

  return (
    <div>
      {isShowTime ? (
        <p className="mb-2">
          you have <b>{time} seconds</b>
        </p>
      ) : null}
      <Title title="Quiz" />
      <Badge
        text={`${questionIdx + 1} / ${questions?.length}`}
        className="bg-white/15 text-slate-800 absolute right-4 top-4"
      />

      <div className="flex gap-2 mb-2">
        <Badge text={question.category} className="bg-black" />
        <Badge text={question.difficulty} className={bg} />
      </div>

      <h3 className="text-xl font-medium mb-8">
        {questionIdx + 1} - {question.question}
      </h3>

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        {question?.answers.map((a, i) => (
          <Answer key={i} answer={a} idx={i} />
        ))}
      </div>

      <Pagenation />
    </div>
  );
};

export default Quiz;
