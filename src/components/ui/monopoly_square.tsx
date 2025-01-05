interface MonopolyRectangleUpProps {
  backgroundColor: string; // Specify the type of backgroundColor
  backimage: string;
}
function MonopolySquare({
  backgroundColor,
  backimage,
}: MonopolyRectangleUpProps) {
  return (
    <div
      className="MonopolySquare"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backimage})`, // Use backgroundImage with template literals
        backgroundRepeat: "no-repeat", // Optional: Prevents repeating the image
        backgroundPosition: "center",
        backgroundSize: "100px",
      }}
    ></div>
  );
}
export default MonopolySquare;
