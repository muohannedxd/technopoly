interface MonopolyRectangleProps {
  backgroundColor: string; // Specify the type of backgroundColor
  backimage?: string; // Optional backimage property
}

function MonopolyRectangle({
  backgroundColor,
  backimage,
}: MonopolyRectangleProps) {
  return (
    <div className="containerRectangle">
      <div
        className="MonopolyRectangle"
        style={{
          backgroundImage: backimage ? `url(${backimage})` : undefined, // Apply backimage if provided
          backgroundRepeat: "no-repeat", // Optional: Prevents repeating the image
          backgroundPosition: "center",
          backgroundSize: "100px", // Centers the image
        }}
      ></div>
      <div
        className="partie_inf"
        style={{ backgroundColor: backgroundColor }}
      ></div>
    </div>
  );
}

export default MonopolyRectangle;
