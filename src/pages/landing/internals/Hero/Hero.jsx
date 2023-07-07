import Button from '../../../../components/Button';
import { Hero1, Hero2, Hero3, Hero4, Svg1, Svg2, Svg3, Svg4, Svg5, ArrowDown } from '../../../../assets/index';

import './styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="top-section">
        <h1>
          In need of some <span>stipend</span> <br /> to support your learning?
        </h1>
        <div>
          <p>Give your learning goals a BOOST</p>
          <img src={Svg1} alt="svg" />
        </div>
        <Button label="Request stipend" className="button" />
      </div>
      <img src={Svg5} alt="svg" className="left" />
      <img src={Svg4} alt="svg" className="right" />
      <img src={Svg3} alt="svg" className="left2" />
      <img src={Svg2} alt="svg" className="right2" />
      <div className="down-section">
        <img src={Hero1} alt="student" />
        <img src={Hero2} alt="student" className="img2" />
        <img src={Hero3} alt="student" className="img2" />
        <img src={Hero4} alt="student" />
        <div className="btn-down">
          <img src={ArrowDown} alt="arrowdown" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
