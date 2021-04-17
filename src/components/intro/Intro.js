import { useEffect, useState } from 'react';
import { GhFollowkBtn } from '../buttons/buttons';
import "./intro.css";

const Intro = () => {
  const doin = [
    "Undergrad, 2022",
    "National Institute of Technology, Jamshedpur",
    "Competitive Programmer",
    "Open Source Developer"
    
  ];
  const [idx, updateIdx] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      updateIdx((prevIdx) => (prevIdx +1) % doin.length);
    }, 2000);
    return () => {
      window.clearInterval(timer);
    }
  }, [doin.length])

  return (
    <>
      <div className="intro">
        <div>
          <div className="intro-head">Hi, there! <span style={{color: "#fc6d26"}}>I'm</span></div>
          <div className="intro-name">Ankit Raj</div>
          <div className="intro-doin">{doin[idx]}</div>
          <div className="intro-gh-follow"><GhFollowkBtn username={"sourav1319"} /></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
