import React from 'react';
import GDG from "../assets/gdg-icon.png"


interface ImageProps {
  position: { top: string; right: string; angle: string };
  rotationDegree: number;
}

const RotatingImage: React.FC<ImageProps> = ({position, rotationDegree }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: position.top,
    right: position.right,
    transform: `rotate(${rotationDegree}deg) rotate(${position.angle})`,
    transition: 'transform 0.5s ease',
    zIndex: -1
  };

  return <img src={GDG} alt="gdg" style={styles} className="h-20 w-24" />;
};

export default RotatingImage;