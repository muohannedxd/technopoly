interface MonopolyRectangleUpProps {
  backgroundColor?: string; // Make it optional
  backimage: string; // Add the backimage property (optional)
}

function MonopolyRota({
  backgroundColor,
  backimage,
}: MonopolyRectangleUpProps) {
  return (
    <div
      className="containerRectangleRotated1"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backimage})`, // Use backgroundImage with template literals
        backgroundRepeat: "no-repeat", // Optional: Prevents repeating the image
        backgroundPosition: "center",
        backgroundSize: "150px", // Centers the image
      }}
    ></div>
  );
}

export default MonopolyRota;
