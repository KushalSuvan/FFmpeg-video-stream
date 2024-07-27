import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { default as Bullets } from "../../assets/ChooseYourPlanBullets";

const SignUp = () => {
  console.log(useLocation().state);
  const email = useLocation().state.email;

  return (
    <Wrapper>
      <span className="step-logo plan-step-logo"></span>
      <div>
        <h1>
          <div className="steps">
            Step <b>3</b> of <b>4</b>
          </div>{" "}
          Choose your plan.
        </h1>
      </div>
      <ul>
        <li>
          <Bullets />
          <span>No commitments, cancel anytime.</span>
        </li>
        <li>
          <Bullets />
          <span>Everything on Netflix for one low price.</span>
        </li>
        <li>
          <Bullets />
          <span>No ads and no extra fees. Ever.</span>
        </li>
      </ul>
      <div className="regform-link-wrapper">
        <Link
          to="/signup/planform"
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

  .step-logo {
    margin-block: 100px 20px;
  }

  .plan-step-logo {
    background: url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png);
    height: 50px;
    width: 50px;

    background-size: 50px;
  }

  h1 {
    text-align: center;
    margin: 0 0 0.4em;
  }

  ul {
    text-align: center;
    font-size: 18px;
    max-width: 300px;

    margin-block: 15px;

    list-style-type: none;
  }

  li {
    display: flex;
    justify-content: flex-start;
  }

  li svg {
    height: 26px;
    width: 26px;

    flex: none;

    color: rgb(229, 9, 20);
  }

  li > span {
    margin-left: 10px;
    text-align: left;
  }

  li + li {
    margin-top: 20px;
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

export default SignUp;
