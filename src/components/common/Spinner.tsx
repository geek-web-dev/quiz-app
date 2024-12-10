import { cn } from "../../lib/utils";
import styles from "../../styles.module.css";
const { spinner } = styles;

const Spinner = ({ className }: { className?: string }) => {
  return <div className={cn("mx-auto", spinner, className)} />;
};

export default Spinner;
