interface MonopolyRectangleUpProps {
  backgroundColor: string; // Specify the type of backgroundColor
}

function MonopolyRotatedtwo({ backgroundColor }: MonopolyRectangleUpProps) {
  return (
    <div className="containerRectangleRotated">
      <div
        className="partie_inf2"
        style={{ backgroundColor: backgroundColor }}
      ></div>
      <div className="MonopolyRotated"></div>
    </div>
  );
}
export default MonopolyRotatedtwo;
