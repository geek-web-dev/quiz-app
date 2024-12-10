import { Dispatch, SetStateAction } from "react";
import Button from "../form/Button";

const Popup = ({
  popupAction,
  setIsPopupOpen,
}: {
  popupAction: () => void;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div
        className="bg-black/25 size-full fixed left-0 top-0 backdrop-blur-sm"
        onClick={closePopup}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-4 z-50 w-1/2">
        <h1 className="font-semibold text-2xl mb-2">Are you sure?</h1>
        <p className="mb-4">you will clear your quiz's analysis</p>
        <div className="space-x-4">
          <Button
            variant="red"
            onClick={() => {
              popupAction();
              closePopup();
            }}
          >
            Sure
          </Button>
          <Button variant="blue" onClick={closePopup}>
            {" "}
            No{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Popup;
