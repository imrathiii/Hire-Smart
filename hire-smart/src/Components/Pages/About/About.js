import React from 'react';
import img2 from '../../../assets/img2.png';
const About = () => {

    const myStyle = {
      width: "50%",
      height: "50%",
    };
    
    const imgStyle = {
        position: "absolute",
     top: "50%",
  left: "70%",
  transform: "translate(-50%, -50%)",
    };

    return (
      <div>
        <img src={img2} id="img2" alt="cap" style={myStyle} />
        <div className="text1">
          <p style={imgStyle}>
            <h1>About-us</h1>
            <br/>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            dolorum, aliquid quaerat omnis quia mollitia odio perspiciatis saepe
            praesentium alias molestiae ad explicabo suscipit culpa, illo et
            dicta, neque error?
          </p>
        </div>
      </div>
    );
}

export default About
