import React from 'react';
import Coin from "../assets/coin.png"


interface ImageProps {
  position: { top: string; left: string; angle: string };
  rotationDegree: number;
}

const RotatingImage: React.FC<ImageProps> = ({position, rotationDegree }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    transform: `rotate(${rotationDegree}deg) rotate(${position.angle})`,
    transition: 'transform 0.5s ease',
  };

  return <img src={Coin} alt="coin" style={styles} className="h-20 w-24" />;
};

export default RotatingImage;
