import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import Badge from "../quiz/Badge";

const CardInfo = ({
  count,
  title,
  Icon,
  children,
}: {
  count?: number;
  title?: string;
  Icon?: IconDefinition | string;
  children?: ReactNode;
}) => {
  return (
    <div className="rounded-md p-4 bg-white/50">
      {children ? (
        children
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-2">{count}</h1>
          <div className="flex justify-between text-slate-600">
            <p>{title}</p>
            {typeof Icon === "string" ? (
              <Badge text={Icon} className="bg-black" />
            ) : Icon ? (
              <FontAwesomeIcon icon={Icon} />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default CardInfo;
