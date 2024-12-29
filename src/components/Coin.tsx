import React from 'react';

interface ImageProps {
  src: string;
  position: { top: string; left: string; angle: string };
  rotationDegree: number;
}

const RotatingImage: React.FC<ImageProps> = ({ src, position, rotationDegree }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    top: position.top,
    left: position.left,
    transform: `rotate(${rotationDegree}deg) rotate(${position.angle})`,
    transition: 'transform 0.5s ease',
  };

  return <img src={src} alt="coin" style={styles} className="h-20 w-24" />;
};

export default RotatingImage;
