import MonopolySquare from "../ui/monopoly_square";
import MonopolyRectangle from "../ui/monopoly_regtangle";
import MonopolyRotated from "../ui/monopoly_rotated";
import MonopolyRectangleUp from "../ui/monopoly_rectangleUp";
import MonopolyRotatedtwo from "../ui/monopoly_rotated2";
import MonopolyRec from "../ui/monopoly_rec";
import MonopolyRota from "../ui/monopoly_rota";

function Monopoly() {
  return (
    <div className="MonopolyBoard">
      <div className="flex-row">
        <MonopolySquare
          backgroundColor="#FF8C1E"
          backimage="/src/assets/logo/adobe.png"
        ></MonopolySquare>
        <div className="flex-row">
          <MonopolyRectangle
            backgroundColor="#2396FF"
            backimage="/src/assets/logo/drivebleu.png"
          ></MonopolyRectangle>
          <MonopolyRectangle backgroundColor="#2396FF"></MonopolyRectangle>
          <MonopolyRectangle
            backgroundColor="#2396FF"
            backimage="/src/assets/logo/vscode.png"
          ></MonopolyRectangle>
          <MonopolyRec
            backgroundColor="#6E6E6E"
            backimage="/src/assets/logo/question_mark.png"
          ></MonopolyRec>
          <MonopolyRectangle backgroundColor="#94C5AF"></MonopolyRectangle>
          <MonopolyRectangle
            backgroundColor="#94C5AF"
            backimage="/src/assets/logo/googleclass.png"
          ></MonopolyRectangle>
          <MonopolyRectangle backgroundColor="#94C5AF"></MonopolyRectangle>
        </div>
        <MonopolySquare
          backgroundColor="#468C44"
          backimage="/src/assets/logo/exel.png"
        ></MonopolySquare>
      </div>

      <div className="flex-row-space">
        <div className="flex-column">
          <MonopolyRotated backgroundColor="#3250AA"></MonopolyRotated>
          <MonopolyRotated backgroundColor="#3250AA"></MonopolyRotated>
          <MonopolyRota
            backgroundColor="#6029FE"
            backimage="/src/assets/logo/gdg.png"
          ></MonopolyRota>
          <MonopolyRotated backgroundColor="#3250AA"></MonopolyRotated>
        </div>
        <div className="flex-column">
          <MonopolyRotatedtwo backgroundColor="#FFE62E"></MonopolyRotatedtwo>
          <MonopolyRota
            backgroundColor="#6029FE"
            backimage="/src/assets/logo/figma.png"
          ></MonopolyRota>
          <MonopolyRotatedtwo backgroundColor="#FFE62E"></MonopolyRotatedtwo>
          <MonopolyRotatedtwo backgroundColor="#FFE62E"></MonopolyRotatedtwo>
        </div>
      </div>

      <div className="flex-row">
        <MonopolySquare
          backgroundColor="#FF303D"
          backimage="/src/assets/logo/start.png"
        ></MonopolySquare>
        <div className="flex-row">
          <MonopolyRectangleUp backgroundColor="#FF8C1E"></MonopolyRectangleUp>
          <MonopolyRectangleUp
            backgroundColor="#FF8C1E"
            backimage="/src/assets/logo/html.png"
          ></MonopolyRectangleUp>
          <MonopolyRec
            backgroundColor="#FF8C1E"
            backimage="/src/assets/logo/REGISTER.png"
          ></MonopolyRec>
          <MonopolyRectangleUp
            backgroundColor="#FF8C1E"
            backimage="/src/assets/logo/ubentu.png"
          ></MonopolyRectangleUp>
          <MonopolyRectangleUp backgroundColor="#EFE8D8"></MonopolyRectangleUp>
          <MonopolyRectangleUp
            backgroundColor="#FF303D"
            backimage="/src/assets/logo/power_point.png"
          ></MonopolyRectangleUp>
          <MonopolyRectangleUp
            backgroundColor="#FF303D"
            backimage="/src/assets/logo/github.png"
          ></MonopolyRectangleUp>
        </div>
        <MonopolySquare
          backgroundColor="#93C0AC"
          backimage="/src/assets/logo/logogdg.png"
        ></MonopolySquare>
      </div>
    </div>
  );
}
export default Monopoly;
