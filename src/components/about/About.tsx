import { useNavigate } from "react-router-dom";
import "./aboutStyle.scss"
import { FaArrowLeft } from "react-icons/fa";

const About = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="about-container">
        <FaArrowLeft className="back-icon" onClick={() => navigate('/')} />
        <h1 className="about-title">About</h1>
        <div className="free-text-container">
          <p className="free-text">Developer: Eliran Giladi</p>
          <p className="free-text">Game: </p>
        </div>
      </div>
    </>
  )
}

export default About