import styled from "styled-components";
import oval_title from "./assets/Ovaltitle .svg";
import x_title from "./assets/X title.svg";
import redo from "./assets/Redo.svg";
import x_path from "./assets/Combined.svg";
import oval from "./assets/Oval Copy.svg";
import { useState } from "react";

function Multiplayer() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    const squares = [...board];

    if (squares[index] === null) {
      squares[index] = xIsNext ? "X" : "O";

      setBoard(squares);
      setXIsNext(!xIsNext);
    }
  };

  const renderSquare = (index: number) => {
    return (
      <Square onClick={() => handleClick(index)}>
        {board[index] === "X" && <img src={x_path} alt="X" />}
        {board[index] === "O" && <img src={oval} alt="O" />}
      </Square>
    );
  };

  return (
    <>
      <Titlecontainer>
        <Pathcard>
          <Img_title src={x_title} />
          <Img_title src={oval_title} />
        </Pathcard>
        <Turnsigncard>
          <Img_x src={xIsNext ? x_path : oval} alt={xIsNext ? "X" : "O"} />
          <Turn>TURN</Turn>
        </Turnsigncard>
        <Redocard>
          <Imgredo src={redo} />
        </Redocard>
      </Titlecontainer>
      <Board>
        <Card>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </Card>
        <Card>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </Card>
        <Card>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </Card>
      </Board>
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

const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
const Square = styled.div`
  width: 96px;
  height: 96px;
  background-color: #1f3641;
  box-shadow: 0px -8px 0px 0px #10212a inset;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
