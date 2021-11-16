import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "machine learning",
    text: "This is the science of getting a computer to act without programming. Deep learning is a subset of machine learning that, in very simple terms, can be thought of as the automation of predictive analytics",
  },
  {
    title: "machine vision",
    text: "This technology gives a machine the ability to see. Machine vision captures and analyzes visual information using a camera, analog-to-digital conversion and digital signal processing. ",
  },
  {
    title: "Natural language processing (NLP)",
    text: "This is the processing of human language by a computer program. One of the older and best-known examples of NLP is spam detection, which looks at the subject line and text of an email and decides if it's junk",
  },
  {
    title: "Robotics",
    text: "This field of engineering focuses on the design and manufacturing of robots. Robots are often used to perform tasks that are difficult for humans to perform or perform consistently.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          the future is now and you just need to realize it. step into the
          future today & make it happen.
        </h1>
        <p>request early access</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
