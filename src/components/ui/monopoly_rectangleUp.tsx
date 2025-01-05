interface MonopolyRectangleUpProps {
  backgroundColor: string; // Specify the type of backgroundColor
  backimage?: string; // Optional backimage property
}

function MonopolyRectangleUp({
  backgroundColor,
  backimage,
}: MonopolyRectangleUpProps) {
  return (
    <div className="containerRectangle">
      <div
        className="partie_inf"
        style={{
          backgroundColor: backgroundColor,
        }}
      ></div>
      <div
        className="MonopolyRectangle"
        style={{
          backgroundImage: backimage ? `url(${backimage})` : undefined, // Apply backimage if provided
          backgroundRepeat: "no-repeat", // Optional: Prevents repeating the image
          backgroundPosition: "center",
          backgroundSize: "100px", // Centers the image
        }}
      ></div>
    </div>
  );
}

export default MonopolyRectangleUp;
