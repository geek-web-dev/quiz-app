import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseNav = () => setIsOpen((p) => !p);

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="sm:hidden block size-6 cursor-pointer"
        onClick={openCloseNav}
      />

      <nav
        className={cn(
          "sm:ml-8 sm:bg-transparent bg-white sm:rounded-none rounded-md sm:relative absolute sm:top-0 top-full sm:mt-0 mt-2 sm:p-0 p-4",
          "sm:flex sm:flex-row flex-col gap-4",
          isOpen ? "flex" : "hidden"
        )}
      >
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/overview"}>Overview</Link>
        <Link to={"/settings"}>Settings</Link>
      </nav>
    </>
  );
};

export default Nav;
