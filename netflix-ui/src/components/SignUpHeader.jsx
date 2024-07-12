import styled from "styled-components";
import NetflixLogo from "../assets/NetflixLogo";
import { Link, useLocation } from "react-router-dom";

const SignUpHeader = () => {
  const email = useLocation().state.email;

  return (
    <HeaderStyle>
      <Link to={"/"} className="root-link">
        <NetflixLogo />
        <span className="root-link-text">Netflix Home</span>
      </Link>
      <Link
        to={("/login", { state: { email: email } })}
        className="sign-in-link"
      >
        Sign In
      </Link>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  height: 90px;
  border-bottom: solid #e6e6e6 1px;

  .svg-icon-netflix-logo {
    fill: rgb(229, 9, 20);
    height: 45px;
    width: 167px;
    vertical-align: middle;
  }

  .root-link {
    margin-left: 3%;
    line-height: 90px;
    display: inline-block;
  }

  .sign-in-link {
    float: right;
    margin-right: 3%;
    line-height: 90px;

    text-decoration: none;
    color: #333;
    font-weight: 600;
    font-size: 19px;
  }

  .sign-in-link:hover {
    text-decoration: underline;
  }

  .root-link-text {
    position: absolute;
    visibility: hidden;
  }

  @media (max-width: 740px) {
    .sign-in-link {
      font-size: 16px;
    }
  }
`;

export default SignUpHeader;
