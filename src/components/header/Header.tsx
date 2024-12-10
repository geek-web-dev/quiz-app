import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import Button from "../form/Button";
import Nav from "./Nav";
import { cn } from "../../lib/utils";

const Header = ({ isShow = true }: { isShow?: boolean }) => {
  const { user, setUser } = useAppContext();

  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="h-16">
      <div
        className={cn(
          "fixed left-0 top-0 w-full bg-white/25 backdrop-blur-sm h-16 rounded-b-lg z-10 duration-150",
          isShow ? "" : "-translate-y-full"
        )}
      >
        <MaxWidthWrapper className="h-full flex items-center">
          <Link className="text-2xl font-bold sm:block hidden" to={"/"}>
            Quiz<span className="text-red-500">oX</span>
          </Link>

          <Nav />

          <div className="ml-auto flex gap-6 items-center">
            <img
              src={user ? "/images/avatar.png" : "/images/no-user.png"}
              alt="person"
              className="rounded-full size-10 "
            />

            {user ? (
              <>
                <span className="h-4 w-[2px] bg-white/25 block" />
                <Button variant="water" onClick={logout}>
                  Logout
                </Button>{" "}
              </>
            ) : null}
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Header;
