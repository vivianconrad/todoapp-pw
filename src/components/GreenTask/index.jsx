import React from "react";
import styled from "styled-components";


function GreenTask(props) {
  const { path8, line1 } = props;

  return (
    <GreenTask1>
      <OverlapGroup>
        <Path8 src={path8} alt="Path 8" />
        <Line1 src={line1} alt="Line 1" />
        <Rectangle2></Rectangle2>
      </OverlapGroup>
    </GreenTask1>
  );
}

const GreenTask1 = styled.div`
  position: absolute;
  height: 65px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 345px;
  background-color: var(--white);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--dove-gray);
  box-shadow: 3px 3px 1px #00000029;
`;

const OverlapGroup = styled.div`
  width: 345px;
  height: 65px;
  position: relative;
  margin-top: -0.21px;
  border-radius: 5px;
`;

const Path8 = styled.img`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 1px;
  left: 1px;
  object-fit: cover;
`;

const Line1 = styled.img`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Rectangle2 = styled.div`
  position: absolute;
  width: 345px;
  height: 65px;
  top: 0;
  left: 0;
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--pink-swan);
`;

export default GreenTask;
