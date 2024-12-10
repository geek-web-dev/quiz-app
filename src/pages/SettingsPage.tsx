import Switch from "../components/common/Switch";
import Title from "../components/common/Title";
import { useSettnigsContext } from "../contexts/SettingsContext";

const SettingsPage = () => {
  const {
    isShowAnswer,
    setIsShowAnswer,
    isShowTime,
    setIsShowTime,
    isSound,
    setIsSound,
  } = useSettnigsContext();

  return (
    <div>
      <Title title="settings" />

      <div className="space-y-4">
        <div className="space-y-2">
          <p>show is my answer wrong or correct</p>
          <Switch isOn={isShowAnswer} setState={setIsShowAnswer} />
        </div>

        <div className="space-y-2">
          <p>quiz with time</p>
          <Switch isOn={isShowTime} setState={setIsShowTime} />
        </div>

        <div className="space-y-2">
          <p>sounds</p>
          <Switch isOn={isSound} setState={setIsSound} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
