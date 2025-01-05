interface MonopolyRectangleUpProps {
  backgroundColor: string; // Specify the type of backgroundColor
}

function MonopolyRotated({ backgroundColor }: MonopolyRectangleUpProps) {
  return (
    <div className="containerRectangleRotated">
      <div className="MonopolyRotated"></div>
      <div
        className="partie_inf2"
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
}
export default MonopolyRotated;
