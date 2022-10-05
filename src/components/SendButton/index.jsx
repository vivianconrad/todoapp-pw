import React from "react";
import styled from "styled-components";


function SendButton(props) {
  const { src } = props;

  return (
    <SendButton1>
      <SendButtonTriangle src={src} alt="Send Button Triangle" />
    </SendButton1>
  );
}

const SendButton1 = styled.div`
  align-self: flex-end;
  margin-bottom: 5px;
  height: 44px;
  margin-right: 5px;
  display: flex;
  padding: 6px 15.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 58px;
  background-color: var(--sea-pink);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--new-york-pink);
`;

const SendButtonTriangle = styled.img`
  width: 24px;
  height: 29px;
  object-fit: cover;
`;

export default SendButton;
