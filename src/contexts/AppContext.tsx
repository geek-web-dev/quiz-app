import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { CorrectAnswer, QuestionType, UserType } from "../shared";
import Popup from "../components/common/Popup";
import useSessionStorage from "../hooks/useSessionStorage";

type AppContextProps = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;

  isQuizStart: boolean;
  setIsQuizStart: Dispatch<SetStateAction<boolean>>;

  questions: QuestionType[] | null;
  setQuestions: Dispatch<SetStateAction<QuestionType[] | null>>;
  questionIdx: number;
  setQuestionIdx: Dispatch<SetStateAction<number>>;
  question: QuestionType | null;
  setQuestion: Dispatch<SetStateAction<QuestionType | null>>;

  isAnswer: boolean;
  setIsAnswer: Dispatch<SetStateAction<boolean>>;

  completedQuizes: number;
  setCompletedQuizes: Dispatch<SetStateAction<number>>;
  currCorrectAnswersCount: number;
  setcurrCorrectAnswersCount: Dispatch<SetStateAction<number>>;
  correctAnswers: CorrectAnswer[];
  setCorrectAnswers: Dispatch<SetStateAction<CorrectAnswer[]>>;
  wrongAnswersCount: number;
  setWrongAnswersCount: Dispatch<SetStateAction<number>>;

  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextProps);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  // ------ user ------ //
  const [user, setUser] = useSessionStorage<UserType | null>("quiz_user", null);

  // ------ quiz availability ------ //
  const [isQuizStart, setIsQuizStart] = useState(false);

  // ------ question ------ //
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);

  const [questionIdx, setQuestionIdx] = useState(0);

  const [question, setQuestion] = useState<QuestionType | null>(null);

  // ------ answers ------ //
  const [isAnswer, setIsAnswer] = useState(false);

  // ------ analysis ------ //

  const [completedQuizes, setCompletedQuizes] = useSessionStorage<number>(
    "completed_quizes",
    0
  );

  const [currCorrectAnswersCount, setcurrCorrectAnswersCount] = useState(0);

  const [correctAnswers, setCorrectAnswers] = useSessionStorage<
    CorrectAnswer[]
  >("correct_answers", []);

  const [wrongAnswersCount, setWrongAnswersCount] = useSessionStorage<number>(
    "wrong_answers",
    0
  );

  // ------ popup ------ //
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const clearAnalysis = () => {
    setCompletedQuizes(0);
    setCorrectAnswers([]);
    setWrongAnswersCount(0);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,

        isQuizStart,
        setIsQuizStart,

        questions,
        setQuestions,
        questionIdx,
        setQuestionIdx,
        question,
        setQuestion,

        isAnswer,
        setIsAnswer,

        completedQuizes,
        setCompletedQuizes,
        currCorrectAnswersCount,
        setcurrCorrectAnswersCount,
        correctAnswers,
        setCorrectAnswers,
        wrongAnswersCount,
        setWrongAnswersCount,

        setIsPopupOpen,
      }}
    >
      {children}
      {isPopupOpen ? (
        <Popup popupAction={clearAnalysis} setIsPopupOpen={setIsPopupOpen} />
      ) : null}
    </AppContext.Provider>
  );
};

export default AppContext;
