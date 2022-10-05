import React from "react";
import styled from "styled-components";


function ColoredSmile(props) {
  const { path18, className } = props;

  return (
    <ColoredSmile1 className={`colored-smile ${className || ""}`}>
      <PathContainer className="path-container-1">
        <Path7 className="path-7-1" src="/img/path-7-1@1x.png" alt="Path 7" />
        <Path18 className="path-18" src={path18} alt="Path 18" />
      </PathContainer>
      <Path6 className="path-6-1" src="/img/path-6-1@1x.png" alt="Path 6" />
    </ColoredSmile1>
  );
}

const ColoredSmile1 = styled.div`
  flex: 1;
  width: 55px;
  display: flex;
  flex-direction: column;
  padding: 13.6px 10.7px;
  align-items: flex-start;
  min-height: 100%;
  gap: 6px;
  background-color: var(--sea-pink);
  border-radius: 27.5px;
  border: 3px solid;
  border-color: var(--new-york-pink);

  &.colored-smile.group-2-1 {
    margin-top: 1px;
    min-height: 55px;
    flex: unset;
  }

  &.colored-smile.group-2-2 {
    margin-left: 92px;
    margin-bottom: 6px;
    min-height: 55px;
    background-color: var(--white);
    flex: unset;
  }
`;

const PathContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 33px;
  gap: 7px;
`;

const Path7 = styled.img`
  width: 13px;
  height: 8px;
  margin-top: 0.21px;
  object-fit: cover;
`;

const Path18 = styled.img`
  width: 13px;
  height: 9px;
  object-fit: cover;
`;

const Path6 = styled.img`
  width: 25px;
  height: 12px;
  margin-left: 1.29px;
  object-fit: cover;
`;

export default ColoredSmile;
