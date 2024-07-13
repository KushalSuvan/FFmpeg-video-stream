import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Input from "../../components/Input";

const RegistrationForm = () => {
  const email = useLocation().state.email;

  return (
    <Wrapper>
      <form method="POST">
        <div className="step-header">
          <h1>
            <div className="steps" aria-hidden={true}>
              Step <b>1</b> of <b>4</b>
            </div>{" "}
            Create a password to start your membership
          </h1>
        </div>

        <p>Just a few more steps and you&apos;re done!</p>
        <p> We hate paperwork, too.</p>

        <ul dir="ltr">
          <li>
            <Input type="email" label="Email" id="email-input" value={email} />
          </li>
          <li>
            <Input type="password" label="Add a password" id="password-input" />
          </li>
        </ul>
      </form>

      <div className="regform-link-wrapper">
        <Link
          to="/signup/verifyemail"
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
  max-width: 440px;
  margin-inline: auto;
  color: #333;
  padding-top: 20px;
  padding-bottom: 170px;

  .step-header {
    margin-block: 20px;
  }

  .steps {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 13px;
  }

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }

  ul {
    margin-block: 16px 20px;
    list-style-type: none;
  }

  li {
    margin-bottom: 10px;
  }

  .regform-link-wrapper {
    margin-top: 24px;
  }

  .regform-link {
    display: block;
    background-color: rgb(229, 9, 20);
    border-radius: 0.2rem;

    color: white;

    font-size: 24px;
    text-decoration: none;

    padding: 20.4px 2em;

    text-align: center;
    vertical-align: middle;

    letter-spacing: 0.025rem;
  }

  .regform-link:hover {
    background-color: hsl(from rgb(229, 9, 20) h s 50);
  }
`;

export default RegistrationForm;
