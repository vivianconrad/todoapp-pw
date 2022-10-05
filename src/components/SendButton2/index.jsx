import React from "react";
import styled from "styled-components";


function SendButton2(props) {
  const { src } = props;

  return (
    <SendButton>
      <Polygon1 src={src} alt="Polygon 1" />
    </SendButton>
  );
}

const SendButton = styled.div`
  height: 38px;
  display: flex;
  padding: 4.7px 13.7px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 50px;
  background-color: var(--sea-pink);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
`;

const Polygon1 = styled.img`
  width: 20px;
  height: 25px;
  object-fit: cover;
`;

export default SendButton2;
