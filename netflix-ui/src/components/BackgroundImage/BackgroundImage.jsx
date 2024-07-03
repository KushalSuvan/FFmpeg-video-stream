import "./BackgroundImage.css"
import small from "../../assets/images/IN-en-20240627-background_small.jpg"
import medium from "../../assets/images/IN-en-20240627-background_medium.jpg"
import large from "../../assets/images/IN-en-20240627-background_large.jpg"


const BackgroundImage = (props) => {
    return (
    <>
     <div className="background-image-container">
        <img alt="" src={small} srcSet={`${small} 1000w ${medium} 1500w ${large} 1800w`} className="background-image"/>
        <div className="background-bottom-vignette"></div>
     </div>
    </>
    )
}


export default BackgroundImage