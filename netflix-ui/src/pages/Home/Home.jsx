import styled from "styled-components";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import HomeHeader from "../../components/HomeHeader";
import SignUpBar from "../../components/SignUpBar/SignUpBar";

const Home = () => {
  return (
    <>
      <HeroSection>
        <div className="welcome-banner">
          <BackgroundImage />
        </div>
        <div className="welcome-header">
          <HomeHeader />
        </div>
        <div className="sign-up-bar">
          <SignUpBar />
        </div>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 9.875rem 0 4rem;

  box-sizing: border-box;

  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100%;

  margin: auto;

  color: white;

  .welcome-banner {
  }

  .welcome-header {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  .sign-up-bar {
    margin: 1.5rem 0 0;
  }
`;

export default Home;
