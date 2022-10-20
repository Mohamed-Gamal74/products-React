import myPhoto from "../../assests/my.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="d-flex align-content-center  aboutSection container p-5 shadow ">
      <img src={myPhoto} alt="profile-img" className="myPhoto" />

      <div class="about__content-text mt-1 text-uppercase">
        <h1 class="about__content-heading text-light">
          Hi, My name is
          <span> Mohamed Gamal</span>
        </h1>
        <p>
          I'm a <span>Frontend Developer</span> in living alexandria, Egypt. I
          make web application using <span> Html</span>,<span> Css</span>,
          <span> Javascript</span>, <span> React js</span>,<span> Sass</span> ,
          <span> Angular</span> ,<span> Typescript</span> and 
          <span> bootstrap</span>
        </p>
      </div>
    </div>
  );
};

export default About;
