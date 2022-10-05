import React from "react";
import styled from "styled-components";
import { RalewayNormalDoveGray30px } from "../../styledMixins";


function Task(props) {
  const { path8, line1, className } = props;

  return (
    <Task1 className={`task-2 ${className || ""}`}>
      <OverlapGroup3 className="overlap-group3">
        <Path8 className="path-8-1" src={path8} alt="Path 8" />
        <Line1 className="line-1-1" src={line1} alt="Line 1" />
        <Rectangle2 className="rectangle-2"></Rectangle2>
        <Task2 className="task-3">Task</Task2>
      </OverlapGroup3>
    </Task1>
  );
}

const Task1 = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  min-width: 345px;
  background-color: var(--white);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--dove-gray);
  box-shadow: 3px 3px 1px #00000029;

  &.task-2.task-4 {
    margin-top: 32px;
  }

  &.task-2.task-6 {
    position: absolute;
    height: 65px;
    top: 0;
    left: 18px;
    margin-top: unset;
  }

  &.task-2.task-7 {
    margin-top: 32px;
  }

  &.task-2.task-8 {
    position: absolute;
    height: 65px;
    top: 80px;
    left: 18px;
    margin-top: unset;
  }

  &.task-2.task-9 {
    position: absolute;
    height: 65px;
    top: 0;
    left: 18px;
    margin-top: unset;
  }
`;

const OverlapGroup3 = styled.div`
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

const Task2 = styled.div`
  ${RalewayNormalDoveGray30px}
  position: absolute;
  top: 18px;
  left: 142px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

export default Task;
