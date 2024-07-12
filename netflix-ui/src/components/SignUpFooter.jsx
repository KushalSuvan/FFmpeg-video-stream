import styled from "styled-components";

const SignUpFooter = () => {
  return (
    <FooterStyle>
      <p>
        <span data-hidden>Got any </span> Questions? Call{" "}
      </p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  background-color: #f3f3f3;
  padding-top: 30px;
  border-top: solid #e6e6e6 1px;

  p {
    color: #333;
  }

  span[data-hidden="true"] {
    position: absolute;
    visibility: hidden;
  }
`;

export default SignUpFooter;
