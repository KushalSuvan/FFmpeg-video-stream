import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const VerifyEmail = () => {
  const email = useLocation().state.email;

  return (
    <Wrapper>
      <img
        aria-hidden
        src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
        alt=""
      ></img>
      <h1>
        <div className="steps">
          Step <b>2</b> of <b>4</b>
        </div>{" "}
        Great, now let us verify your email
      </h1>
      <p>
        Click the link we sent to <b>{email}</b> to verify.
      </p>
      <p style={{ marginTop: "2rem" }}>
        Verifying your email will improve account security and help you recieve
        important Netflix communications.
      </p>
      <div className="regform-link-wrapper">
        <Link
          to="/signup"
          state={{ email: email }}
          tabIndex="0"
          className="regform-link"
        >
          Skip
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 440px;
  margin: 0 auto;

  padding: 20px 20px 170px;

  color: #333;

  img {
    margin-block: 100px 20px;
    height: 90px;
    width: 260px;

    object-fit: contain;
  }

  h1 {
    text-align: center;
    margin: 0 0 0.4em;
    color: black;
  }

  p {
    text-align: center;
    font-size: 18px;
    max-width: 440px;

    color: rgba(0, 0, 0, 0.7);
  }

  .steps {
    text-align: center;
    text-transform: uppercase;

    font-size: 13px;
    font-weight: 400;

    line-height: 19px;
  }

  .regform-link-wrapper {
    width: 100%;
    margin: 24px 0 0;

    vertical-align: middle;
  }

  .regform-link {
    display: block;

    box-sizing: border-box;

    background-color: rgb(128, 128, 128, 0.3);
    color: black;

    text-decoration: none;
    font-size: 24px;
    font-weight: 600;

    border-radius: 0.25rem;

    padding: 0.75rem 1.5rem;

    min-height: 3.5rem;
    min-width: 100px;
    width: 100%;

    text-align: center;
    vertical-align: middle;
    /*letter-spacing: 0.025rem;*/

    line-height: 32px;
  }

  .regform-link:hover {
    background-color: rgba(128, 128, 128, 0.2);
  }
`;

export default VerifyEmail;
