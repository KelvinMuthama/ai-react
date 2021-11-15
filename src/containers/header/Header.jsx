import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          lets build something amazing with openAI
        </h1>
        <p>
          Artificial intelligence (AI) is intelligence demonstrated by machines,
          as opposed to natural intelligence displayed by animals including
          humans. Leading AI textbooks define the field as the study of
          "intelligent agents": any system that perceives its environment and
          takes actions that maximize its chance of achieving its goals
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </div>
  );
};

export default Header;
