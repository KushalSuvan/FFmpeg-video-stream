import styled from "styled-components";
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
        navigate("/login", { state: { email: email } });
      } else {
        navigate("/signup/registration", { state: { email: email } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignUpFormContainer>
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
      </SignUpFormContainer>
    </>
  );
};

const SignUpFormContainer = styled.div`
  :root {
    --netflix-red: rgb(229, 9, 20);
  }

  padding: 0 2rem;
  width: 100%;

  .signup-form-heading {
    font-size: 1.25rem;
    font-weight: 400;

    line-height: 1.5;

    text-align: center;

    text-wrap: wrap;
  }

  .signup-form-main {
    margin: 1rem auto 0;
    display: flex;

    max-width: 36.625rem;
  }

  .signup-input-block {
    position: relative;

    width: 100%;
    color: white;

    flex: 1 1 auto;
  }

  .signup-label {
    position: absolute;
    left: 1rem;
    right: 1rem;
    font-weight: 400;
    line-height: 1.5;

    cursor: text;
    color: rgba(255, 255, 255, 0.7);

    transition-property: top, font-size;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.9, 0, 0.51, 1);
  }

  .signup-label.focused {
    top: 0.5rem;
    font-size: 0.75rem;
  }

  .signup-label.unfocused {
    top: 1rem;
    font-size: 1rem;
  }

  .signup-input-container {
    width: 100%;

    display: flex;
  }

  .signup-input {
    background-color: transparent;
    border: none;
    width: 100%;

    font-size: 1rem;
    line-height: 1.5;
    padding: 1.5rem 1rem 0.5rem;

    color: inherit;
  }

  .signup-input-btn {
    background: rgb(229, 9, 20);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 0.25rem;

    font-size: 1.5rem;
    font-weight: 500;
    font-family: inherit;

    color: white;
  }

  .signup-form-main[data-issplitform="false"] .signup-input-btn {
    flex: 0 0 auto;
    margin-left: 0.5rem;
  }

  .signup-form-main[data-issplitform="true"] .signup-input-btn {
    margin-top: 1rem;
  }

  .signup-input-container {
    height: 100%;

    background: rgba(72, 116, 116, 0.3);

    border-radius: 0.2rem;
  }

  .svg-right-arrow-wrapper {
    height: 100%;
    display: inline-block;
  }

  .svg-right-arrow-wrapper > svg {
    position: relative;
    top: 0.25rem;
    display: inline-block;
    width: 1.5rem;
    margin-left: 0.75rem;
  }

  .signup-input-btn:hover {
    background: hsl(from rgb(229, 9, 20) h s 43);
    cursor: pointer;
  }
`;

export default SignUpBar;
