import "./SignUpBar.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AppContext";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import RightArrowSvg from "./RightArrowSvg";

const SignUpBar = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const navigate = useNavigate();

  // Check if email exists; redirect to login or signup accordingly
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        navigate("/login", { state: email });
      } else {
        navigate("/signup", { state: email });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signup-form-container">
        <form
          className="signup-form"
          aria-label="Sign up or restart your membership with Netflix"
          method="post"
          onSubmit={handleSubmit}
        >
          <h3 className="signup-form-heading">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div
            className="signup-form-main"
            data-hasmessage="false"
            data-issplitform="false"
          >
            <div className="signup-input-block">
              <label
                className={`signup-label ${
                  inputFocus ? "focused" : "unfocused"
                }`}
                htmlFor="input"
              >
                Email address
              </label>
              <div className="signup-input-container">
                <input
                  className="signup-input"
                  autoComplete="email"
                  type="email"
                  minLength="5"
                  maxLength="50"
                  id="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setInputFocus(true)}
                  onBlur={(e) =>
                    setInputFocus(e.target.value == "" ? false : true)
                  }
                />
              </div>
            </div>
            <button className="signup-input-btn" type="submit" role="button">
              Get Started
              <div className="svg-right-arrow-wrapper">
                <RightArrowSvg />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpBar;
