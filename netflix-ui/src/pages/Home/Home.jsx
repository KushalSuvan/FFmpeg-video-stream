import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import SignUpBar from "../../components/SignUpBar/SignUpBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="welcome">
        <div className="welcome-banner">
          <BackgroundImage />
        </div>
        <div className="welcome-header">
          <HomeHeader />
        </div>
        <div className="sign-up-bar">
          <SignUpBar />
        </div>
      </div>
    </>
  );
};

export default Home;
