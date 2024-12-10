import { Navigate, Outlet } from "react-router-dom";
import MaxWidthWrapper from "../components/common/MaxWidthWrapper";
import Header from "../components/header/Header";
import Footer from "../components/common/Footer";
import { useAppContext } from "../contexts/AppContext";

const MainLayout = () => {
  const { user, isQuizStart } = useAppContext();

  if (!user) return <Navigate to={"/auth/login"} />;

  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center  left-0 top-0"
      style={{ backgroundImage: "url('/images/sea.jpg')" }}
    >
      <div className="bg-black/25 size-full fixed left-0 top-0 -z-1" />

      <Header isShow={!isQuizStart} />

      <MaxWidthWrapper className="mt-4 mb-8 min-h-[calc(100vh-192px)]">
        <div className="backdrop-blur-sm bg-white/25 rounded-md p-4">
          <Outlet />
        </div>
      </MaxWidthWrapper>

      <Footer />
    </div>
  );
};

export default MainLayout;
