interface MonopolyRectangleProps {
  backgroundColor: string; // Specify the type of backgroundColor
  backimage: string; // Specify the type of backimage
}

function MonopolyRec({ backgroundColor, backimage }: MonopolyRectangleProps) {
  return (
    <div
      className="containerRectangle"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backimage})`, // Use backgroundImage with template literals
        backgroundSize: "150px", // Optional: Ensures the image covers the div
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Optional: Prevents repeating the image
      }}
    ></div>
  );
}

export default MonopolyRec;
