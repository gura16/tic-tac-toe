import styled from "styled-components";
import oval_title from "./assets/Ovaltitle .svg";
import x_title from "./assets/X title.svg";
import x_turn from "./assets/x-turn.svg";
import redo from "./assets/Redo.svg";

function Multiplayer() {
  return (
    <>
      <Titlecontainer>
        <Pathcard>
          <Img_title src={x_title} />
          <Img_title src={oval_title} />
        </Pathcard>
        <Turnsigncard>
          <Img_x src={x_turn} />
          <Turn>TURN</Turn>
        </Turnsigncard>
        <Redocard>
          <Imgredo src={redo} />
        </Redocard>
      </Titlecontainer>
    </>
  );
}

export default Multiplayer;

const Titlecontainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 328px;
`;
const Pathcard = styled.div`
  display: flex;
  gap: 15px;
`;
const Img_title = styled.img`
  width: 31.74px;
  height: 31.74px;
`;

const Turnsigncard = styled.div`
  width: 96px;
  height: 40px;
  border-radius: 5px;
  background-color: #1f3641;
  box-shadow: 0px -4px 0px 0px #10212a inset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Img_x = styled.img`
  width: 16px;
  height: 16px;
`;

const Turn = styled.p`
  font-family: "Outfit", sans-serif;
  color: #a8bfc9;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.64px;
  letter-spacing: 0.875px;
  text-align: center;
`;

const Redocard = styled.div`
  width: 40px;
  height: 40px;
  background-color: #a8bfc9;
  border-radius: 5px;
  box-shadow: 0px -4px 0px 0px #6b8997 inset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Imgredo = styled.img`
  width: 15.38px;
  height: 15.38px;
`;
