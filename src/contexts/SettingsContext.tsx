import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAppContext } from "./AppContext";
import useSessionStorage from "../hooks/useSessionStorage";

type SettnigsContextProps = {
  isShowAnswer: boolean;
  setIsShowAnswer: Dispatch<SetStateAction<boolean>>;
  isShowTime: boolean;
  setIsShowTime: Dispatch<SetStateAction<boolean>>;
  isSound: boolean;
  setIsSound: Dispatch<SetStateAction<boolean>>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
};

export const SettnigsContext = createContext({} as SettnigsContextProps);

export const useSettnigsContext = () => useContext(SettnigsContext);

export const SettnigsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { setIsQuizStart } = useAppContext();

  const finishQuiz = () => setIsQuizStart(false);

  const [isShowAnswer, setIsShowAnswer] = useSessionStorage<boolean>(
    "quiz_show_answer",
    true
  );
  const [isShowTime, setIsShowTime] = useSessionStorage<boolean>(
    "quiz_time",
    false
  );
  const [isSound, setIsSound] = useSessionStorage<boolean>("quiz_sound", false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time <= 0) {
      return finishQuiz();
    }

    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev - 1 <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <SettnigsContext.Provider
      value={{
        isShowAnswer,
        setIsShowAnswer,
        isShowTime,
        setIsShowTime,
        isSound,
        setIsSound,
        time,
        setTime,
      }}
    >
      {children}
    </SettnigsContext.Provider>
  );
};
