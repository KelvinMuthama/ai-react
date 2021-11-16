import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          do you want to step into the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>request early access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Artificial Intelligence (AI) Is Intelligence</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>links</h4>
          <p>overons</p>
          <p>social media</p>
          <p>counters</p>
          <p>contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>company</h4>
          <p>terms & conditions</p>
          <p>privacy policy</p>
          <p>contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>kelvinkamau387@gmail.com</p>
          <p>0790553379</p>
          <p>nairobi, kenya.</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright gradient__text">
        <p>Kelvin Kamau | become the standard measure</p>
      </div>
    </div>
  );
};

export default Footer;
