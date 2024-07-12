import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Registration = () => {
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
          Step <b>1</b> of <b>4</b>
        </div>{" "}
        Finish setting up your account
      </h1>
      <p>
        Netflix is personalized for you. Create a password to watch on any
        device at any time.
      </p>
      <div className="regform-link-wrapper">
        <Link
          to="/signup/regform"
          state={{ email: email }}
          tabIndex="0"
          className="regform-link"
        >
          Next
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 340px;
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
  }

  p {
    text-align: center;
    font-size: 18px;
    max-width: 300px;
  }

  .steps {
    text-align: center;
    text-transform: uppercase;

    font-size: 13px;
    font-weight: 400;

    line-height: 19px;
  }

  .regform-link-wrapper {
    max-width: 340px;
    width: 100%;
    margin: 24px 0 0;
  }

  .regform-link {
    display: block;

    box-sizing: border-box;

    background-color: rgb(229, 9, 20);
    color: white;

    text-decoration: none;
    font-size: 24px;
    font-weight: 400;

    border-radius: 0.25rem;

    padding: 20.5px 2em;

    min-width: 100px;
    width: 100%;

    text-align: center;
    letter-spacing: 0.025rem;

    line-height: 24px;
  }

  .regform-link:hover {
    background-color: hsl(from rgb(290, 9, 20) h s 48);
  }
`;

export default Registration;
