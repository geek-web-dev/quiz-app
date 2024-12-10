import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-white/25 p-4 rounded-t-md backdrop-blur-sm space-y-2">
      <p className="text-center">
        <span className="">QuizOX</span> All rights reserved ® 2024 developed by{" "}
        <a className="font-bold">Ahmed Belal</a>
      </p>
      <div className="flex gap-4 justify-center">
        <I icon={faFacebook} />
        <I icon={faInstagram} />
        <I icon={faLinkedin} />
      </div>
    </div>
  );
};

export default Footer;
