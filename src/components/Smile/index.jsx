import React from "react";
import styled from "styled-components";


function Smile(props) {
  const { overlapGroup, path7, path28, path6 } = props;

  return (
    <Smile1>
      <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
        <PathContainer>
          <Path7 src={path7} alt="Path 7" />
          <Path7 src={path28} alt="Path 28" />
        </PathContainer>
        <Path6 src={path6} alt="Path 6" />
      </OverlapGroup>
    </Smile1>
  );
}

const Smile1 = styled.div`
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-width: 46px;
`;

const OverlapGroup = styled.div`
  width: 49px;
  margin-top: -1.5px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  align-items: center;
  min-height: 49px;
  gap: 6px;
  border-radius: 23px;
  background-size: cover;
  background-position: 50% 50%;
`;

const PathContainer = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 29px;
  gap: 5px;
`;

const Path7 = styled.img`
  width: 12px;
  height: 8px;
  object-fit: cover;
`;

const Path6 = styled.img`
  width: 23px;
  height: 11px;
  object-fit: cover;
`;

export default Smile;
