import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>request early access to get started</h4>
        <h1 className="gradient__text">
          the possibilities are beyond your imagination
        </h1>
        <p>
          AI is important because it can give enterprises insights into their
          operations that they may not have been aware of previously and
          because, in some cases, AI can perform tasks better than humans.
        </p>
        <h4>request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
