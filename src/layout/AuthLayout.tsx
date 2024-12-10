import { Outlet } from "react-router-dom";
import MaxWidthWrapper from "../components/common/MaxWidthWrapper";
import Header from "../components/header/Header";
import Footer from "../components/common/Footer";

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center absolute left-0 top-0"
      style={{ backgroundImage: "url('/images/sea.jpg')" }}
    >
      <div className="bg-black/25 size-full fixed left-0 top-0" />
      <Header />
      <MaxWidthWrapper className="mt-4 mb-8 min-h-[calc(100vh-192px)]">
        <Outlet />
      </MaxWidthWrapper>
      <Footer />
    </div>
  );
};

export default AuthLayout;
