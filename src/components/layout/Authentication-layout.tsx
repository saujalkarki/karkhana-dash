import { Outlet } from "react-router-dom";
import AuthImage from "../../assets/login-hero.png";

function AuthenticationLayout() {
  return (
    <div className="relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden lg:flex">
        <img src={AuthImage} alt="Auth Image" className=" h-screen w-full" />
      </div>
      <div className=" h-screen p-4 lg:p-8 flex items-center justify-center bg-white">
        <div className="mx-auto flex md:w-[466px] flex-col justify-center space-y-6 sm:w-[350px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthenticationLayout;
