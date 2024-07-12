import { Outlet } from "react-router-dom";
import SignUpHeader from "../components/SignUpHeader";
import SignUpFooter from "../components/SignUpFooter";

const SignUpLayout = () => {
  return (
    <>
      <SignUpHeader />
      <Outlet />
      <SignUpFooter />
    </>
  );
};

export default SignUpLayout;
