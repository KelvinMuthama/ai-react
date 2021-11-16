import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="what is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          the possibilities are beyond your imagination
        </h1>
        <p className="gradient__text">explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="chatbots"
          text="Chatbots are software applications that use artificial intelligence & natural language processing to understand what a human wants, and guides them to their desired outcome with as little work for the end user as possible. Like a virtual assistant for your customer experience touchpoints."
        />
        <Feature
          title="knowledgebase"
          text="This aspect of AI programming focuses on acquiring data and creating rules for how to turn the data into actionable information. The rules, which are called algorithms, provide computing devices with step-by-step instructions for how to complete a specific task."
        />
        <Feature
          title="education"
          text="In general, AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
