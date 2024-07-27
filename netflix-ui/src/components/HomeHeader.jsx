import styled from "styled-components";

const HomeHeader = () => {
  return (
    <>
      <HomeHeaderWrapper>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
      </HomeHeaderWrapper>
    </>
  );
};

const HomeHeaderWrapper = styled.div`
  z-index: 5;

  text-align: center;

  p {
    font-weight: 400;
    font-size: 1.5rem;

    color: white;

    margin: 1rem 0 0;

    text-align: center;
  }

  h1 {
    font-weight: 900;
    font-size: 3rem;

    color: white;

    text-align: center;
  }
`;

export default HomeHeader;
