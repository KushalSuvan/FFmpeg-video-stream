import { useLocation } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const location = useLocation();
  console.log(location.state["email"]);

  return <>{"Sign up"}</>;
};

export default SignUp;
